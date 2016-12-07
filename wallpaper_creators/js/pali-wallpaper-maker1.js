function randRGBA(min,max)
{
/* Random RGBA color generation */
    randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
    randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
    randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);

    colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";

/* Getting the text from the form */
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

    logoImageUrl = document.getElementById("logoImageUrl").value ;
            if (logoImageUrl == "ap1") {
                logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-abhishek/Abhishek-Paliwal-125-Blacknwhite-Circle-footername.png";
            } else if (logoImageUrl == "ap2") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-abhishek/Abhishek-Paliwal-125-Circle-fullname.png";
            } else if (logoImageUrl == "ap3") {
              logoImageUrl  = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-abhishek/Album-Cover-Abhishek-Paliwal-Lorez.jpg";
            } else if (logoImageUrl == "ap4") {
              logoImageUrl  = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-abhishek/Signature-Stamp-Abhishek-Paliwal-Name-Logo-Wide-New-Dark.png";
            } else if (logoImageUrl == "anu1") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Black-White-Fullname.png";
            } else if (logoImageUrl == "anu2") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Colored-Fullname.png";
            } else if (logoImageUrl == "ap0") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-abhishek/Abhishek-Name-Stamp-Gold.png";
            } else if (logoImageUrl == "concepro1") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/Concepro-Shadow.png";
            } else if (logoImageUrl == "concepro2") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/I-Love-Concepro-Blue.png";
            } else if (logoImageUrl == "conceproc1") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-logo-with-santa-reindeer.png";
            } else if (logoImageUrl == "conceproc2") {
              logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-hat-logo.png";
            } else {
              logoImageUrl = logoImageUrl;
            }

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


}
