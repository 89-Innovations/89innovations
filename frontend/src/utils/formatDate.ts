export const formatDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};
