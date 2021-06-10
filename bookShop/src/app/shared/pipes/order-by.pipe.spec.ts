import { Category, IBook } from '../models/BookModel';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform', () => {
    const data: IBook[] = [
      {
        name: 'War and peace',
        description:
          'An epic novel by Leo Nikolaevich Tolstoy, describing Russian society in the era of wars against Napoleon in 1805-1812. The epilogue of the novel brings the story to 1820.',
        price: 5,
        category: Category.fiction,
        createDate: 0,
        isAvailable: true,
        count: 1,
        id: 2,
      },
    ];
    expect(pipe.transform(data, 'name', false)).toBeTruthy();
  });
});
