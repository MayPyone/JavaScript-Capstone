export const add = async (player, scores) => {
  if (player !== '' && scores !== '') {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cf3Cr4pDGiMnG7DbId9H/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player, scores),
    });
  }
};

export const submitting = () => {
  const user = document.querySelector('.users');
  const score = document.querySelector('.scores');
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => add({ user: user.value, score: score.value }));
};