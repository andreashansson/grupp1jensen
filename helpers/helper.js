exports.dater = function () {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  if (month < 10) month = '0' + month;
  var day = dateObj.getUTCDate();
  if (day < 10) day = '0' + day;
  var year = dateObj.getUTCFullYear();

  var newdate = year + "-" + month + "-" + day;
  return newdate;
}
