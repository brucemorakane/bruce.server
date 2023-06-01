import React from 'react'
const Slider = () => {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img data-lazy-src="https://i.ytimg.com/vi/0pRhBxOe3wo/hqdefault.jpg" alt="" width="480" height="360" data-pin-description="The 30 Best Freshwater Aquarium Fish Species" data-pin-title="The 30 Best Freshwater Aquarium Fish Species" data-ll-status="loaded" class="entered lazyloaded" src="https://i.ytimg.com/vi/0pRhBxOe3wo/hqdefault.jpg"></img>
      </div>
      <div class="carousel-item active">
        <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
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