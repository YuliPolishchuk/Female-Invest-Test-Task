export const calculateLength = (lengthInMin: number): string => {
  let length;
  if (lengthInMin) {
    if (lengthInMin / 60 < 60) {
      length = `${lengthInMin}m`;
    } else {
      const hours = Math.floor(lengthInMin / 60 / 60);
      const minutes = (lengthInMin / 60) % 60;
      if (minutes === 0) {
        length = `${hours}h`;
      } else {
        length = `${hours}h ${minutes}m`;
      }
    }
    return length;
  } else {
    return "";
  }
};
