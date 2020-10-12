const curr = new Date();
curr.setDate(curr.getDate() + 1);

export default curr.toISOString().substr(0, 10);

export const isFutureDate = (date) => {
  const now = new Date();

  return new Date(date) - now > 0;
};
