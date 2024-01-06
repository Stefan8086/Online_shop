

<html>
    @include('category.header')
    <body>
<header class="header-style-2" id="home">
    <div class="main-header navbar-searchbar">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-lg-12">
             <div class="main-menu">
                 <div class="menu-left">
                  <div class="brand-logo">
                <a href="{{ route('home') }}">
             <img src="{{ asset('assets/image/1.png') }}" class="h-logo img-fluid" alt="logo">
          </a>
       </div>
</div>
  <nav>
    <div class="main-navbar">
        <div id="mainnav">
            <div class="toggle-nav">
                <i class="fa fa-bars sidebar-bar"></i>
            </div>
            <ul class="nav-menu" style="right: -410px;">
                <li class="back-btn d-xl-none">
                    <div class="close-btn">
                        Menu
                        <span class="mobile-back">
                            <i class="fa fa-angle-left"></i>
                        </span>
                    </div>
                </li>
                <li><a href="{{ route('home') }}" class="nav-link menu-title">Home</a></li>
                <li><a href="{{ route('product') }}" class="nav-link menu-title">Product</a></li>
                <li><a href="cart/list.html" class="nav-link menu-title">Education</a></li>
                <li><a href="{{ route('service') }}" class="nav-link menu-title">Service</a></li>
                <li><a href="{{ route('contact') }}" class="nav-link menu-title">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="menu-right">
    <ul>
        <li>
            <div class="search-box theme-bg-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </li>
        <li class="onhover-dropdown wislist-dropdown">
            <div class="cart-media">
                <a href="{{ route('cart') }}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                      <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                         <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                             </path></svg>
                             <span id="cart-count" class="label label-theme rounded-pill">
                             @php
                             $totalQuantity = 0;

                             if(session('cart')) {
                                 foreach((array)session('cart') as $id => $details) {
                                     $quantity = isset($details['quantity']) ? $details['quantity'] : 0;
                                     $totalQuantity += $quantity;
                                 }
                             }
                         echo $totalQuantity
                         @endphp
                         </span>
                          </a>
                     </div>
                 </li>
            <li class="onhover-dropdown">
         <div class="cart-media name-usr">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
         </svg>
            </div>
         <div class="onhover-div profile-dropdown">
             <ul>
        @guest
        @if (Route::has('login'))
            <li>
                <a class="dropdown-item" href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
        @endif
        @if (Route::has('register'))
            <li>
                <a class="dropdown-item" href="{{ route('register') }}">{{ __('Register') }}</a>
            </li>
            @endif
            @else
            <li>
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->firstname }}
            </a>
            <a class="dropdown-item"href="{{ route('logout') }}"
            onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
            {{ __('Logout') }}</a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
                </form>
            </div>
            </li>
            @endguest
            </li>
         </ul>
    </div>
</li>
    </ul>
</div>
    <div class="search-full">
      <form method="Post" class="search-full" action="{{ route('search') }}">
        @csrf
        <div class="input-group">
            <span class="input-group-text">
                <i class="bi bi-search"></i>
                 </span>
                    <input type="text" name="q" class="form-control search-type"
                       placeholder="Search here..">
                         <span class="input-group-text close-search">
                            <i class="bi bi-x" aria-hidden="true"></i>
                            </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="mobile-menu d-sm-none">
    <ul>
        <li>
            <a href="" class="active">
                <i data-feather="home"></i>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <i data-feather="align-justify"></i>
                <span>Product</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <i data-feather="shopping-bag"></i>
                <span>Education</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <i data-feather="heart"></i>
                <span>Service</span></span>
            </a>
        </li>
        <li>
            <a href="user-dashboard.php">
                <i data-feather="user"></i>
                <span>Contact Us</span>
            </a>
        </li>
    </ul>
</div>
@yield('content')

</body>
</html>

