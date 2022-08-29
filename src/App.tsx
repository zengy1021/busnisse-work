// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Collection from './layout/Collection';
// import Home from './layout/Home';
import ShoppingCar from './layout/ShoppingCar';
import UserMember from './layout/UserMember';
import './App.less';
function App() {
  return (
    <div className="layout_view">
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="userMember" element={<UserMember />}></Route>
        <Route path="/shoppingCar" element={<ShoppingCar />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
  // useRoutes(layoutRouteList);
}

export default App;
