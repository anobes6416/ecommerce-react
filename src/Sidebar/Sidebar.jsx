import React from 'react';
import Category from './Category/Category';
import Price from './price/Price';
import Colors from './Colors/colors';
import './Sidebar.css';
function Sidebar({handleChange}) {
  return (
  <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 >🛒</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  )
}

export default Sidebar;