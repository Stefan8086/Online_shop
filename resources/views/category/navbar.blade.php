<!DOCTYPE html>
<html lang="en">

<body>   
    <nav class="navbar navbar-expand-sm ">
        <div class="container-fluid">
          <!--navbar Logo -->
        <a class="navbar-brand" href="{{ route('home') }}"></a>
        <img src="{{ asset('assets/image/1.png')}}" alt="Logo" width="90" height="40"
                 class="d-inline-block align-text-top">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

         
        

        <!--navbar mobile -->

        <button class="navbar-toggler" type="button" data - bs - toggle="collapse" data - bs - target="#navbarNav"
                aria - controls="navbarNav" aria - expanded="false" aria - label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!--Navbar link -->

        <div class="collapse navbar-collapse justify-content-ms-7" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="{{ route('home') }}">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{ route('product') }}">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Education</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="{{ route('service') }}">Service</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="{{ route('contact') }}">Contact Us</a>
              </li> 
            </ul>  
          </div>
              <!-- Authentication Links -->
              <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Search">
                    <button class="btn btn-primary" type="button">Search</button>
                  </form>
                <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Login</a>
                <ul class="dropdown-menu">
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
              </li>
            </ul>
          </div>
      </nav>
      <main class="py-4">
        @yield('content')
    </main>
</body>
</html>

