const convertTimestampToDetails = (timestamp) => {
  let newTimestamp = timestamp
  const years = parseInt(newTimestamp / (1000*365*24*60*60));
  newTimestamp = newTimestamp - years* 1000*365*24*60*60

  const months = parseInt(newTimestamp / (1000*12*30*24*60*60));
  newTimestamp = newTimestamp - months* 1000*12*30*24*60*60
  
  const days = parseInt(newTimestamp / (1000*24*60*60));
  newTimestamp = newTimestamp - days* 1000*24*60*60
  
  const hours = parseInt(newTimestamp / (1000*60*60));
  newTimestamp = newTimestamp - hours* 1000*60*60
  
  const minutes = parseInt(newTimestamp / (1000*60));
  newTimestamp = newTimestamp - minutes* 1000*60

  const seconds = parseInt(newTimestamp/1000);

  let parsedString = '';
  parsedString = `${seconds}s`
  if (Math.abs(minutes) > 0) {
    parsedString = `${minutes}m ${parsedString}`
  }
  if (Math.abs(hours) > 0) {
    parsedString = `${hours}h ${parsedString}`
  }
  if (Math.abs(days) > 0) {
    parsedString = `${days}d ${parsedString}`
  }
  if (Math.abs(months) > 0) {
    parsedString = `${months}m ${parsedString}`
  }
  if (Math.abs(years) > 0) {
    parsedString = `${years}y ${parsedString}`
  }
  
  return {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    parsedString: parsedString,
  }
}

export default convertTimestampToDetails