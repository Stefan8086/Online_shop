@extends('category.navbar')


<!--Navbar link -->
@section('content')
@include('category.header')
<section class="breadcrumb-section section-b-space" style="padding-top:20px;padding-bottom:20px;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>Details</h3>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('home') }}">
                                <i class="bi bi-house-door"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Details</li>
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
                <img src="{{ $product->image }}"class="img-fluid" alt="{{ $product->name }}" class="img-fluid">
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
                        <h2>Different Html,Css,Javascript training</h2>
                    </div>

                    <div class="label-section">

                        <p><strong>Description:</strong> {{ $product->description }}</p>

                    </div>
                    <h3 class="price-detail">
                        <p><strong>Price: </strong> {{ $product->price }}€</p>
                    </h3>
                    <div class= "product-buttons">
                            <p class="btn-holder">
                            <a  href="{{ route('cart.add', $product->id) }}" class="btn btn-warning btn-block text-center">
                            <i class="bi bi-cart3"></i>
                            <span>Add To Cart</span>
                            </a>
                        </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
    @endsection
    function addToCart(productId) {
       // document.getElementById('addtocart').submit();
            var form = document.createElement('form');
            form.method = 'POST';
            form.action = '{{ route("cart.add", ["id" => ":id"]) }}'.replace(':id', productId);
            form.style.display = 'none';

            var csrfToken = document.createElement('input');
            csrfToken.type = 'hidden';
            csrfToken.name = '_token';
            csrfToken.value = '{{ csrf_token() }}';

            var productIdInput = document.createElement('input');
            productIdInput.type = 'hidden';
            productIdInput.name = 'id';
            productIdInput.value = productId;

            var quantityInput = document.createElement('input');
            quantityInput.type = 'hidden';
            quantityInput.name = 'quantity';
            quantityInput.value =  productId;

            form.appendChild(csrfToken);
            form.appendChild(productIdInput);
            form.appendChild(quantityInput);

            document.body.appendChild(form);
            form.submit();
    }
</script>
</section>

@endsection
