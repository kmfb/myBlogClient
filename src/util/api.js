const PATH_BASE = "http://localhost:5000/api/v1";
const QUERY_All = "/articles";
const QUERY_BY_ID = "/article/"
const allUrl = PATH_BASE + QUERY_All;
const idUrl = PATH_BASE + QUERY_BY_ID;

const allArticles = () => {
  return  fetch(allUrl)
      .then(res => res.json())
      .then(data => {
        return data
      });
}

const article = (param) => {
  return fetch(idUrl + param)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        return data
      })
}

export { allArticles, article }