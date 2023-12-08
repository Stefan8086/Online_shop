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
<div class="bg-overlay"></div>
<script src="{{ asset('assets/script/header.js') }}"></script>
<script src="{{ asset('assets/script/bootsrap.js') }}"></script>
<script>

</body>
</html>
