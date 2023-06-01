import React from 'react'
const Slider = () => {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://media.istockphoto.com/id/615402422/photo/silhouette-of-traditional-fishermen-throwing-net-fishing-inle-lake.jpg?s=612x612&w=0&k=20&c=ky0GfUmoVCtQ1fZLYOc7QiOJhqUurvPQuvctkEcbsvE=" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.shutterstock.com/image-photo/fishman-by-lake-out-town-260nw-1920876230.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider