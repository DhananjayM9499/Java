exports.dateTime = function () {
  return Date();
};
exports.myTime = function () {
  const timesNow = new Date();
  let hrs = timesNow.getHours();
  let mins = timesNow.getMinutes();
  let sec = timesNow.getSeconds();
  return hrs + ":" + mins + ":" + sec;
};
