

@include('category.header')
<body>
<!--Navbar link -->
@include('category.navbar')
<div class="container mt-3">
<h3>Login</h3>
<p>Try to submit the form.</p>

@if ($message = Session::get('success'))
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
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
    @if ($errors->has('password'))
    <span class="text-danger">{{ $errors->first('password') }}</span>
    @endif
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
    <label class="form-check-label" for="myCheck">I agree on blabla.</label>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Check this checkbox to continue.</div>
  </div>
    <a class="btn btn-primary" href="#">Login</a>
    <br>
    <br>
    <a href="{{ route('register.user') }}">New User Register Hier</a>
</form>
</div>


</body>
</html>