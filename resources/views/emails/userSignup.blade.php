<!DOCTYPE html>

<html>
<head>
    <title>Email Send</title>
</head>
<body>
    <h1>Hallo . {{ $firstname }}</h1>

    <p>Activate your email by pressing the key.</p>


    <a class="btn btn-success" href="{{ env('EMAIL_ACTIVE_LINK_PREFIX') . $activation_token}}">
       <button type="button" class="pm-center btn btn-primary btn-lg">Verify Email</button>
    </a>


</body>

</html>