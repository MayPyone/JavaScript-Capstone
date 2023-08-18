import { countitem, items } from './itemcount.js';
export const popup=(data,element)=>{
    const section = document.createElement('section');
    section.classList.add("section");
    const image = document.createElement('img');
    image.src = data.image.original;
    image.alt = data.name;
    const container =document.querySelector('body');
    const cross_button = document.createElement('button');
    const cross_icon = document.createElement('i');
    cross_button.classList.add('cross');
    cross_icon.classList.add('fa-2x');
    cross_icon.classList.add('fa-solid');
    cross_icon.classList.add('fa-xmark');
    const title = document.createElement('span');
    title.classList.add('titlecount');
}