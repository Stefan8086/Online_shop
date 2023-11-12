<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <!-- CSRF Token -->
     <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
          <link rel="stylesheet" href="{{ asset('assets/style/service.css') }}">
          <link rel="stylesheet" href="{{ asset('assets/style/bootstrap.css') }}">
          <link rel="stylesheet" href="{{ asset('assets/style/register.css') }}">
          <link rel="dns-prefetch" href="//fonts.bunny.net">
          <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
               <title>Online_shop - @yield('title')</title>
               <!-- Scripts -->
 @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
