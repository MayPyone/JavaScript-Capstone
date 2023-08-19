export const create_comment = (id, name, comment) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OOfjYu3VsRJgxqrLlAOO/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: `${id}`,
        username: `${name}`,
        comment: `${comment}`,
      },
    ),
  })
    .then((response) => response.json());
};
export const get_comment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OOfjYu3VsRJgxqrLlAOO/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

// create_comment(1,"shwe","nice");
// get_comment(2);