import React from 'react'
import CardStyles from '../CardGroup/CardStyles.css'
import teste1 from '../../images/1.jpg'
import teste2 from '../../images/3.jpg'
//import teste3 from '../../images/3.jpg'


export const CardGroup = () => {
  return (  
      <div class="container-fluid  my-2">
          
    <div class="row  ">
  <div class="col-lg-3 color">
    <div class="card">
    <iframe title="" class="embed-responsive-item" src="https://my.matterport.com/show/?m=WMDJGMLtsa2&amp;brand=0" frameborder="0" target="_parent" allowfullscreen="" height="100%" width="100%"></iframe>
      <div class="card-body">
        <h5 class="card-title"> <a href='https://thedutchflathotel.com/' target="_blank">Dutch Flat Hotel</a></h5>
        <p class="card-text">Um dos hoteis mais antigos da California - EUA. Desde 1852</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 color">
    <div class="card">
    <iframe title="" class="embed-responsive-item" src="https://my.matterport.com/show/?m=v3NVjC7gaXE&amp;brand=0" frameborder="0" target="_parent" allowfullscreen="" height="100%" width="100%"></iframe>      <div class="card-body">
    <h5 class="card-title"> <a href='https://store.parksconservancy.org/collections/lands-end' target="_blank">Lands End National Park</a></h5>
        <p class="card-text">Located in San Francisco California - Confira este tour virtual</p>
      </div>
    </div>
  </div>

  
  
  <div class="col-lg-3 color">
    <div class="card ">
      <img src={ teste2 } class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Sua Imobiliária aqui</h5>
        <p class="card-text">Divulgue seu business neste espaço</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 color">
    <div class="card">
    <iframe title="" class="embed-responsive-item" src="https://my.matterport.com/show/?m=PBYp2didoVg" frameborder="0" target="_parent" allowfullscreen="" height="100%" width="100%"></iframe>
      <div class="card-body">
        <h5 class="card-title"> <a href='https://www.century21global.com/pt-br/comercial-para-alugar/USA/CA' target="_blank">Imóveis Comerciais</a></h5>
        <p class="card-text">Imóveis Comerciais</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
