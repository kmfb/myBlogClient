const formatTime = (time) => {
  let t = new Date(time)
  let year = t.getFullYear()
  let month = t.getMonth() + 1
  let day = t.getDate()
  if (month <= 9) {
    month = '0' + month
  }
  if (day <= 9) {
    day = '0' + day
  }
  let formatTime = `${year}-${month}-${day}`
  return formatTime
}

export { formatTime }