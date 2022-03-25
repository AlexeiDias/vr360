import React from 'react'

import teste1 from '../../images/1.jpg'
import teste2 from '../../images/3.jpg'
import teste3 from '../../images/3.jpg'





export default function Display() {
  return (
	  <div class="container ">
	<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ teste1 } class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ teste2 } class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ teste3 } class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
</div>
  )
}
