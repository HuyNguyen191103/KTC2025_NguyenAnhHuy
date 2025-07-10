// import React, { Children } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../src/components/HomePage'
import AboutPage from '../src/components/AboutPage'

    // const paths = [
    // {path: "/", element: <HomePage />},
    // {path:"/about", element: <AboutPage />}
    // ]
const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        {/* <Route path='/product' element={<Product/>}>
          <Route path='women' element={<Women/>} />
          <Route path='man' element={<Man/>} />
        </Route> */}
    </Routes>
  )
}
// function AppRoute02() {
//     const renderRoutes = (routes) => routes.map(({path, element, Children}, index)=> (
//         <Route key={index} path={path} element={element}>
//             {Children && renderRoutes(Children)}
//         </Route>
//     ));
//     return <Routes>{renderRoutes(paths)}</Routes>
// }

export default AppRoute