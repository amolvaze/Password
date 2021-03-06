    $(document).ready(function() {
        $("#password").on("keypress keyup keydown", function() {
            var pass = $(this).val();
            $("#strength_human").text(checkPassStrength(pass));
            $("#strength_score").text(scorePassword(pass));
        });
    });


    function scorePassword(pass) {
        var score = 0;
        if (!pass)
            return " ";


        
        var letters = new Object();
        for (var i=0; i<pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return parseInt(score);
    }

    function checkPassStrength(pass) {
        var score = scorePassword(pass);
        if (score > 100)
            return "Very Strong";
        if (score > 80)
            return "Strong";
        if (score > 60)
            return "Good";
        if (score >= 30)
            return "Weak";
         if (score <= 5)
            return "Very Weak";

        return " ";
    }


