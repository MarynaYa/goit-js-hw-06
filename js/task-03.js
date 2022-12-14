const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//for (const img of images) {
const galleryEl = document.querySelector(`ul`);
//galleryEl.insertAdjacentHTML("afterbegin", `<li><img scr="${img.url}" alt="${img.alt}"><li>`);
//}

const itemEl = images.map(images => {

galleryEl.url = images.url;
galleryEl.alt = images.alt;
const galleryItemEl = `<li><img scr="${images.url}" alt="${images.alt}"><li>`;

  return galleryItemEl;
});

galleryEl.insertAdjacentHTML("afterbegin", itemEl);

