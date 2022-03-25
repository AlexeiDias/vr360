import React from 'react'
import CardStyles from '../CardGroup/CardStyles.css'
import teste1 from '../../images/1.jpg'
import teste2 from '../../images/3.jpg'
import teste3 from '../../images/3.jpg'


export const CardGroup = () => {
  return (
      <div class="container my-3">
          <h3 class="text-center ">Em destaque</h3>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col color">
    <div class="card">
      <img src={ teste1 } class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col color">
    <div class="card ">
      <img src={ teste2 } class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
