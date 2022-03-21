function calculateRandIntegerBtwn2Nums(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min) ;
}

/***************************************************/
function randRGBA(min,max)
{
/* Random RGBA color generation */
    randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
    randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
    randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);
    colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";

/* Random HSLA color generation for gradients */
    gradient_degrees = calculateRandIntegerBtwn2Nums(0,180) ; 
    rand_hue_angle = calculateRandIntegerBtwn2Nums(30,180) ; 
    //
    rand_hsl_hue1 = calculateRandIntegerBtwn2Nums(0,360) ; 
    rand_hsl_hue2 = rand_hsl_hue1 + 180 ;
    rand_hsl_saturation_percent = 100 ;
    rand_hsl_lightness_percentage = calculateRandIntegerBtwn2Nums(10,90) ;
    //rand_hsl_lightness_percentage = 50 ;
    //
    tmp_randomHSLcolor1 = "hsl(" + rand_hsl_hue1 + "," + rand_hsl_saturation_percent +"%," + rand_hsl_lightness_percentage +"%)" ;
    tmp_randomHSLcolor1_next = "hsl(" + (rand_hsl_hue1 + rand_hue_angle) + "," + rand_hsl_saturation_percent +"%," + (100-rand_hsl_lightness_percentage) +"%)" ;
    //
    tmp_randomHSLcolor2 = "hsl(" + rand_hsl_hue2 + "," + rand_hsl_saturation_percent +"%," + rand_hsl_lightness_percentage +"%)" ;tmp_randomHSLcolor2_next = "hsl(" + (rand_hsl_hue2 + rand_hue_angle) + "," + rand_hsl_saturation_percent +"%," + (100-rand_hsl_lightness_percentage) +"%)" ;
    //
    randomHSLgradient1 = "linear-gradient(" + gradient_degrees + "deg," + tmp_randomHSLcolor1 + "," + tmp_randomHSLcolor1_next + ")" ;
    //
    randomHSLgradient2 = "linear-gradient(" + gradient_degrees + "deg," + tmp_randomHSLcolor2 + "," + tmp_randomHSLcolor2_next + ")" ;


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

    logoOrFavicon = document.getElementById("logoOrFavicon").value ;
    letterSpacing = document.getElementById("letterSpacing").value ;
    borderRadius = document.getElementById("borderRadius").value ;
    lineHeight = document.getElementById("lineHeight").value ;

    /********* Printing the formmated text to an ID in the HTML page ******/
    document.getElementById("randcolorRGBA").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background-color:" + colorRGBA + ";'>" + greetingType + "<p class='light'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='light'>" + footerText + "</p>" + logoImageUrl + "</div>";

    document.getElementById("randcolorRGBAtext").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;color:" + colorRGBA + ";'>" + greetingType + "<p class='dark'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='dark'>" + footerText + "</p>" + logoImageUrl + "</div>";

    document.getElementById("randcolorRGBAtextBorder").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";border: 10px double " + colorRGBA + ";font-size:" + textSize + "px ;color:" + colorRGBA + ";'>" + greetingType + "<p class='dark'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='dark'>" + footerText + "</p>" + logoImageUrl + "</div>";

    /************ Printing out the codes for the random colors generated ********/
    document.getElementById("colorPrinting").innerHTML = "<span style='color: " + colorRGBA + ";'>Chosen Random Color: " + colorRGBA + "</span>";

    /************ Printing Special block with specifications defined for Div width and Div height **********/
    document.getElementById("randcolorRGBAmggk").innerHTML = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background-color:" + colorRGBA + "; width:" + divWidth + "px ; height:" + divHeight + "px ;'>" + rulerTop + quoteText + rulerBottom + "<p style='font-size: 17px; font-family: sans-serif; letter-spacing: 1px;'>" + customFooterText + "</p>" + logoImageUrl + "</div>";

    /***************** Gradients ******************/
    /* If not a logo */
    randcolorHSLAgradient1_content = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background: " + randomHSLgradient1 + ";'>" + greetingType + "<p class='light'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='light'>" + footerText + "</p>" + logoImageUrl + "</div>" ; 
    //
    randcolorHSLAgradient2_content = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + textSize + "px ;background: " + randomHSLgradient2 + ";'>" + greetingType + "<p class='light'>" + headingName + "</p>" + rulerTop + quoteText + rulerBottom + "<p class='light'>" + footerText + "</p>" + logoImageUrl + "</div>" ;
    //
    /* If it is a logo */
    randcolorHSLAgradient1_contentLogo = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + (5*textSize) + "px ;background: " + randomHSLgradient1 + "; line-height: "+ lineHeight + "; letter-spacing: " + letterSpacing + "px ; border-radius: " + borderRadius + "% ; width:" + divWidth + "px ; height:" + divWidth + "px ;'>" + quoteText + "</div>" ; 
    //
    randcolorHSLAgradient2_contentLogo = "<div class='pali' style='font-family: " + fontFamily + ";font-size:" + (5*textSize) + "px ;background: " + randomHSLgradient2 + "; line-height: "+ lineHeight + "; letter-spacing: " + letterSpacing + "px ; border-radius: " + borderRadius + "% ; width:" + divWidth + "px ; height:" + divWidth + "px ;'>" + quoteText + "</div>" ; 

    // Choose wisely for logo
    if (logoOrFavicon === "YES") {
      document.getElementById("randcolorHSLAgradient1").innerHTML = randcolorHSLAgradient1_contentLogo ; 
      document.getElementById("randcolorHSLAgradient2").innerHTML = randcolorHSLAgradient2_contentLogo ; 
    } else {
      document.getElementById("randcolorHSLAgradient1").innerHTML = randcolorHSLAgradient1_content ; 
      document.getElementById("randcolorHSLAgradient2").innerHTML = randcolorHSLAgradient2_content ; 
    }

}
