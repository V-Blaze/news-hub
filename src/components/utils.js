const getTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);

  const timeDiff = now - date; // Time difference in milliseconds

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `${months} months ago`;
  } if (days > 0) {
    return `${days} days ago`;
  } if (hours > 0) {
    return `${hours} hours ago`;
  } if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  return `${seconds} seconds ago`;
};

export const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const getCurrentDate = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDate = new Date();

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${dayOfWeek} ${month} ${day}, ${year}`;

  return formattedDate;
};

export default getTimeAgo;
