export enum Gender {
    MALE = 'men',
    FEMALE = 'women',
    CHILD = 'child',
    INFANT = 'infant',
    PRESCHOOL = 'preschool',
    TODDLER = 'toddler',
    UNISEX = 'unisex',
    YOUTH = 'youth'

}

export enum Brand {
    NIKE = 'Nike',
    JORDAN = 'Jordan',
    CONVERSE = 'Converse',
    ADIDAS = 'Adidas',
    VANS = 'Vans',
    PUMA = 'Puma',
    REEBOK = 'Reebok',
    NEW_BALANCE = 'New Balance',
    SAUCONY = 'Saucony',
    ASICS = 'Asics',
    UNDER_ARMOUR = 'Under Armour'
}

export enum Color {
    RED = 'Red',
    BLACK = 'Black',
    BLUE = 'Blue',
    PURPLE = 'Purple',
    ORANGE = 'Orange',
    GREEN = 'Green',
    YELLOW = 'Yellow',
    PINK = 'Pink',
    WHITE = 'White',
    BROWN = 'Brown',
    GREY = 'Grey'

}

export interface ShoeFilters {
    limit: string;
    page?: string;
    name?: string;
    brand?: Brand;
    gender?: Gender;
    color?: string;
    releaseYear?: string;
}