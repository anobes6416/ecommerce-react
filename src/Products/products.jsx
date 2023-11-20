import React from 'react';

import './products.css'
import Card from '../components/Card';

function products({result}) {
  return (
    <div>
      <section className="card-container">{result}</section>
    </div>
  )
}

export default products