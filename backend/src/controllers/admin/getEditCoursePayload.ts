import { NextFunction } from 'express';

import {
  TGetEditCoursePayloadRequest,
  TGetEditCoursePayloadResponse,
} from 'interfaces/requests/admin/getEditCoursePayload';

const getEditCoursePayload = async (
  req: TGetEditCoursePayloadRequest,
  res: TGetEditCoursePayloadResponse,
  next: NextFunction,
) => {};

export default getEditCoursePayload;
