// This one corresponds to the qlock type wallpaper //
function randRGBA(min,max)
{
  /* Random RGBA color generation */
      randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
      randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
      randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);

      colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";

        /* Getting the text from the form */

        headingName = document.getElementById("headingName").value.toUpperCase(); ;

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


        quoteText = document.getElementById("quoteText").value.toUpperCase(); ;

        /* Calculations begin */
        warr = quoteText.split(' ');

        var randstring = 'DOLORSITAMETCONSECTETURADIPISICINGELITSEDDOEIUSMODTE';

        i=0;
        text ="";
        text1 ="";
        for (i = 0; i < warr.length; i++) {

            remlength = 15 - warr[i].length;

            randstart = Math.floor((Math.random() * remlength) );

            textbegin = randstring.substring(randstart, remlength);

            textend = randstring.substring(remlength, remlength + randstart);

            text += "<br>" + "<span class='palicolor'>" + textbegin + "</span>" + warr[i] +  "<span class='palicolor'>" + textend + "</span>";

        }

        document.getElementById("demo1").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='pali' style=\"background-color:" + colorRGBA + ";\">" + text + "</div>" + "<br>" + logoImageUrl ;

        document.getElementById("demo1text").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='pali' style=\"color:" + colorRGBA + ";\">" + text + "</div>"+ "<p class='dark'>&mdash; DESIGN BY &mdash;</p>" + logoImageUrl ;

}
