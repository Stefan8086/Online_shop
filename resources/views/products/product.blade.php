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
            <a href="{{ isset($product) ? route('products.details', ['id' => $product->id]) : route('products.details', ['id' => 1]) }}">
        <img src="{{ asset('assets/image/2.jpg') }}" class="card-img-top" alt="..." style="width:100%">
            </a>
        <br>
        <br>
        <h3 class="card-title">{{ isset($product) ? $product->name : 'PHP' }}</h3>
        <p class="display-6 my-4 text-primary fw-bold">€{{ isset($product) ? $product->price : '2400' }}</p>
        <p class="card-text mx-5 text-muted d-none d-lg-block">{{ isset($product) ? $product->description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' }}</p>
          <a href="{{ route('products.details',["id" => 1]) }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4">
      <div class="card border-primary border-2" style="width:400px">
        <div class="card-body tex-center py-4">
            <a href="{{ isset($product) ? route('products.details', ['id' => $product->id]) : route('products.details', ['id' => 2]) }}">
        <img src="{{ asset('assets/image/3.jpg') }}" class="card-img-top" alt="...">
            </a>
            <br>
            <br>
          <h3 class="card-title">{{ isset($product) ? $product->name : 'HTML,CSS,JS' }}</h3>
          <p class="display-6 my-4 text-primary fw-bold">€{{ isset($product) ? $product->price : '1200' }}</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block">{{ isset($product) ? $product->description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' }}</p>
          <a href="{{ route('products.details',["id" => 2]) }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
    <div class="col-8 col-lg-4 ">
      <div class="card border-primary border-2" style="width:400px">
        <div class="card-body tex-center py-4">
             <a href="{{ isset($product) ? route('products.details', ['id' => $product->id]) :  route('products.details', ['id' => 3]) }}">
        <img src="{{ asset('assets/image/4.jpg') }}" class="card-img-top" alt="...">
            </a>
            <br>
            <br>
          <h3 class="card-title">{{ isset($product) ? $product->name : 'LARAVEL' }}</h3>
          <p class="display-6 my-4 text-primary fw-bold">€{{ isset($product) ? $product->price : '2800' }}</p>
          <p class="card-text mx-5 text-muted d-none d-lg-block">{{ isset($product) ? $product->description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' }}</p>
          <a href="{{ route('products.details',["id" => 3]) }}" class="btn btn-primary">Bay now</a>
        </div>
      </div>
    </div>
      <!-- row end -->
    </div>
     <!-- container end -->
  </section>
@endsection
