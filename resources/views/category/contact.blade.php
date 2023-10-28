<!DOCTYPE html>
<html lang="en">
  @include('category.header')
<body>
  
  <section class="contact bg-light mt-5">
    <div class="container">
      <div class="text-center">
        <h2>
          Let's Get In Touch!
        </h2>
      </div>
    </div>
    </div>
    <div class="container contact_bg layout_padding2-top">
      <div class="row">
        <div class="col-md-6">
          <div class="contact_form ">
            <form action="">
              <label for="floatingName">Name</label>
              <input type="text" placeholder="Name ">
              <label for="floatingInput">Email address</label>
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingMessage">Message</label>
              <input type="text" placeholder="Message" class="message_input">
              <button>
                Send
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="{{ asset('assets/image/7.jpg') }}" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</html>