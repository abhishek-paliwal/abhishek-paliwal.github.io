function randRGBA(min,max)
{
/* Random RGBA color generation */
    randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
    randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
    randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);

    colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";

/* Getting the text from the form */
    headingName = document.getElementById("headingName").value ;
    textSize = document.getElementById("textSize").value ;
    fromName = document.getElementById("fromName").value ;
    toName = document.getElementById("toName").value ;

/* QuoteText calculations begin */
    quoteText = document.getElementById("quoteText").value ;
          arrayOfQuoteText = quoteText.split("\n");
          quoteText1 = "";
            var i;
            for(var i = 0; i < arrayOfQuoteText.length; i++){
                //code here using arrayOfIngredients[i] which will give you each line
                quoteText1 += "<span>" + arrayOfQuoteText[i] + "</span>";
            }
/* QuoteText calculations end */

    logoImageUrl = document.getElementById("logoImageUrl").value ;
          logoImageUrl = "<img src='" + logoImageUrl + "'>";

    footerText = "Made with <i class=\"fa fa-heart\"></i> by " + fromName + " for " + toName;

    ornamentStyle = document.getElementById("ornamentStyle").value ;

    rulerTop = "<img src='images/" + ornamentStyle + "orntop.png' width='90%'><br><br>";
    rulerBottom = "<br><br><img src='images/" + ornamentStyle + "ornbottom.png' width='90%'>";

    separator = "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;";

/********* Printing the formmated text to an ID in the HTML page ******/
document.getElementById("randcolorRGBA").innerHTML = "<div id=\"bigtext\"> <span id=\"heading\">&mdash; " + headingName + " &mdash;</span><span id=\"mycolor\">" + separator + "</span>" + quoteText1 + "<span id=\"mycolor\">" + separator + "</span>" + logoImageUrl + "</div>" ;

}
