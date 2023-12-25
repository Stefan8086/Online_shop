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
            <img src="{{ asset('assets/image/15.jpg')}}" class="img-fluid" alt="" >
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
                    <h2>{{ $product->name }}</h2>
                </div>

                <div class="label-section">

                    <span class="badge badge-grey-color">Best Training</span>
                    <span class="label-text">Training</span>
                </div>
                <h3 class="price-detail">
                    <p><strong>Price: </strong> {{ $product->price ?? '' }}€</p>
                </h3>
                <div class= "product-buttons">
                    <form method="POST" action="{{ route('cart.add', ['id' => $product->id]) }}">
                        @csrf
                    <p class="btn-holder">
                        <button id="addToCartBtn" data-product-id="{{ $product->id }}">
                        <i class="bi bi-cart3"></i>
                        <span>Add To Cart</span>
                        </button>
                       </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
    $(document).ready(function() {
        // Listen for the "Add to Cart" button click
        $('#addToCartBtn').on('click', function() {
            var productId = $(this).data('product-id');

            // Make an AJAX request to add the product to the cart
            $.ajax({
                type: 'POST',
                url: '{{ route("cart.add", ["id" => ":id"]) }}'.replace(':id', productId),
                data: {_token: '{{ csrf_token() }}'},
                success: function(response) {
                    // Update the cart count on the UI
                    updateCartCount(response.cartCount);
                },
                error: function(error) {
                    console.error('Error:', error);
                }
            });
        });

        // Function to update the cart count on the UI
        function updateCartCount(count) {
            $('#cart-count').text(count);
        }
    });
</script>
</section>

@endsection



