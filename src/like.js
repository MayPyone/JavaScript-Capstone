export const myid = 'OOfjYu3VsRJgxqrLlAOO';
export const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${myid}/likes/`;

export const addlikes = (id) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(
      { item_id: id },
    ),
  })
    .then((response) => response.json())
    .catch((error) => console.log('ERRor'));
};

export const getLikes = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${myid}/likes/`);
  const data = await response.json();
  return data[id];
};
