import { createContext } from 'react'

interface CartContextType {
    userId: number;
    userName: string;
}

const CartContext = createContext<CartContextType>({
    userId: 1,
    userName: " "
});

export default CartContext;