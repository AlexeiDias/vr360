import React from 'react'
import CardStyles from '../CardGroup2/CardGroup2.css'
import teste1 from '../../images/1.jpg'
import teste2 from '../../images/3.jpg'
//import teste3 from '../../images/3.jpg'


export const CardGroup2 = () => {
  return (  
      <div class="container-fluid  my-2">
          
    <div class="row  ">
    <div class="col-lg-3 color">
    <div class="card">
    <iframe title="" class="embed-responsive-item" src="https://my.matterport.com/show/?m=1eZ63ihud36" frameborder="0" target="_parent" allowfullscreen="" height="100%" width="100%"></iframe>
      <div class="card-body">
        <h5 class="card-title"> <a href='https://thedutchflathotel.com/' target="_blank">Foto Book Virtual</a></h5>
        <p class="card-text">Memórias virtuais</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 color">
    <div class="card">
    <iframe
    src="https://my.matterport.com/show/?m=MwSJpTXtdSg"
    title="YouTube video"
    allowfullscreen
  ></iframe>
      <div class="card-body">
      <h5 class="card-title"> <a href='https://www.compass.com/homes-for-sale/san-francisco-ca/' target="_blank">Compass real state</a></h5>
        <p class="card-text">Venha conferir nossos imóveis virtualmente - San francisco - Califórnia - EUA</p>
      </div>
    </div>
  </div>

  
  
  <div class="col-lg-3 color">
    <div class="card ">
      <img src={ teste2 } class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 color">
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
