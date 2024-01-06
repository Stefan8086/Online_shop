@extends('category.navbar')
@section('content')
    <main>

        <section class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <!-- Image -->
                        <img src="{{ asset('assets/image/404.jpg')}}" class="h-200px h-md-400px mb-4"
                             alt="">
                        <!-- Subtitle -->
                        <h1>Page Not Found</h1>
                        <!-- info -->
                        <p class="mb-4">There is a Problem or This page no longer exists.</p>
                        <!-- Button -->
                        <a href="{{route('home')}}" class="btn btn-primary mb-0">Back to the Home page</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection
