import { Byte } from "@angular/compiler/src/util"

export class Product 
{
    id : Number
    name : string
    url : string
    description : string
    price : Number
    type!:string;
    brand!:string;
    ram!:number;
    hdd!:number;
    addedOn : Date
    screen : string


    image : [Byte]
    imageUrl : string
    productName!: string;
    productDis!:string;
    productDisLong!:string;
    quantity!:number;
    categoryName!:string;
    productImgUrl!:string;
    productid!: number;
    filter: any
}