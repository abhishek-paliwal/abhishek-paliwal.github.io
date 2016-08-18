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

        document.getElementById("demo1").innerHTML = "<div class='pali' style=\"background-color:" + colorRGBA + ";\">" + headingName + "<hr>" + text + "</div>";

        document.getElementById("demo1text").innerHTML = "<div class='pali' style=\"color:" + colorRGBA + ";\">" + text + "</div>";

}
