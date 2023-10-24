<!DOCTYPE html>
<html lang="en">
@include('category.header')
<body>
  @include('category.navbar')
    <section >
       
          <div class="text-center">
            <h2>
              Register
            </h2>
          </div>
       <div style="display:flex;
        justify-content: center;">
          <form action="{{ route('register-user') }}" method="POST" class="form">
            @if (Session::has('success'))
            <div class="alert alert-success">{{ Session::get('success') }}</div>
            @endif
            @if (Session::has('fild'))
            <div class="alert alert-danger">{{ Session::get('fail') }}</div>
            @endif
            @csrf
                  <div class="flex">
                    <label>
                        <input class="input" type="text" placeholder="Enter First Name" name="firstname" value="{{ old('firstname') }}">
                         <span>Firstname</span>
                        <span class="text-danger">@error('firstname') {{ $message }}  @enderror</span>
                    </label>
            
                    <label>
                        <input class="input" type="text" placeholder="Enter Last Name" name="lastname" value="{{ old('lastname') }}">
                         <span>Lastname</span>
                        <span class="text-danger">@error('lastname') {{ $message }}  @enderror</span>
                    </label>
                </div>  
                        
                <label>
                    <input class="input" type="email" placeholder="Enter Email" name="email" value="{{ old('email') }}">
                     <span>Email</span>
                    <span class="text-danger">@error('email') {{ $message }}  @enderror</span>
                </label> 
                    
                <label>
                    <input class="input" type="password" placeholder="Enter Password" name="password" value="{{ old('password') }}">
                    <span>Password</span>
                    <span class="text-danger">@error('password') {{ $message }}  @enderror</span>
                </label>
                <label>
                    <input class="input" type="password" placeholder="Enter Password" name="password_confirmation" value="{{ old('password_confirmation') }}">
                    <span>Confirm password</span>
                    <span class="text-danger">@error('password') {{ $message }}  @enderror</span>
                </label>
                <button class="btn btn-block btn-primary" type="submit">Submit</button>
                <p class="signin">Back to Login <a href="#">Login</a> </p>
                </form>
              
           
        </div>
      </section>
</body>
</html>
