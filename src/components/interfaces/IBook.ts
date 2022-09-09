import Genre from '../types/Genre';

interface IBook {
  name: string;
  author: string;
  genre: Genre[];
  year: number;
  image: string;
  quantity: number;
  isPopular: boolean;
}

export default IBook;
