@include('category.header')
<body>
<!--Navbar link -->
@include('category.navbar')
<div class="container mt-3">
<h3>Login</h3>
<p>Try to submit the form.</p>

@if ($message = Session::get('success'))
<div class="alert alert-success text-center">
    {{ $message }}
</div>     
@endif
  
@if ($message = Session::get('error'))
<div class="alert alert-danger text-center">
    {{ $message }}
</div>     
@endif

<form action="{{ route('login.user') }}" method="POST" class="was-validated">
  @csrf

  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
    @if ($errors->has('email'))
    <span class="text-danger">{{ $errors->first('email') }}</span>
    @endif
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
    @if ($errors->has('password'))
    <span class="text-danger">{{ $errors->first('password') }}</span>
    @endif
    <br>
    <br>
    <div class="row align-center">
      <div class="col">
        <div class="d-grid ">
    <button class="btn btn-primary" >Login</button>
  </div>
</div>
</div>
<br>
  <div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
    <label class="form-check-label" for="myCheck">Remember Me</label>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback"></div>
    <br>
  <a href="{{ route('register.user') }}">New User Register Hier</a>
</form>
</div>


</body>
</html>