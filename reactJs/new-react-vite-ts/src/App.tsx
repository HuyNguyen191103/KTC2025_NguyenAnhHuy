import "./App.css";
// import Calculator from './components/Calculator'
// import RandomNumber from './components/RandomNumber'
// import ToDoList from "./components/ToDoList";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoute from '../router/AppRoute';

function App() {
  return (
    <>
      {/* <RandomNumber></RandomNumber> */}
      {/* <ToDoList></ToDoList> */}
      {/* <Calculator></Calculator> */}
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
            <ul>
              <li>
                <Link to="/product/women">Women</Link>
              </li>
              <li>
                <Link to="/product/man">Men</Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link to={"/contact"}>Contact</Link>
          </li> */}
        </ul>
        <AppRoute />
        {/* <AppRoutes02 /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
