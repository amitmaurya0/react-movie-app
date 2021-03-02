export const getYearFromDate = (date: string) => {
  const values = date.split("-");
  return parseInt(values[0]);
}

export const minutesToHour = (length: number) =>{
  var num = length;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
}