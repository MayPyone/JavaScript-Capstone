import { countitem, items } from './itemcount.js';
export const popup=(data,element)=>{
    const section = document.createElement('section');
    section.classList.add("section");
    const image = document.createElement('img');
    image.src = data.image.original;
    image.alt = data.name;
}