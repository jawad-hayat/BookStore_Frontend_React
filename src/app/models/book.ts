export interface Book {
    id: number,
    name: string,
    description: string,
    pictureUrl: string,
    price: number,
    bookBrand: string,
    bookType?: string,
    // quantityInStock?: number
}

export interface BookParams {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    brands: string[];
    pageNumber: number;
    pageSize: number;
}