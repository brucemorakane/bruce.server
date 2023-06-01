import React from 'react'
const Slider = () => {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img data-lazy-src="https://i.ytimg.com/vi/0pRhBxOe3wo/hqdefault.jpg" alt="" width="480" height="360" data-pin-description="The 30 Best Freshwater Aquarium Fish Species" data-pin-title="The 30 Best Freshwater Aquarium Fish Species" data-ll-status="loaded" class="entered lazyloaded" src="https://i.ytimg.com/vi/0pRhBxOe3wo/hqdefault.jpg"></img>
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