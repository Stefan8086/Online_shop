@extends('category.navbar')


  @section('content')
  @include('category.header')
<!-- Product plans -->
<section id="product" class="bg-light mt-5">
    <div class="container-lg mt-3">
      <div class="text-center">
        <h2>Product Plans</h2>
        <p class="lead text-muted">Choose a Pricing Plan to Suit You.</p>
      </div>
   <div class="row my-5 align-items-center justify-content-center g-0">
    <div class="col-8 col-lg-4">
      <div class="card border-primary border-2" style="width:400px">
        <div class="card-body tex-center py-4 ">
            <a href="{{ route('product.details') }}">
        <img src="{{ asset('assets/image/20.jpg') }}" class="card-img-top" alt="..." style="width:100%">
            </a>
        <br>
        <br>
          <h3 class="card-title">PHP</h3>
          <p class="display-6 my-4 text-primary fw-bold">€ 2400</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="{{ route('product.details') }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4">
      <div class="card border-primary border-2" style="width:400px">
        <div class="card-body tex-center py-4">
            <a href="{{ route('product.details') }}">
        <img src="{{ asset('assets/image/21.jpg') }}" class="card-img-top" alt="...">
            </a>
            <br>
            <br>
          <h3 class="card-title">HTML,CSS,JS</h3>
          <p class="display-6 my-4 text-primary fw-bold">€ 1200</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="{{ route('product.details') }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4 ">
      <div class="card border-primary border-2" style="width:400px">
        <div class="card-body tex-center py-4">
            <a href="{{ route('product.details') }}">
        <img src="{{ asset('assets/image/22.jpg') }}" class="card-img-top" alt="...">
            </a>
            <br>
            <br>
          <h3 class="card-title">Laravel</h3>
          <p class="display-6 my-4 text-primary fw-bold">€ 2800</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="{{ route('product.details') }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>

      <!-- row end -->
    </div>
     <!-- container end -->
  </section>
@endsection
