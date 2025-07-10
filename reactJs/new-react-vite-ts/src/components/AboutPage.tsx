import { useContext } from "react";
import CartContext from "./CartContext";

const AboutPage = () => {
  const cartInfo = useContext(CartContext);

  return <div>User Name: {cartInfo.userName}</div>;
};

export default AboutPage;
