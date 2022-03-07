function randRGBA(min,max)
{
/* Random RGBA color generation */
    randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
    randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
    randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);

    colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";

/* Getting the text from the form */

    divWidth = document.getElementById("divWidth").value ;
    divHeight = document.getElementById("divHeight").value ;
    customFooterText = document.getElementById("customFooterText").value ;

    headingName = document.getElementById("headingName").value ;

    fontFamily = document.getElementById("fontFamily").value ;

    greetingType = document.getElementById("greetingType").value ;
    textSize = document.getElementById("textSize").value ;
    fromName = document.getElementById("fromName").value ;
    toName = document.getElementById("toName").value ;
          if (toName != "") {
              toName = " for " + toName;
            } else {
              toName = "";
            }

    quoteText = document.getElementById("quoteText").value ;

    /***************************************************/
    // Get the correct logo from selectCorrectLogoFromLogoCodes.js
    /***************************************************/
    logoImageUrl = document.getElementById("logoImageUrl").value ;
    logoImageUrl = selectLogoFromLogoCodes(logoImageUrl) ; 
    //console.log(logoImageUrl) ; 
    /***************************************************/

            logoImageUrl = "<img src='" + logoImageUrl + "' height='90px'>" ;

                  if (logoImageUrl == "") {
                    logoImageUrl = "" ;
                  } else {
                    logoImageUrl = logoImageUrl ;
                  }

    footerText = "Made with <i class=\"fa fa-heart\"></i> by " + fromName + toName;

    ornamentStyle = document.getElementById("ornamentStyle").value ;

    rulerTop = "<img src='images/" + ornamentStyle + "orntop.png' width='90%'><br><br>";
    rulerBottom = "<br><br><img src='images/" + ornamentStyle + "ornbottom.png' width='90%'>";

/********* Printing the formmated text to an ID in the HTML page ******/
document.getElementById("randcolorRGBA").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background-color:" + colorRGBA + ";'>" + greetingType + "<p class='light'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='light'>" + footerText + "</p>" + logoImageUrl + "</div>";

document.getElementById("randcolorRGBAtext").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;color:" + colorRGBA + ";'>" + greetingType + "<p class='dark'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='dark'>" + footerText + "</p>" + logoImageUrl + "</div>";

document.getElementById("randcolorRGBAtextBorder").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";border: 10px double " + colorRGBA + ";font-size:" + textSize + "px ;color:" + colorRGBA + ";'>" + greetingType + "<p class='dark'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='dark'>" + footerText + "</p>" + logoImageUrl + "</div>";

/************ Printing out the codes for the random colors generated ********/
document.getElementById("colorPrinting").innerHTML = "<span style='color: " + colorRGBA + ";'>Chosen Random Color: " + colorRGBA + "</span>";

/************ Printing Special block with specifications defined for Div width and Div height **********/
document.getElementById("randcolorRGBAmggk").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background-color:" + colorRGBA + "; width:" + divWidth + "px ; height:" + divHeight + "px ;'>" + rulerTop + quoteText + rulerBottom + "<p style='font-size: 17px; font-family: sans-serif; letter-spacing: 1px;'>" + customFooterText + "</p>" + logoImageUrl + "</div>";

}
