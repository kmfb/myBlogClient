const PATH_BASE = "http://45.79.150.188:5000/api/v1";
const QUERY_All = "/articles";
const QUERY_BY_ID = "/article/";
const ADD_PATH = '/article';
const LOGIN_PATH = '/user';
const token_PATH = '/token'
const allUrl = PATH_BASE + QUERY_All;
const idUrl = PATH_BASE + QUERY_BY_ID;
const addUrl = PATH_BASE + ADD_PATH;
const loginUrl = PATH_BASE + LOGIN_PATH;
const tokenUrl = PATH_BASE + token_PATH;

const allArticles = () => {
  return fetch(allUrl)
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

const addArticle = (data) => {
  return fetch(addUrl, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
      .then((res) => {
        return res.json()
      })
      .then(data => {
        return data
      })
}

const login = (data) => {
  return fetch(loginUrl, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
}

const validateToken = async (data) => {
  console.log(data, 'token data')
  const response = await fetch(tokenUrl, {
    method: 'POST', // or 'PUT'
    body: data ? JSON.stringify(data) : '', // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const res = await response.json()

  return res.data

}

export {allArticles, article, addArticle, login, validateToken}