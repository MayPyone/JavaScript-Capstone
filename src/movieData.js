import { forEach } from 'lodash';
import {
  myid, url, addlikes, getLikes,
} from './like.js';

import { countitem, items } from './itemcount.js';
import { popup } from './popup.js';

const sourceUrl = 'https://api.tvmaze.com/shows/';

export const collect = async (element) => {
  addlikes(element);
  const likenum = await getLikes(element - 1);
  const head = document.querySelector('.header');
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
  button.className = 'comment';
  button.innerHTML = 'Comments';
  const icon = document.createElement('i');
  const wrapper = document.createElement('button');
  icon.classList.add('fa-regular');
  icon.classList.add('fa-heart');
  icon.classList.add('fa-lg');
  divbut.classList.add('action');
  wrapper.appendChild(icon);
  divbut.append(button);
  divbut.append(wrapper);
  imageWrapper.appendChild(image);
  imageWrapper.append(imageLink);
  imageWrapper.append(num);
  imageWrapper.append(divbut);
  shows.append(imageWrapper);
  icon.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      wrapper.classList.add('wrapper');
      num.innerHTML = `${likenum.likes += 1} likes`;
    }
  });

  countitem(items(element));

  // popup
  button.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      popup(data, element);
    }
  });
};

const total = 15;
export const show = () => {
  for (let i = 1; i <= total; i += 1) {
    collect(i);
  }
};
