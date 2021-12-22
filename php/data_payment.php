<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Card Number: <?php echo $_GET["cardnumber"]; ?><br>
    Card Expiry: <?php echo $_GET["cardexpiry"];?>
    Card CVC: <?php echo $_GET["cardcvc"];?>
    Card Holder Name: <?php echo $_GET["cardname"];?>
</body>
</html>