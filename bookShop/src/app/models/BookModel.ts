export interface IBook {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
}

export enum Category {
    fiction = 'Fiction',
    nonFiction = 'Non fiction',
    sacredText = 'Sacred text',
}
