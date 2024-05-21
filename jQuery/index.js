$(document).keypress(function(event)
    {
        var newWord = event.key;
        $("h1").text(newWord);

    }
)