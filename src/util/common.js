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

const getNow = () => {
  const now = Date.now();
  const date = new Date(now)
  let yy = date.getFullYear()
  let mm = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  if (mm < 10) {
    mm = '0' + mm
  }
  if (d < 10) {
    d = '0' + d
  }
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }
  let dateStr = `${yy}-${mm}-${d} ${h}:${m}:${s}`
  return dateStr
}




export { formatTime, getNow }