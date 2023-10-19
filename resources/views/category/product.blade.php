<!DOCTYPE html>
<html lang="en">
  @include('category.header')
<body>
  
@include('category.navbar')
<!-- Product plans -->
<section id="product" class="bg-light mt-5">
    <div class="container-lg">
      <div class="text-center">
        <h2>Product Plans</h2>
        <p class="lead text-muted">Choose a Pricing Plan to Suit You.</p>
      </div>
   <div class="row my-5 align-items-center justify-content-center g-0">
    <div class="col-8 col-lg-4">
      <div class="card border-primary border-2">
        <div class="card-body tex-center py-4">
        <img src="{{ asset('assets/image/2.jpg') }}" class="card-img-top" alt="...">
          <h5 class="card-title">PHP</h5>
          <p class="display-5 my-4 text-primary fw-bold">€ 2400</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4">
      <div class="card border-primary border-2">
        <div class="card-body tex-center py-4">
        <img src="{{ asset('assets/image/4.jpg') }}" class="card-img-top" alt="...">
          <h5 class="card-title">HTML,CSS,JS</h5>
          <p class="display-5 my-4 text-primary fw-bold">€ 1200</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4 ">
      <div class="card border-primary border-2">
        <div class="card-body tex-center py-4">
        <img src="{{ asset('assets/image/3.jpg') }}" class="card-img-top" alt="...">
          <h5 class="card-title">Laravel</h5>
          <p class="display-5 my-4 text-primary fw-bold">€ 2800</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>

      <!-- row end -->
    </div>
     <!-- container end -->
  </section>
</body>
</html>