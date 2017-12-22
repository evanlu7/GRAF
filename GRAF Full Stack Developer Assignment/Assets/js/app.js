// Shorten URL with Google API
$("#shorten").click(function writeToPage() {
    var longUrl = $("#shortenURL").val();
    $.ajax({
        url: 'https://www.googleapis.com/urlshortener/v1/url?&key=AIzaSyCnibvuj2xdGGnSJrHS54NJ56kKFnWTsVo',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: '{longUrl:"' + longUrl + '"}',
        success: function (response) {
            console.log(response["id"]);
            var shortURL = "<a href=" + response["id"] + " target=_BLANK >" + response["id"] + "</a>";             
             document.getElementById("form7").innerHTML = shortURL;



             // Change to COPY  on click
            $("form7").css('color', 'black');
            document.getElementById("shorten").innerHTML = '<h3 class="text-center font-weight-bold" id="copy">COPY</h3>';


// Copy Link








        }
    });

          



});