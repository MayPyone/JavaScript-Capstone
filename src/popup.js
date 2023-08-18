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
    title.innerHTML="Movie "+ element;
    const list = document.createElement('ul');
    const list1 = document.createElement('li');
    const list2 = document.createElement('li');
    const list3 = document.createElement('li');
    const list4 = document.createElement('li');
    const  div1 = document.createElement('div');
    const  div2 = document.createElement('div');
    container.innerHTML=" ";
    div1.append(list1);
    div1.append(list2);
    div2.append(list3);
    div2.append(list4);

    list.append(div1);
    list.append(div2);

    list1.innerHTML="Title : "+ data.name;
    list2.innerHTML="Type : "+ data.type;
    list3.innerHTML="Language : "+ data.language;
    list4.innerHTML="Genre : "+ data.genres;

    const comment = document.createElement('span');
    comment.classList.add('titlecount');
    comment.classList.add('comment');
    comment.innerHTML="Comments "+ element;
    const commentbox = document.createElement('div');
    commentbox.innerHTML="Comments ";
    commentbox.classList.add('commentbox');
    commentbox.classList.add('titlecount');
    const form_title= document.createElement('span');
    form_title.innerHTML="Add a comment";
    form_title.classList.add('titlecount');
    form_title.classList.add('comment');
    const input_name= document.createElement('input');
    input_name.placeholder="Your name";
    const form = document.createElement('form');
    form.append(form_title);
    form.append(input_name);
    const area = document.createElement('textarea');
    area.placeholder="Your insights";
    area.classList.add('area');
    form.append(area);
    
    const pop_comment = document.createElement('button');
    pop_comment.innerHTML="Comment";
    pop_comment.className="pop_comment";
    form.append(pop_comment);

    cross_button.appendChild(cross_icon);
    section.append(image);
    section.append(cross_button);
    section.append(title);
    section.append(list);
    section.append(comment);
    section.append(commentbox);
    section.append(form);
    container.append(section);  
}