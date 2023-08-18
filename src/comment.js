export const create_comment = (id,name,comment)=> {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OOfjYu3VsRJgxqrLlAOO/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },