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
                <div class="product-count">
                    <ul>
                        <li>
                            <img src="{{ asset('assets/image/fire.gif') }}"
                                class="img-fluid lazyload" alt="image">
                            <span class="p-counter">37</span>
                            <span class="lang">orders in last 24 hours</span>
                        </li>
                        <li>
                            <img src="{{ asset('assets/image/person.gif') }}"
                                class="img-fluid user_img lazyload" alt="image">
                            <span class="p-counter">44</span>
                            <span class="lang">active view this</span>
                        </li>
                    </ul>
                </div>

                <div class="details-image-concept">
                    <h2>Different PHP training</h2>
                </div>

                <div class="label-section">
                    <span class="badge badge-grey-color">Best Training</span>
                    <span class="label-text">Training</span>
                </div>

                <h3 class="price-detail">
                   @if ($product->sale_price ?? '')
                   €{{ $product->sale_price ?? ''}}
                   <del>€{{ $product->regular_price ?? ''}}</del><span>
                    {{ round((($product->regular_price - $product->sale_price)/$product->regular_price)*100) }}
                    % off</span>
                    @else
                    {{ $product->regular_price ?? ''}}
                    @endif
                </h3>
                <div class="product-buttons">
                    <a href="javascript:void(0)" onclick="event.preventDefault();document.getElementById('addtocart').submit();"
                        id="cartEffect" class="btn btn-solid hover-solid btn-animation">
                        <i class="bi bi-cart3"></i>
                        <span>Add To Cart</span>
                        <form id="addtocart" method="POST" action="{{ route('add.to.cart') }}">
                            @csrf
                            <input type="hidden" name="id" value="{{ $product->id ?? ''}}">
                            <input type="hidden" name="quantity" id="qty" value="1">
                        </form>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

@endsection



