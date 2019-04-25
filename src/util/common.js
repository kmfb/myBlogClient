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

const Markdown = () => {

}

Markdown.prototype = {
  compile: function (rawValue) {
    let rows = rawValue.split('\n')
    let len = rows.length

    let identifyRow
    let output = ''
    for (var i = 0; i < len; i++) {
      let row = rows[i]

      identifyRow = row.match(/^#\s/)
          || row.match(/^##\s/)
          || row.match(/^###\s/)
          || row.match(/^####\s/)
          || row.match(/^#####\s/)
          || row.match(/^######\s/)
          || row.match(/^\*{3,}/)
          || row.match(/^>\s/)
          || row.match(/^\*\s/)
          || row.match(/^\d\.\s/)
          || row.match(/^```$/)
          || row.match(/^\|.*\|/)
      if (identifyRow) {
        switch (identifyRow[0]) {
          case '# ':

            output += `<h1>${row.substring(2)}</h1>`
            break
          case '## ':
            output += `<h2>${row.substring(3)}</h2>`
            break
          case '### ':
            output += `<h3>${row.substring(4)}</h3>`
            break
          case '#### ':
            output += `<h4>${row.substring(5)}</h4>`
            break
          case '##### ':
            output += `<h5>${row.substring(6)}</h5>`
            break
          case '###### ':
            output += `<h6>${row.substring(7)}</h6>`
            break
          case row.match(/^\*{3,}/) && identifyRow[0]:
            output += row.replace(/^\*{3,}/g, '<hr>')
            break
          case '> ':
            let qInner = ''
            let qRe = /^>\s/
            while (i < len && rows[i].match(qRe)) {
              qInner += `<p>${rows[i].substring(2, rows[i].length)}</p>`
              i++
            }
            output +=  `<blockquote>${qInner}</blockquote>`
            break
          case '* ':
            let lInner = ''
            let lRe = /^\*\s/
            while (i < len && rows[i].match(lRe)) {
              lInner += `<li>${rows[i].substring(2, rows[i].length)}</li>`
              i++
            }
            output +=  `<ul>${lInner}</ul>`
            break
          case row.match(/^\d\.\s/) && row.match(/^\d\.\s/)[0]:
            let olInner = ''
            let olRe = /^\d\.\s/
            while (i < len && rows[i].match(olRe)) {
              olInner += `<li>${rows[i].substring(2, rows[i].length)}</li>`
              i++
            }
            output +=  `<ol>${olInner}</ol>`
            break
          case '```':
            let codeInner = ''
            let codeRe = /^```$/
            i++
            while (i < len && !codeRe.test(rows[i])) {
              codeInner += `${rows[i]}\n`
              i++
            }
            output +=  `<pre>${codeInner}</pre>`
            break
          case  row.match(/\|.*\|/) && row.match(/\|.*\|/)[0]:
            let trInner = ''
            let trRe = /^\|.*\|/
            console.log(rows[0])
            console.log(trRe.test(rows[0]))
            while (i < len && trRe.test(rows[i])) {

              let trArray = rows[i].split('|')
              trInner += '<tr>'
              for (let j = 0; j < trArray.length; j++) {
                if (trArray[j]) {
                  trInner += `<td>${trArray[j]}</td>`
                }

              }
              trInner += '</tr>'
              i++
            }
            output += `<table>${trInner}</table>`
            break
          default:
            break
        }
      } else {
        output += `<p>${this.format(row)}</p>`
      }

    }
    return output
  },
  format: function (row) {
    row = row.replace(/\s/g, "&nbsp;")

    let bold = row.match(/\*{2}[^*].*?\*{2}/g)
    if (bold) {
      for (let i = 0; i < bold.length; i++) {
        row = row.replace(bold[i], `<b>${bold[i].substring(2, bold[i].length - 2)}</b>`)
      }

    }

    let italic = row.match(/\*[^*].*?\*/g)
    if (italic) {
      for (let i = 0; i < italic.length; i++) {
        row = row.replace(italic[i], `<i>${italic[i].substring(1, italic[i].length - 1)}</i>`)
      }

    }

    let code = row.match(/`.*?`/)
    if (code) {
      for (let i = 0; i < code.length; i++) {
        row = row.replace(code[i], `<code>${code[i].substring(1, row.length - 1)}</code>`)
      }

    }

    let img = row.match(/!\[.*\]\(.*\)/g)
    let altRe = /\[.*\]/
    let linkRe = /\(.*\)/
    if (img) {
      for (let i = 0; i < img.length; i++) {
        let alt = img[i].match(altRe)[0];
        let link = img[i].match(linkRe)[0];
        row = row.replace(img[i], `<img alt=${alt.substring(1, alt.length - 1)} src=${link.substring(1, link.length - 1)}>`)
      }
    }
    return row
  }
}


export { formatTime, getNow, Markdown }