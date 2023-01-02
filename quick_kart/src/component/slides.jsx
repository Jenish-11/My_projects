export default function Slide(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/8b853dc3ee0c54b0.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/8b853dc3ee0c54b0.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/8b853dc3ee0c54b0.jpg?q=50" class="d-block w-100" alt="..."/>
   </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        </>
    )
}