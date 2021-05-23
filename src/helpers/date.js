const padDigit = num => (num < 10 ? `0${num}` : num);

export const formatDate = date => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = padDigit(currentDate.getMonth() + 1);
  const day = padDigit(currentDate.getDate());
  const hours = padDigit(currentDate.getHours());
  const minutes = padDigit(currentDate.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
