<!DOCTYPE html>

<html>
<head>
    <title>Email Active</title>
</head>
<body>
    <h1>Hallo . {{ $firstname }}</h1>

    <p>Your email is activated.</p>

    <a href="{{ route('active', $token) }}">Verify Email</a>

    <p>Thank you for Active Email</p>

</body>

</html>