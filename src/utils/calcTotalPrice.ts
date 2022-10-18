import { CartItems } from "../redux/slices/CartSlice"

export const calcTotalPrice = (items: CartItems[]) => {
    return items.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum)
    }, 0)
}