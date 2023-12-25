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
            @php $total += $details['price'] * $details['quantity'] @endphp
    <tr data-id="{{ $id }}">
        <td data-th="Product">
            <a href="{{ $details['image'] }}">
                <img src="{{ $details['image'] }}" class="blur-up lazyloaded"
                    alt="">
        </td>
        <td>
            <a href="{{ $details['name'] }}">Lorem ipsum dolor sit amet</a>
            <dir class="mobile-cart-content row">
                <div class="col">
                    <div class="qty-box">
                        <div class="input-group">
                            <input type="text" name="quantity" class="form-control input-number"
                                value="1">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h2>€{{ $details['price'] }}</h2>
                </div>
               </div>
            </div>
        </td>
        <td>
            <h2>€{{ $details['price'] }}</h2>
        </td>
        <td>
            <div class="qty-box">
                <div class="input-group">
                <form action="{{ route('cart.update') }}" method="POST">
                @csrf
                <input type="hidden" name="id" value="{{ optional($details)['id'] }}" >
                <input type="number" name="quantity" value="{{ $cartItem['quantity'] }}">
                        <button class="px-4 mt-1 py-1.5 text-sm rounded rounded shadow text-violet-100 bg-violet-500">Update</button>
                    </form>
                </div>
            </div>
        </td>
        <td>
            <h2 class="td-color">€{{ $total }}</h2>
        </td>
            <td class="hidden text-right md:table-cell" >
            <form action="{{ route('cart.remove') }}" method="POST">
                @csrf
                <input type="hidden" value="{{ optional($details)['id'] }}" name="id">
                <i class="bi bi-x"></i>
        </form>
        </td>
    </tr>
</tbody>
</table>
</div>
<div class="col-12 mt-md-5 mt-4">
    <div class="row">
        <div class="col-sm-7 col-5 order-1">
            <div class="left-side-button text-end d-flex d-block justify-content-end">
                <form action="{{ route('cart.clear') }}" method="POST">
                    @csrf
                <a href="javascript:void(0)"
                    class="text-decoration-underline theme-color d-block text-capitalize">clear
                    all items</a>
                </form>
            </div>
        </div>
        <div class="col-sm-5 col-7">
            <div class="left-side-button float-start">
                <a href="{{ route('product') }}" class="btn btn-solid-default btn fw-bold mb-0 ms-0">
                    <i class="bi bi-arrow-left"></i> Continue Product</a>
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
                <a href="checkout" class="btn btn-solid-default btn fw-bold">
                    Check Out <i class="bi bi-arrow-right"></i></a>
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
                            <a href="checkout">Process Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endforeach
@endif

</div>
</section>
@endsection


@push('script')
<script type="text/javascript">

    $(".cart.update").change(function (e) {
        e.preventDefault();

        var ele = $(this);

        $.ajax({
            url: '{{ route('cart.update') }}',
            method: "patch",
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

</script>
@endpush

