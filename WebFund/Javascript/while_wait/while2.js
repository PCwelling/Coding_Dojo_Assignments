<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>While you wait</title>
</head>
<body>
    <script>
        var daysUntilMyBirthday = 60;

        for(var i = 10; i > 0; i--){
            if(i > 30){
                i = i + "such a long time...";
                console.log(i);
        }
            if(i < 30 && i > 5){
                i = i + "it's getting close...";
                console.log(i);
        }
            if(i < 5 && i > 0){
                i = i + "Days left 😃";
                console.log(i);
        }
            if(i === 0){
                i = i + "HAPPY BIRTHDAY!!! 🎂 🎁 🎉"
                console.log(i);
        }
    }
    </script>
</body>
</html>