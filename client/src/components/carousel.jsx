import React from 'react';

export default function Carousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.discordapp.com/attachments/491831801141133314/796946658410627103/1248.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://media.discordapp.net/attachments/491831801141133314/796947179008557056/Diseno_sin_titulo_17.jpg?width=840&height=473" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://cdn.discordapp.com/attachments/491831801141133314/796947182162542612/Diseno_sin_titulo_18.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    )
}