import React, { useState } from 'react';

import { ConfirmLogOutModalWindow } from 'components/Layout/Header/ConfirmLogOut';
import { User } from 'types/user';
import { Course } from 'types/course';
import { useLogOut } from 'api/logOut/';
import { searchAllCourses } from 'api/courses';

import Header from './Header';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

type Props = User & MobileMenuProps;

const HeaderContainer: React.FC<Props> = ({
  firstName,
  lastName,
  avatar,
  notifications,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [coursesFound, setFoundCourses] = useState<Array<Course>>([]);

  const EMPTY_ARGUMENT = null;

  const handleNotificationsOpen = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    setNotificationsOpen(!isNotificationsOpen);
  };
  const handleFilterOpen = () => {
    setFilterOpen(!isFilterOpen);
  };
  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const { mutateAsync, isLoading } = useLogOut();
  const handleConfirm = (): void => {
    setConfirmOpen(true);
  };

  const handleLogOut = (): void => {
    mutateAsync(EMPTY_ARGUMENT);
  };
  const cancelLogOut = (): void => {
    setConfirmOpen(false);
  };

  const searchCourses = (courseName: string): void => {
    setSearchOpen(true);
    if (courseName.length) {
      searchAllCourses(courseName).then((courses) => setFoundCourses(courses));
    } else {
      setSearchOpen(false);
    }
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <Header
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        notifications={notifications}
        isNotificationsOpen={isNotificationsOpen}
        isFilterOpen={isFilterOpen}
        handleNotificationsOpen={handleNotificationsOpen}
        handleFilterOpen={handleFilterOpen}
        handleNotificationsClose={handleNotificationsClose}
        handleFilterClose={handleFilterClose}
        handleConfirm={handleConfirm}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isSearchOpen={isSearchOpen}
        searchCourses={searchCourses}
        handleSearchClose={handleSearchClose}
        coursesFound={coursesFound}
      />
      <ConfirmLogOutModalWindow
        handleLogOut={handleLogOut}
        isConfirmOpen={isConfirmOpen}
        cancelLogOut={cancelLogOut}
        isLoading={isLoading}
        size="medium"
      />
    </>
  );
};
export default HeaderContainer;
