fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(
  ),
})
  .then((response) => response.json())
  .then((json) => console.log(json));