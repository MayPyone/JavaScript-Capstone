import { forEach } from 'lodash';

const sourceUrl = 'https://api.tvmaze.com/shows/';

export const collect = async (element) => {
  const shows = document.querySelector('.shows');
  const response = await fetch(`https://api.tvmaze.com/shows/${element}`);
  const data = await response.json();
  const imageWrapper = document.createElement('section');
  imageWrapper.classList.add('show');
  const image = document.createElement('img');
  image.src = data.image.medium;
  image.alt = data.name;
  const imageLink = document.createElement('a');
  imageLink.href = data.url;
  imageLink.innerHTML = data.name;
  const divbut = document.createElement('div');
  const button = document.createElement('button');
  button.innerHTML = 'Comments';
  const icon = document.createElement('i');
  icon.classList.add('fa-regular');
  icon.classList.add('fa-heart');
  icon.classList.add('fa-lg');
  divbut.classList.add('action');
  divbut.append(button);
  divbut.append(icon);

  imageWrapper.appendChild(image);
  imageWrapper.append(imageLink);
  imageWrapper.append(divbut);
  shows.append(imageWrapper);
};

const total = 15;
export const show = () => {
  for (let i = 1; i <= total; i += 1) {
    collect(i);
  }
};
