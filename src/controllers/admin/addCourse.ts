import { NextFunction, Request, Response } from 'express';
import { ICreateCourseBody } from '../../interfaces/ICourses/IQueryCourses';
import isValidDescription from '../../utils/validation/isValidDescription';

import isValidMaterials from '../../utils/validation/isValidMaterials';
import { addMaterialStages } from '../../utils/normaliser/materials';
import isValidQuestions from '../../utils/validation/isValidQuestions';
import { setAnswerProperNumbersToQuestions } from '../../utils/normaliser/test';
import SkillModel from '../../db/models/Skill';
import TestModel from '../../db/models/Tests';
import CourseModel from '../../db/models/Course';
import isValidAvatar from '../../utils/validation/isValidAvatar';

const addCourse = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = {
      title: 'Course title',
      avatar: 'https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg',
      description: 'description',
      technologies: [{ skill: 'Java', points: 1 }],
      materials: [{ stage: 1, content: ['google.com'] }],
      test: {
        title: 'Beta test',
        questions: [
          {
            qN: 1,
            question: 'Who?',
            answers: [
              {
                variant: 'I',
                aN: 1,
              },
              {
                variant: 'You',
                aN: 2,
              },
            ],
            correctAnswer: 1,
          },
        ],
        timeout: 900,
        attempts: 0,
      },
      complexity: 1,
    };

    const courseDataToSave: ICreateCourseBody = { technologies: [] };

    courseDataToSave.title = courseDataFromRequest.title;
    courseDataToSave.complexity = courseDataFromRequest.complexity;

    const isDescriptionValid = isValidDescription(courseDataFromRequest.description);

    if (isDescriptionValid) {
      courseDataToSave.description = courseDataFromRequest.description;
    }

    const isMaterialsValid = isValidMaterials(courseDataFromRequest.materials);

    if (isMaterialsValid && courseDataFromRequest.materials) {
      const materialsWithStages = addMaterialStages(courseDataFromRequest.materials);

      courseDataToSave.materials = materialsWithStages;
    }

    let techs;

    if (courseDataFromRequest.technologies) {
      techs = await Promise.all(
        courseDataFromRequest.technologies.map(({ skill }) => {
          return SkillModel.findOneAndUpdate(
            { name: skill },
            { $inc: { maxScore: 1 } },
            { returnDocument: 'after' },
          );
        }),
      );

      techs.forEach((skill, index) => {
        if (skill) {
          courseDataToSave?.technologies?.push({
            // @ts-ignore
            skill,
            points: courseDataFromRequest.technologies[index].points,
          });
        }
      });
    }

    const isQuestionsValid = isValidQuestions(courseDataFromRequest.test?.questions);

    if (isQuestionsValid) {
      if (courseDataFromRequest.test) {
        const properQuestionsToSet = setAnswerProperNumbersToQuestions(
          courseDataFromRequest.test.questions,
        );
        const test = await TestModel.create({
          title: courseDataFromRequest.test.title,
          questions: properQuestionsToSet,
          timeout: courseDataFromRequest.test.timeout,
        });

        courseDataToSave.test = test;
      }
    }

    const isAvatarValid = isValidAvatar(courseDataFromRequest.avatar);
    if (isAvatarValid) {
      courseDataToSave.avatar = courseDataFromRequest.avatar;
    }
    console.log(courseDataToSave);
    await CourseModel.create(courseDataToSave);

    res.locals.results = courseDataToSave;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default addCourse;
