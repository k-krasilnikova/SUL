interface IUserInfo {
  [key: string]: { order: number; label: string };
}

export const USER_INFO_LABEL: IUserInfo = {
  position: { order: 1, label: 'Position:' },
  stack: { order: 2, label: 'Stack:' },
  group: { order: 3, label: 'Group:' },
  phone: { order: 4, label: 'Phone:' },
  skype: { order: 5, label: 'Skype:' },
};
