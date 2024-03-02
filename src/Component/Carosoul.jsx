import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Carosoul = (props) => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.image2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={props.image3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carosoul
