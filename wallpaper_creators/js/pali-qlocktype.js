// This one corresponds to the qlock type wallpaper //
function randRGBA(min,max)
{
  /* Random RGBA color generation */
      randnumberRed = Math.floor(Math.random()*(max-min+1)+min);
      randnumberGreen = Math.floor(Math.random()*(max-min+1)+min);
      randnumberBlue = Math.floor(Math.random()*(max-min+1)+min);
      colorRGBA = "rgba(" + randnumberRed + ", " + randnumberBlue +", "+ randnumberGreen + ", 1)";
      //  
      rand_hsl_hue1 = Math.floor(Math.random()*360) ;
      rand_hsl_hue2 = rand_hsl_hue1 + 60 ;
      rand_hsl_hue3 = rand_hsl_hue1 + 180 ;
      rand_hsl_saturation_percent = 100 ;
      rand_hsl_lightness_percentage = 50;
      tmp_randomHSLcolor1 = "hsl(" + rand_hsl_hue1 + "," + rand_hsl_saturation_percent +"%, " + rand_hsl_lightness_percentage +"%)" ;
      tmp_randomHSLcolor2 = "hsl(" + rand_hsl_hue2 + "," + rand_hsl_saturation_percent +"%, " + rand_hsl_lightness_percentage +"%)" ;
      tmp_randomHSLcolor3 = "hsl(" + rand_hsl_hue3 + "," + rand_hsl_saturation_percent +"%, " + rand_hsl_lightness_percentage +"%)" ;

      randomHSLcolor1 = "45deg , " + tmp_randomHSLcolor1 + ", " + tmp_randomHSLcolor2 ;
      randomHSLcolor2 = "45deg , " + tmp_randomHSLcolor1 + ", " + tmp_randomHSLcolor3 ;


        /* Getting the text from the form */

        headingName = document.getElementById("headingName").value.toUpperCase() ;
        headingName = headingName.trim() ;

        logoImageUrl = document.getElementById("logoImageUrl").value ;
                if (logoImageUrl == "ap1") {
                    logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-125-Blacknwhite-Circle-Footername.png";
                } else if (logoImageUrl == "ap2") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-125-Circle-Fullname.png";
                } else if (logoImageUrl == "ap3") {
                  logoImageUrl  = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Album-Cover-Abhishek-Paliwal-Lorez.jpg";
                } else if (logoImageUrl == "ap4") {
                  logoImageUrl  = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Signature-Stamp-Pali-Name-Logo-Wide-New-Dark.png";
                } else if (logoImageUrl == "anu1") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Black-White-Fullname.png";
                } else if (logoImageUrl == "anu2") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Colored-Fullname.png";
                } else if (logoImageUrl == "ap0") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-Name-Stamp-Gold.png";
                } else if (logoImageUrl == "concepro1") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/Concepro-Shadow.png";
                } else if (logoImageUrl == "concepro2") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/I-Love-Concepro-Blue.png";
                } else if (logoImageUrl == "conceproc1") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-logo-with-santa-reindeer.png";
                } else if (logoImageUrl == "conceproc2") {
                  logoImageUrl = "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-hat-logo.png";
                } else if (logoImageUrl == "ad0") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-0.png" ; 
                } else if (logoImageUrl == "ad1") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Adoria-Name-Stamp-golden.png" ; 
                } else if (logoImageUrl == "ad2") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Adoria-Name-Stamp-black.png" ; 
                } else if (logoImageUrl == "ad3") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-1.png" ; 
                } else if (logoImageUrl == "ad4") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-2.png" ; 
                } else if (logoImageUrl == "ad5") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-3.png" ; 
                } else if (logoImageUrl == "ad6") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-4.png" ; 
                } else if (logoImageUrl == "ad7") {
                  logoImageUrl = "https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Kisses-From-Adoria-Sticker-150dpi.png" ; 
                } else {
                  logoImageUrl = logoImageUrl;
                }

                logoImageUrl = "<img src='" + logoImageUrl + "' height='90px'>" ;

                      if (logoImageUrl == "") {
                        logoImageUrl = "" ;
                      } else {
                        logoImageUrl = logoImageUrl ;
                      }


        quoteText = document.getElementById("quoteText").value.toUpperCase() ;
        quoteText = quoteText.trim() ; 

        /* Calculations begin */
        warr = quoteText.split(' ');
        warr_elements_length_array = warr.map(a => a.length) ;
        longest_word_length = Math.max(...warr_elements_length_array) ;

        var randstring = 'DOLORSITAMETCONSECTETURADIPISICINGELITSEDDOEIUSMODTE';

        i=0;
        text ="";
        text1 ="";
        text2 ="";
        // Reading each word
        for (i = 0; i < warr.length; i++) {
            remlength = 15 - warr[i].length;
            randstart = Math.floor((Math.random() * remlength) );
            textbegin = randstring.substring(randstart, remlength);
            textend = randstring.substring(remlength, remlength + randstart);
            //
            text += "<br>" + "<span class='palicolor'>" + textbegin + "</span>" + warr[i] +  "<span class='palicolor'>" + textend + "</span>";
            ///////
            warr_letter_array = warr[i].split('') ;  
            
            insert_more_letters = longest_word_length - warr_letter_array.length ; 
            last_word = warr[warr.length -1] ; 
            last_word_letter_array = last_word.split('') ; 
            console.log(last_word_letter_array) ;
            //         
            //console.log(warr[i]) ;
            //console.log(warr_letter_array) ;
            //console.log('LENGTH = ' + warr_letter_array.length) ;
            //
            for (j = 0; j < warr_letter_array.length; j++) {
              /* ======== */
              // Formatting for last word in array
              if ( i === warr.length -1 ) {
                text1 += "<div class='wordletile tile_wordle_green'>" + warr_letter_array[j] + "</div>" ;
                text2 += "<div class='wordletile' style='background: linear-gradient(" + randomHSLcolor1 + ") ;'>" + warr_letter_array[j] + "</div>" ;
              //console.log(warr_letter_array[j]) ;
              } else {
                /* Check if current alphabet is present in last word of array, then format accordingly */
                if ( last_word_letter_array.includes(warr_letter_array[j]) ) {
                    console.log('Present: ' +  typeof(warr_letter_array[j]) + ' = ' + typeof(last_word_letter_array) ) ;
                    ////// Formatting for exact positional match for alphabet
                    if ( warr_letter_array[j] === last_word_letter_array[j] ) {
                      text1 += "<div class='wordletile tile_wordle_green'>" + warr_letter_array[j] + "</div>" ;
                      text2 += "<div class='wordletile' style='background: linear-gradient(" + randomHSLcolor1 + ") ;'>" + warr_letter_array[j] + "</div>" ;
                    } else { // Formatting for non-positional match for alphabet
                      text1 += "<div class='wordletile tile_wordle_yellow'>" + warr_letter_array[j] + "</div>" ;
                      text2 += "<div class='wordletile' style='background: linear-gradient(" + randomHSLcolor2 + ") ;'>" + warr_letter_array[j] + "</div>" ;
                    } ;
                    ////// 
                } else { // Formatting for no match for alphabet
                  text1 += "<div class='wordletile tile_wordle_darkgrey'>" + warr_letter_array[j] + "</div>" ;
                  text2 += "<div class='wordletile tile_wordle_darkgrey'>" + warr_letter_array[j] + "</div>" ;
                  console.log('Not present: ' +  typeof(warr_letter_array[j]) + ' = ' + typeof(last_word_letter_array) ) ;
                }
                /* ////////// */               
              }             
            /* ======== */
            } ;
            //////////
            // Formatting for empty blocks (preferably use one of these: tile_wordle_darkgrey // tile_wordle_border_color // tile_wordle_white)
            for (k = 0; k < insert_more_letters; k++) {
              text1 += "<div class='wordletile tile_wordle_darkgrey'>" + "" + "</div>" ;
              text2 += "<div class='wordletile tile_wordle_darkgrey'>" + "" + "</div>" ;
              //text1 += "<div class='wordletile tile_wordle_white'>" + "" + "</div>" ; 
              //text1 += "<div class='wordletile tile_wordle_border_color'>" + "" + "</div>" ; 
            }
            text1 += "<br>" ; 
            text2 += "<br>" ; 
           /////////

        }


        document.getElementById("demo1").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='pali' style=\"background-color:" + colorRGBA + ";\">" + text + "</div>" + "<br>" + logoImageUrl ;

        document.getElementById("demo1text").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='pali' style=\"color:" + colorRGBA + ";\">" + text + "</div>"+ "<p class='dark'>&mdash;</p>" + logoImageUrl ;

        document.getElementById("demowordle1").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='paliwordle' style=\"background-color: white ;\">" + text1 + "</div>" + "<br>" + logoImageUrl ;

        document.getElementById("demowordle2").innerHTML = "<p class='dark'>" + headingName + "<br>&mdash;</p>" + "<div class='paliwordle' style=\"background-color: white ;\">" + text2 + "</div>" + "<br>" + logoImageUrl ;

}
