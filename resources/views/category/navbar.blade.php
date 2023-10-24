<!DOCTYPE html>
<html lang="en">

<body>   
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #f9f2e4;">
    <div class="container tex-center">

        <!--navbar Logo -->
        <a class="navbar-brand" href="{{ route('home') }}">
            <img src="{{ asset('assets/image/1.png')}}" alt="Logo" width="90" height="40"
                 class="d-inline-block align-text-top">
        </a>

        <!--navbar mobile -->

        <button class="navbar-toggler" type="button" data - bs - toggle="collapse" data - bs - target="#navbarNav"
                aria - controls="navbarNav" aria - expanded="false" aria - label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!--Navbar link -->
        <div class="collapse navbar-collapse justify-content-end  align-center" id="navbarNav">

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

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">Login</a>
                </li>
             
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('logout') }}">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</body>
</html>