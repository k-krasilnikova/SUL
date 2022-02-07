export const getPreviewId = (link: string): string | boolean => {
  let previewLink: string | boolean;
  if (link.indexOf('youtube')) {
    const idInLink = link.indexOf('=') + 1;
    const id = link.slice(idInLink);
    previewLink = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  } else {
    previewLink = true;
  }
  return previewLink;
};
