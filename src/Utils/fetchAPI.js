const fetchAPI = ({
  url,
  method = "GET",
  body = null
}) => {
  const options = {
    method: method,
  }
  if (body) options.body = JSON.stringify(body)

  return fetch(url, options)
  .then(async res => {
    return {
      status: 'ok',
      data: await res.json()
    }
  }).catch(err => {
    return {
      status: 'error',
      stack: err
    }
  })
}


export default fetchAPI