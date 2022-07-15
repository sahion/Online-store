import IBook from '../interfaces/IBook';

const data: IBook[] = [
  {
    name: '1984',
    author: 'Джордж Оруэлл',
    genre: ['Фантастика', 'Проза'],
    year: 1949,
    image: '../img/1984-George-Orwell.png',
    quantity: 10,
  },
  {
    name: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    genre: ['Роман', 'Проза'],
    year: 1936,
    image: '../img/Erih_Mariya_Remark__Tri_tovarischa.jpeg',
    quantity: 5,
  },
  {
    name: 'Великий Гэтсби',
    author: 'Фрэнсис Скотт Фицджеральд',
    genre: ['Роман'],
    year: 1925,
    image: '../img/frensis-skott-ficdzherald-velikiy-getsbi.jpg',
    quantity: 20,
  },
  {
    name: 'Гарри Поттер и философский камень',
    author: 'Джоан Роулинг',
    genre: ['Фэнтези'],
    year: 1997,
    image: '../img/harry-potter-philosopher-stone.jpg',
    quantity: 1,
  },
  {
    name: 'Бойцовский клуб',
    author: 'Чак Паланик',
    genre: ['Роман'],
    year: 1996,
    image: '../img/fight-club-chak-palanik.jpg',
    quantity: 1,
  },
];

export default data;
