<ul id="account-panel" class="nav nav-pills flex-colum">
    <li class="nav-item">
        <a href="{{ route('order') }}" class="nav-link font-weight-bold" role="tab" aria-controls="tab-login"
         aria-expanded="false"><i class="fas fa-user-alt"></i>Profile</a>
    </li>
    <li class="nav-item">
        <a href="{{ route('order') }}" class="nav-link font-weight-bold" role="tab" aria-controls="tab-register"
        aria-expanded="false"><i class="fas fa-shopping-bag"></i>Orders</a>
    </li>
    <li class="nav-item">
        <a href="change-password.php" class="nav-link font-weight-bold" role="tab" aria-controls="tab-register"
        aria-expanded="false"><i class="fas fa-lock"></i>Cheng Password</a>
    </li>
    <li class="nav-item">
        <a href="{{ route('logout') }}" class="nav-link font-weight-bold" role="tab" aria-controls="tab-register"
        aria-expanded="false"><i class="fas fa-sign-out-alt"></i>Logout</a>
    </li>
</ul>

