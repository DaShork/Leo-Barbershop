export const getImage = (imagePath) => {
  if (!imagePath) return imagePath;

  const normalized = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${import.meta.env.BASE_URL}${normalized}`;
};
