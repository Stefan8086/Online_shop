<!DOCTYPE html>
<html lang="en">
@include('category.header')
<body>
<!--Navbar link -->
@include('category.navbar')
<!--Carousel -->
@include('category.slide')
<!--Study -->
@include('products.product')
<!--education -->
@include('category.education')
<!-- service -->
@include('category.service')
<!-- contact -->
@include('category.contact')
<!-- footer -->
@include('category.footer')




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/"
crossorigin="anonymous"></script>
<div class="bg-overlay"></div>
<script src="{{ asset('assets/script/header.js') }}"></script>
<script src="{{ asset('assets/script/bootsrap.js') }}"></script>
<script src="{{ asset('assets/script/cart.js') }}"></script>
<script src="{{ asset('assets/script/ryp_member.js') }}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</body>
</html>
