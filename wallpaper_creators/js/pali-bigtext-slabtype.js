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

    /***************************************************/
    // Get the correct logo from selectCorrectLogoFromLogoCodes.js
    /***************************************************/
    logoImageUrl = document.getElementById("logoImageUrl").value ;
    logoImageUrl = selectLogoFromLogoCodes(logoImageUrl) ; 
    //console.log(logoImageUrl) ; 
    /***************************************************/

          logoImageUrl = "<img src='" + logoImageUrl + "'>";

    separator = "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;";

/* ******** Printing the formmated text to an ID in the HTML page ***** */

document.getElementById("randcolorRGBAtext").innerHTML = "<div id=\"bigtext\"><span id=\"heading\">&mdash; " + headingName + " &mdash;</span><span id=\"mycolor\">" + separator + "</span>" + quoteText1 + "<span id=\"mycolor\">" + separator + "</span>" + logoImageUrl + "</div>" ;

document.getElementById("randcolorRGBA").innerHTML = "<div id=\"bigtext2\" style='background-color: " + colorRGBA + "; '> <span id=\"heading\">&mdash; " + headingName + " &mdash;</span><span id=\"mycolor\">" + separator + "</span>" + quoteText1 + "<span id=\"mycolor\">" + separator + "</span>" + logoImageUrl + "</div>" ;

/* Make sure the following Jquery only gets fired at the end of this function block. */
/* It's because it needs the text variable values to be loaded before this gets fired. */
$('#bigtext').bigtext();
$('#bigtext2').bigtext();

}
