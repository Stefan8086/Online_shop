@extends('category.navbar')
@section('content')
@include('category.header')
<section class="breadcrumb-section section-b-space" style="padding-top:20px;padding-bottom:20px;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>Cart</h3>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('home') }}">
                                <i class="bi bi-house-door"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</section>
<!-- Cart Section Start -->
<section class="cart-section section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <table class="table cart-table">
                <thead>
              <tr class="table-head">
        <th scope="col">image</th>
        <th scope="col">product name</th>
        <th scope="col">price</th>
        <th scope="col">quantity</th>
        <th scope="col">total</th>
        <th scope="col">action</th>
    </tr>
</thead>
<tbody>
    @php $total = 0 @endphp
    @if(session('cart'))
        @foreach(session('cart') as $id => $details)
        @php
        // Check if 'image', 'price', and 'quantity' keys are set in $details array
        $image = isset($details['image']) ? $details['image'] : 'default-image.jpg'; // Provide a default image path
        $price = isset($details['price']) ? $details['price'] : 0;
        $quantity = isset($details['quantity']) ? $details['quantity'] : 0;
        $subtotal = $price * $quantity;
        $total += $subtotal;
    @endphp
    <tr data-id="{{ $id }}">
        <td data-th="Product">
            <a href="{{ $image }}">
                <img src="{{ $image}}" class="blur-up lazyloaded" alt="">
            </a>
        </td>
        <td>
            <a href="{{ route('product.details', ['id' => $id]) }}">{{ $details['name'] }}</a>
            <div class="mobile-cart-content row">
                <div class="col">
                    <div class="qty-box">
                        <div class="input-group">
                            <input type="text" name="quantity" class="form-control input-number"
                                value="{{ $quantity }}">
                        </div>
                    </div>
                </div>
               </div>
            </td>
        <td>
            <h2>€{{ $price }}</h2>
        </td>
         <!-- Your cart items -->
        <td>
            <div class="qty-box">


                <div class="input-group">
                    <input type="number" name="quantity" id="cart-update" data-rowid="{{ $id }}"
                       class="form-control quantity cart-update " value="{{ $quantity}}">
                 </div>
             </div>
        </td>
        <td>
            <h2 class="td-color">€{{ $subtotal }}</h2>
        </td>
            <td class="hidden text-right md:table-cell" >
              <form action="{{ route('cart.remove') }}" method="POST">
                @csrf
                @method('DELETE')
                <input type="hidden" value="{{ $id }}" name="id">
                <button type="submit" class="btn btn-link"><i class="bi bi-x-lg"></i></button>
            </form>
         </td>
      </tr>
   </tbody>
   @endforeach
</table>
  </div>
    <div class="col-12 mt-md-5 mt-4">
      <div class="row">
        <div class="col-sm-7 col-5 order-1">
            <div class="left-side-button text-end d-flex d-block justify-content-end">
                <form action="{{ route('cart.clear') }}" method="DELETE">
                    @csrf
                    <button type="submit" class="text-decoration-underline theme-color d-block text-capitalize btn btn-link">Clear All Items</button>
                </form>
            </div>
        </div>
        <div class="col-sm-5 col-7">
            <div class="left-side-button float-start">
                <a href="{{ route('product') }}" class="btn btn-solid-default btn fw-bold mb-0 ms-0">
                    <i class="bi bi-arrow-left"></i> Check Out</a>
            </div>
        </div>
    </div>
</div>

<div class="cart-checkout-section">
    <div class="row g-4">
        <div class="col-lg-4 col-sm-6">
            <div class="promo-section">

            </div>
        </div>
        <div class="col-lg-4 col-sm-6 ">
            <div class="checkout-button">
            </div>
        </div>
        <div class="col-lg-4">
            <div class="cart-box">
                <div class="cart-box-details">
                    <div class="total-details">
                        <div class="top-details">
                            <h3>Cart Totals</h3>
                            <h6>Total <span>€{{ $total }}</span></h6>
                        </div>
                        <div class="bottom-details">
                            <a class="btn btn-checkout" href="{{ url('checkout') }}" wire:click.prevent="checkout">Process Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endif

</div>
</section>




@push('scripts')
<script type="text/javascript">
 $(document).ready(function(e) {

    $("input[id=cart-update]").on('change input',function () {
        //e.preventDefault();

        var ele = $(this);

        $.ajax({
            url: '{{ route('cart.update') }}',
            method: "put",
            data: {
                _token: '{{ csrf_token() }}',
                id: ele.parents("tr").attr("data-id"),
                quantity: ele.parents("tr").find(".quantity").val()
            },
            success: function (response) {
               window.location.reload();
            }
        });
    });

    $(".cart.remove").click(function (e) {
        e.preventDefault();

        var ele = $(this);

        if(confirm("Are you sure want to remove?")) {
            $.ajax({
                url: '{{ route('cart.remove') }}',
                method: "DELETE",
                data: {
                    _token: '{{ csrf_token() }}',
                    id: ele.parents("tr").attr("data-id")
                },
                success: function (response) {
                    window.location.reload();
                }
            });
        }
    });
 });
</script>
@endpush
@endsection
