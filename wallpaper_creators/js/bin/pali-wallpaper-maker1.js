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
    quoteText = document.getElementById("quoteText").value ;
    logoImageUrl = document.getElementById("logoImageUrl").value ;
          logoImageUrl = "<img src='" + logoImageUrl + "' height='100px'>" ;

    footerText = "Made with <i class=\"fa fa-heart\"></i> by " + fromName + " for " + toName;

    ornamentStyle = document.getElementById("ornamentStyle").value ;

    rulerTop = "<img src='images/" + ornamentStyle + "orntop.png' width='90%'><br><br>";
    rulerBottom = "<br><br><img src='images/" + ornamentStyle + "ornbottom.png' width='90%'>";

/********* Printing the formmated text to an ID in the HTML page ******/
document.getElementById("randcolorRGBA").innerHTML = "<div class='pali' style=\"font-size:" + textSize + "px ;background-color:" + colorRGBA + ";\"><i class=\"fa fa-heart fa-2x\"></i><p class='light'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='light'>" + footerText + "</p>" + logoImageUrl + "</div>";

document.getElementById("randcolorRGBAtext").innerHTML = "<div class='pali' style=\"font-size:" + textSize + "px ;color:" + colorRGBA + ";\"><i class=\"fa fa-heart fa-2x\"></i><p class='dark'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='dark'>" + footerText + "</p>" + logoImageUrl + "</div>";


}
