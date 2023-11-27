@extends('category.navbar')

@push('style')
<link id="color-link" rel="stylesheet" type="text/css" href="{{ asset('assets/style/demo.css') }}">
@endpush
@section('content')
<section class="breadcrumb-section section-b-space" style="padding-top:20px;padding-bottom:20px;">
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>{{ $product->name }}</h3>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('home') }}">
                                <i class="fas fa-home"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{{ $product->name }}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</section>
<!-- Shop Section start -->
<section>
    <div class="container">
        <div class="row gx-4 gy-5">
            <div class="col-lg-12 col-12">
                <div class="details-items">
                    <div class="row g-4">
                <div class="col-md-6">
             <div class="row">
        <div class="col-lg-2">
     </div>
</div>
<div class="col-lg-10">
    <div class="details-image-1 ratio_asos">
        <div>
            <img src="{{ asset('assets/image/15.jpg')}}/{{ $product->image }}" id="zoom_01"
                class="img-fluid w-100 image_zoom_cls-0 blur-up lazyload" alt="">
        </div>
        @if ($product->images)
        @php
            $images = explode(',',$product->images);
        @endphp
        @foreach ($images as $image)
        <div>
            <img src="{{ asset('assets/images/15.jpg')}}/{{ $image }}"
            class="img-fluid blur-up lazyload" alt="">
        </div>
        @endforeach
        @endif
       </div>
     </div>
   </div>
</div>

<div class="col-md-6">
<div class="cloth-details-size">
<div class="product-count">
    <ul>
        <li>
            <img src="{{ asset('assets/image/fire.gif')}}"
                class="img-fluid blur-up lazyload" alt="image">
            <span class="p-counter">37</span>
            <span class="lang">orders in last 24 hours</span>
        </li>
        <li>
            <img src="{{ asset('assets/image/person.gif')}}"
                class="img-fluid user_img blur-up lazyload" alt="image">
            <span class="p-counter">44</span>
            <span class="lang">active view this</span>
        </li>
    </ul>
</div>

<div class="details-image-concept">
    <h2></h2>
</div>

<div class="label-section">
    <span class="badge badge-grey-color">Best seller</span>
    <span class="label-text">Best Education</span>
</div>

<div class="price-detail">
    @if ($product->sale_price)
    €{{ $pruduct->sale_price }}
    <del>€{{ $product->regular_price }}</del><span>
        {{ round(($product->regular_price - $pruduct->sale_price)/$product->regular_price)*100}}
        % off</span>
    @else
    {{ $product->regular_price }}
    @endif
<div class="product-buttons">
    <a href="javascript:void(0)"
        id="cartEffect" class="btn btn-solid hover-solid btn-animation">
        <i class="fa fa-shopping-cart"></i>
        <a href="{{ route('order') }}"></a>
        <span>Add To Order</span>
        <form id="addtocart" method="post"
            action="http://localhost:8000/cart/store">
            <input type="hidden" name="_token"
                value="MkRqEzTGuoSx6LqJUm0OAKxSgNUYt26wTT7RMUZY">
                type="hidden" name="id" value="1">
            <input type="hidden" name="name"
                value="Autem Repudiandae Accusantium Blanditiis">
            <input type="hidden" name="price" value="13">
            <input type="hidden" name="quantity" id="qty" value="1">
        </form>
    </a>
</div>
<div class="border-product">
    <h6 class="product-title d-block">share it</h6>
    <div class="product-icon">
        <ul class="product-social">
            <li>
                <a href="https://www.facebook.com/">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="https://www.google.com/">
                    <i class="fab fa-google-plus-g"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
            <li class="pe-0">
                <a href="https://www.google.com/">
                    <i class="fas fa-rss"></i>
                </a>
                   </li>
                      </ul>
                           </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="cloth-review">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#desc" type="button">Description</button>

                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                data-bs-target="#review" type="button">Review</button>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="desc">
                            <div class="shipping-chart">
                             {{ $product->descriptions }}
                            </div>
                        </div>
                        <div class="tab-pane fade" id="question">
                            <div class="question-answer">
                                <ul>
                                    <li>
                        <div class="tab-pane fade" id="review">
<div class="row g-4">
  <div class="col-lg-4">
    <div class="customer-rating">
        <h2>Customer reviews</h2>
        <ul class="rating my-2 d-inline-block">
            <li>
                <i class="fas fa-star theme-color"></i>
            </li>
            <li>
                <i class="fas fa-star theme-color"></i>
            </li>
            <li>
                <i class="fas fa-star theme-color"></i>
            </li>
            <li>
                <i class="fas fa-star"></i>
            </li>
            <li>
                <i class="fas fa-star"></i>
            </li>
        </ul>

        <div class="global-rating">
            <h5 class="font-light">82 Ratings</h5>
        </div>

        <ul class="rating-progess">
            <li>
                <h5 class="me-3">5 Star</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 78%"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <h5 class="ms-3">78%</h5>
            </li>
        <li>
        <h5 class="me-3">4 Star</h5>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 62%"
                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <h5 class="ms-3">62%</h5>
            </li>
            <li>
                <h5 class="me-3">3 Star</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 44%"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <h5 class="ms-3">44%</h5>
            </li>
            <li>
                <h5 class="me-3">2 Star</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 30%"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <h5 class="ms-3">30%</h5>
            </li>
            <li>
                <h5 class="me-3">1 Star</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 18%"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <h5 class="ms-3">18%</h5>
            </li>
        </ul>
    </div>
</div>

<div class="col-lg-8">
    <p class="d-inline-block me-2">Rating</p>
    <ul class="rating mb-3 d-inline-block">
        <li>
            <i class="fas fa-star theme-color"></i>
        </li>
        <li>
            <i class="fas fa-star theme-color"></i>
        </li>
        <li>
            <i class="fas fa-star theme-color"></i>
        </li>
        <li>
            <i class="fas fa-star"></i>
        </li>
        <li>
            <i class="fas fa-star"></i>
        </li>
    </ul>
    <div class="review-box">
        <form class="row g-4">
            <div class="col-12 col-md-6">
                <label class="mb-1" for="name">Name</label>
                <input type="text" class="form-control" id="name"
                    placeholder="Enter your name" required="">
            </div>

            <div class="col-12 col-md-6">
                <label class="mb-1" for="id">Email Address</label>
                <input type="email" class="form-control" id="id"
                    placeholder="Email Address" required="">
            </div>

            <div class="col-12">
                <label class="mb-1" for="comments">Comments</label>
                <textarea class="form-control" placeholder="Leave a comment here"
                    id="comments" style="height: 100px" required=""></textarea>
            </div>

            <div class="col-12">
                <button type="submit"
                    class="btn default-light-theme default-theme default-theme-2">Submit</button>
            </div>
        </form>
    </div>
</div>

<div class="col-12 mt-4">
    <div class="customer-review-box">
        <h4>{{ $product->name }}</h4>

        <div class="customer-section">
            <div class="customer-profile">
                <img src="{{ asset('assets/image/17.jpg') }}"
                    class="img-fluid blur-up lazyload" alt="">
            </div>

            <div class="customer-details">
                <h5>Mike K</h5>
                <ul class="rating my-2 d-inline-block">
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                </ul>
                <p class="font-light">I purchased my Tab S2 at Best Buy but I wanted
                    to
                    share my thoughts on Amazon. I'm not going to go over specs and
                    such
                    since you can read those in a hundred other places. Though I
                    will
                    say that the "new" version is preloaded with Marshmallow and now
                    uses a Qualcomm octacore processor in place of the Exynos that
                    shipped with the first gen.</p>

                <p class="date-custo font-light">- Sep 08, 2021</p>
            </div>
        </div>

        <div class="customer-section">
            <div class="customer-profile">
                <img src="{{ asset('assets/image/18.jpg') }}"
                    class="img-fluid blur-up lazyload" alt="">
            </div>

            <div class="customer-details">
                <h5>Norwalker</h5>
                <ul class="rating my-2 d-inline-block">
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                </ul>
                <p class="font-light">Pros: Nice large(9.7") screen. Bright colors.
                    Easy
                    to setup and get started. Arrived on time. Cons: a bit slow on
                    response, but expected as tablet is 2 generations old. But works
                    fine and good value for the money.</p>

                <p class="date-custo font-light">- Sep 08, 2021</p>
            </div>
        </div>

        <div class="customer-section">
            <div class="customer-profile">
                <img src="{{ asset('assets/image/19.jpg') }}"
                    class="img-fluid blur-up lazyload" alt="">
            </div>

            <div class="customer-details">
                <h5>B. Perdue</h5>
                <ul class="rating my-2 d-inline-block">
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                </ul>
                <p class="font-light">Love the processor speed and the sensitivity
                    of
                    the touch screen.</p>

                <p class="date-custo font-light">- Sep 08, 2021</p>
            </div>
        </div>

        <div class="customer-section">
            <div class="customer-profile">
                <img src="{{ asset('assets/image/16.jpg') }}"
                    class="img-fluid blur-up lazyload" alt="">
            </div>

            <div class="customer-details">
                <h5>MSL</h5>
                <ul class="rating my-2 d-inline-block">
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star theme-color"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                </ul>
                <p class="font-light">I purchased the Tablet May 2017 and now April
                    2019
                    I have to charge it everyday. I don't watch movies on it..just
                    play
                    a game or two while on lunch. I guess now I need to power it
                    down
                    for future use.</p>

                <p class="date-custo font-light">- Sep 08, 2021</p>
            </div>
        </div>
    </div>
</div>
    </div>
        </div>
             </div>
                </div>
                   </div>
               </div>
             </div>
   </section>
<!-- Shop Section end -->
@endsection
