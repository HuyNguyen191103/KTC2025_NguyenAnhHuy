import { useContext } from 'react'
import CartContext from './CartContext'

const HomePage = () => {
    const cartInfo = useContext(CartContext)

  return (
    <div>
        User Id: {cartInfo.userId}
        <br />
    </div>
  )
}

export default HomePage