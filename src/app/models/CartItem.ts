import { Byte } from "@angular/compiler/src/util"
import { Product } from "./Product"

export class CartItem {
    addedOn : Date
    quantity : number
    product : Product
    totalPrice : Number
    image : [Byte]
    imageUrl : string
}