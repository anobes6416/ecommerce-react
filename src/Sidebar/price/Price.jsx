import React from 'react';
import './Price.css';
import Input from '../../components/Input';

function Price({handleChange}) {
  return (
    <div className='ml'>
      <h1 className="sidebar-title price-title">Price</h1>
    
      <label  className="sidebar-label-container">
          <input type="radio" name="test1" onChange={handleChange} value="" />
          <span className="checkmark"></span>All
      </label>

      <Input
          handleChange={handleChange}
          value={50}
          title="$0-50"
          name="test1"
      />

      <Input
          handleChange={handleChange}
          value={100}
          title="$50-100"
          name="test1"
      />

      <Input
          handleChange={handleChange}
          value={150}
          title="$100-150"
          name="test1"
      />

      <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test1"
      />

    </div>
  )
}

export default Price