import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    const css={width: '18rem'}
  
  return (
    <>
        <div className="card" style={css}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.data}</p>
                <button  className="btn btn-primary">{props.btn}</button>
            </div>
        </div>
    </>
  )
}

export default Card
