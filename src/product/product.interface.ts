export  interface IProduct{
    id? : number | string,
    name: string,
    price: number,
    image: string
}
export interface IProductState{
    product: IProduct[]
}

export  interface User{
    id? : number | string,
    name: string,
    password: string,
    confirmPasword: string
}
export interface UserState{
    user: User[]
}