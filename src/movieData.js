import { forEach } from 'lodash';
import {
  myid, url, addlikes, getLikes,
} from './like.js';

const sourceUrl = 'https://api.tvmaze.com/shows/';

export const collect = async (element) => {
  addlikes(1);
  const likenum = await getLikes(element);
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
  const num = document.createElement('span');
  num.classList.add('number');
  num.innerHTML = `${likenum.likes} likes`;
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
  imageWrapper.append(num);
  imageWrapper.append(divbut);
  shows.append(imageWrapper);
};

const total = 14;
export const show = () => {
  for (let i = 1; i <= total; i += 1) {
    collect(i);
  }
};
