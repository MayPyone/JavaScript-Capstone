import { countitem, items } from './itemcount.js';
import { create_comment, get_comment } from './comment.js';
import { comment_count, commet_style } from './comment_counter.js';

export const add_comment = (element) => {
  const form = document.querySelector('form');
  const commentbox = document.querySelector('.line');
  const span2 = document.createElement('span');
  let date; let data;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input_val = document.querySelector('input');
    const area_val = document.querySelector('textarea');
    const comment = document.querySelector('.counter');
    commentbox.innerHTML = '';
    create_comment(element, input_val.value, area_val.value);
    const comment_data = await get_comment(element);
    comment_data.map((c_data, i) => {
      span2.classList.add('c_span');
      span2.innerHTML += `<div>${c_data.creation_date}${c_data.username} : ${c_data.comment}</div>`;
      commentbox.appendChild(span2);
      date = comment_data[i].creation_date;
      return date;
    });
    span2.innerHTML += `<div>${date} ${input_val.value}: ${area_val.value}</div>`;
    data = comment_count(comment_data) + 1;
    commet_style();
    comment.innerHTML = `Comments${data}`;
  });
};

export const popup = async (data, element) => {
  const section = document.createElement('section');
  section.classList.add('section');
  const image = document.createElement('img');
  image.src = data.image.original;
  image.alt = data.name;
  const head = document.querySelector('.header');
  const shows = document.querySelector('.shows');
  shows.style.display = 'none';
  head.style.display = 'none';

  // container
  const container = document.querySelector('.pop');
  container.style.display = 'block';
  const cross_button = document.createElement('button');
  const cross_icon = document.createElement('i');
  cross_button.classList.add('cross');
  cross_icon.classList.add('fa-2x');
  cross_icon.classList.add('fa-solid');
  cross_icon.classList.add('fa-xmark');
  cross_button.className = 'close';
  const title = document.createElement('span');
  title.classList.add('titlecount');
  title.innerHTML = `Movie ${element}`;
  const list = document.createElement('ul');
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const list4 = document.createElement('li');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  // pop
  // container.style.display='none';
  div1.append(list1);
  div1.append(list2);
  div2.append(list3);
  div2.append(list4);

  list.append(div1);
  list.append(div2);

  list1.innerHTML = `Title : ${data.name}`;
  list2.innerHTML = `Type : ${data.type}`;
  list3.innerHTML = `Language : ${data.language}`;
  list4.innerHTML = `Genre : ${data.genres}`;

  const comment = document.createElement('span');
  comment.classList.add('titlecount');
  comment.className = 'counter';
  comment.classList.add('comment');

  const commentbox = document.createElement('div');
  commentbox.className = 'line';

  commentbox.classList.add('commentbox');
  commentbox.classList.add('titlecount');
  const form_title = document.createElement('span');
  form_title.innerHTML = 'Add a comment';
  form_title.classList.add('titlecount');
  form_title.classList.add('comment');

  const comment_data = await get_comment(element);
  comment_data.forEach((c_data) => {
    const span2 = document.createElement('span');
    span2.className = 'decor';
    span2.classList.add('c_span');
    span2.innerHTML += `<di>${c_data.creation_date}${c_data.username} : ${c_data.comment}</div>`;
    commentbox.appendChild(span2);
    comment.innerHTML = `Comments${comment_count(comment_data)}`;
  });

  const input_name = document.createElement('input');
  input_name.placeholder = 'Your name';
  const form = document.createElement('form');
  form.append(form_title);
  form.append(input_name);
  const area = document.createElement('textarea');
  area.placeholder = 'Your insights';
  area.classList.add('area');
  form.append(area);

  const pop_comment = document.createElement('button');
  pop_comment.innerHTML = 'Comment';
  pop_comment.className = 'pop_comment';
  form.append(pop_comment);

  cross_button.appendChild(cross_icon);
  section.append(image);
  section.append(cross_button);
  section.append(title);
  section.append(list);
  section.append(comment);
  section.appendChild(commentbox);
  section.append(form);
  container.appendChild(section);

  // close button
  const close = document.querySelector('.close');
  close.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      shows.style.display = 'flex';
      head.style.display = 'flex';
      container.style.display = 'none';
      container.innerHTML = '';
    }
  });

  add_comment(element);
};
