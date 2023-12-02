@extends('category.navbar')


<!--Navbar link -->
@section('content')
@include('category.header')
<section class="breadcrumb-section section-b-space" style="padding-top:20px;padding-bottom:20px;">
<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-1">
            <h3></h3>
            <nav  aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        <a href="{{ route('home') }}">
                            <i class="bi bi-house-door-fill"></i>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</section>
<!-- Shop Section start -->
<section>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-1">
            <img src="{{ asset('assets/image/15.jpg')}}/{{ $product->image ?? '' }}" class="img-fluid" alt="" >
        </div>

        <div class="col-md-6 col-sm-1">
            <div class="cloth-details-size">
                <div class="product-card-titel">

                </div>
                <div class="label-section">
                    <span class="badge badge-grey-color">Best seller</span>
                    <span class="label-text">Best Education</span>
                </div>
            </div>

    </div>
</div>
</section>

@endsection






</body>
</html>
