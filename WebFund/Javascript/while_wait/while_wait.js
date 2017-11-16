
        var daysUntilnodeMyBirthday = 60;

        for(var i = daysUntilMyBirthday; i < 0; i--){
            if(i > 30){
                i = i + "such a long time..."
        }
            if(i < 30 && i > 5){
                i = i + "it's getting close..."
        }
            if(i < 5 && i > 0){
                i = i + "Days left 😃"
        }
            if(i === 0){
                i = i + "HAPPY BIRTHDAY!!! 🎂 🎁 🎉"
        }
        console.log(i)
    }