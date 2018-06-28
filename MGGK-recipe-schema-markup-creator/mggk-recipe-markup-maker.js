function showInput() {
        recipeName  = document.getElementById("recipeName").value;
        recipeDescription  = document.getElementById("recipeDescription").value;
              recipeDescription = recipeDescription.replace(/\n/g, "&lt;br /&gt;<br>");


/* Time variables calcuations begin */

/* for preptime */
        prepTimeHours = document.getElementById("prepTimeHours").value.replace(/ /g, "");
        prepTimeMinutes = document.getElementById("prepTimeMinutes").value.replace(/ /g, "");
        if ( prepTimeHours != 0) {
            prepTimeHuman = prepTimeHours + " Hour " + prepTimeMinutes + " Minutes";
            prepTime = "PT" + prepTimeHours + "H" + prepTimeMinutes + "M";

        } else {
            prepTimeHuman = prepTimeMinutes + " Minutes";
            prepTime = "PT" + prepTimeMinutes + "M";

        }

/* for cooktime */
        cookTimeHours  = document.getElementById("cookTimeHours").value.replace(/ /g, "");
        cookTimeMinutes  = document.getElementById("cookTimeMinutes").value.replace(/ /g, "");
        if ( cookTimeHours != 0) {
            cookTimeHuman = cookTimeHours + " Hour " + cookTimeMinutes + " Minutes";
            cookTime = "PT" + cookTimeHours + "H" + cookTimeMinutes + "M";

        } else {
            cookTimeHuman = cookTimeMinutes + " Minutes";
            cookTime = "PT" + cookTimeMinutes + "M";

        }

/* for totaltime */
        totalTimeHours =  document.getElementById("totalTimeHours").value.replace(/ /g, "");
        totalTimeMinutes =  document.getElementById("totalTimeMinutes").value.replace(/ /g, "");
        if ( totalTimeHours != 0) {
            totalTimeHuman = totalTimeHours + " Hour " + totalTimeMinutes + " Minutes";
            totalTime = "PT" + totalTimeHours + "H" + totalTimeMinutes + "M";

        } else {
            totalTimeHuman = totalTimeMinutes + " Minutes";
            totalTime = "PT" + totalTimeMinutes + "M";
        }

/* Time variables calcuations end */

        imageUrl =  document.getElementById("imageUrl").value.replace(/ /g, "");
        ratingValue = document.getElementById("ratingValue").value.replace(/ /g, "");
        ratingCount = document.getElementById("ratingCount").value.replace(/ /g, "");

        recipeCategory = document.getElementById("recipeCategory").value;
        recipeCuisine = document.getElementById("recipeCuisine").value;
        recipeYield = document.getElementById("recipeYield").value;
        nutritionCalories = document.getElementById("nutritionCalories").value;
        nutritionServingSize = document.getElementById("nutritionServingSize").value;

/************** INGREDIENTS BLOCK CALCULATIONS BEGIN ******/

        recipeIngredients = document.getElementById("recipeIngredients").value;
                recipeIngredients = recipeIngredients.replace(/</g, "&lt;"); /* replacing < html tags */
                recipeIngredients = recipeIngredients.replace(/>/g, "&gt;"); /* replacing > html tags */

                arrayOfIngredients = recipeIngredients.split("\n");

                ingr = "";
                LDJSONingr = "";

                for(var i = 0;i < arrayOfIngredients.length;i++){
                    //code here using arrayOfIngredients[i] which will give you each line
                    ingr += "&bull; <span itemprop='recipeIngredient'>" + arrayOfIngredients[i] + "</span><br>";
                    LDJSONingr += "\"" + arrayOfIngredients[i] + "\"," ;
                }
                recipeIngredients = "<p>" + ingr + "</p>";

                LDJSONrecipeIngredients = LDJSONingr + "\"\"" ; /**empty ingredient at the end, otherwise an extra comma appears **/


/************** INGREDIENTS BLOCK CALCULATIONS END ******/

/************** INTRUCTIONS BLOCK CALCULATIONS BEGIN ******/

        recipeInstructions = document.getElementById("recipeInstructions").value;

        LDJSONrecipeInstructions = recipeInstructions ; /** JSON+LD Recipe instuctions plain code **/

            /** Keep the below replacement line after JSON+LD recipe-instructions block **/
            recipeInstructions = recipeInstructions.replace(/\n/g, "<br>"); /* replacing newline chars with html tags */

/************** INTRUCTIONS BLOCK CALCULATIONS END ******/


        recipeNotes = document.getElementById("recipeNotes").value;
        recipeUrl = document.getElementById("recipeUrl").value.replace(/ /g, "");
        recipeAuthor = document.getElementById("recipeAuthor").value;
        datePublished = document.getElementById("datePublished").value.replace(/ /g, "");


/************** RECIPE VIDEO and KEYWORDS BLOCK BEGIN ******/

        recipeGoogleKeywords = document.getElementById("recipeGoogleKeywords").value ;

        recipeVideoYoutubeURLid = document.getElementById("recipeVideoYoutubeURLid").value.replace(/ /g, "");

        videoPresent = document.getElementById("videoPresent").value ;

        if ( videoPresent == "YES" ) {

            recipeNameVideo = recipeName ;
            recipeDescriptionVideo = recipeDescription ;
            datePublishedVideo = datePublished ;
            imageUrlVideo = imageUrl ;

            recipeVideoYoutubeURLid_url = "https://youtu.be/" + recipeVideoYoutubeURLid ;
            recipeVideoYoutubeURLid_embed = "https://www.youtube.com/embed/" + recipeVideoYoutubeURLid ;
            recipeVideoYoutubeURLid_thumb = "https://i.ytimg.com/vi/" + recipeVideoYoutubeURLid + "/maxresdefault.jpg" ;

                All_video_related_content = "<strong>Youtube Video URL:</strong> " + "<a href='" + recipeVideoYoutubeURLid_url + "'>" + recipeVideoYoutubeURLid_url + "</a>" +
                                            "<br><strong>Video Embed URL:</strong> " + "<a href=" + recipeVideoYoutubeURLid_embed + ">" + recipeVideoYoutubeURLid_embed + "</a>" +
                                            "<br><strong>Video Thumbnail 1:</strong> " + "<a href=" + recipeVideoYoutubeURLid_thumb + ">" + recipeVideoYoutubeURLid_thumb + "</a>" +
                                            "<br><strong>Video Thumbnail 2:</strong> " + "<a href=" + imageUrl + ">" + imageUrl + "</a>" ;

        } else {

            recipeNameVideo = "" ;
            recipeDescriptionVideo = "" ;
            datePublishedVideo = "" ;
            imageUrlVideo = "" ;

            recipeVideoYoutubeURLid_url = "" ;
            recipeVideoYoutubeURLid_embed = "" ;
            recipeVideoYoutubeURLid_thumb = "" ;

                All_video_related_content = "<strong>Youtube Video URL:</strong> " + "<a href='" + recipeVideoYoutubeURLid_url + "'>" + recipeVideoYoutubeURLid_url + "</a>" +
                                            "<br><strong>Video Embed URL:</strong> " + "<a href=" + recipeVideoYoutubeURLid_embed + ">" + recipeVideoYoutubeURLid_embed + "</a>" +
                                            "<br><strong>Video Thumbnail 1:</strong> " + "<a href=" + recipeVideoYoutubeURLid_thumb + ">" + recipeVideoYoutubeURLid_thumb + "</a>" +
                                            "<br><strong>Video Thumbnail 2:</strong> " + "<a href=" + imageUrl + ">" + imageUrl + "</a>" ;

        }

        /******* Writing this code content to the specified element on the main HTML page ********/
        document.getElementById('generatedYoutubeVideoPreview').innerHTML = All_video_related_content ;


/************** RECIPE VIDEO and KEYWORDS BLOCK END ******/



/********** Assembling the BIG BIG RECIPE code from all the values above **********/

NewCodeContent = "" ; /*** Defining as empty variable ***/

NewCodeContent ="\n <!-- HTML RECIPE CODE BLOCK BELOW THIS --> \n" +
"\n <div id='recipe-here'></div>" +
"\n <!-- /------------/ -->" +
"\n <div id='recipe-print-block' style='line-height: 1.1; border: 1px dashed black; padding: 10px; font-size: 14px; font-family: sans-serif; '>" +
"\n     <div itemscope itemtype='http://schema.org/Recipe'>" +
"\n         [print-me target='div#recipe-print-block']" +
"\n <!-- /------------/ -->" +
"\n         <h3><span itemprop='name'>" + recipeName + "</span> [RECIPE]</h3>" +
"\n         <span itemprop='description'>" + recipeDescription + "</span>" +
"\n <!-- /------------/ -->" +
"\n         <div class='flexbox_recipe_container'>" +
"\n <!-- /------------/ -->" +
"\n             <div class='flexbox_recipe_left'><!-- recipe left flexbox starts -->" +
"\n <!-- /------------/ -->" +
"\n                         <img itemprop='image' src='" + imageUrl + "' width='150px'>" +
"\n <!-- /------------/ -->" +
"\n                         <div itemprop='aggregateRating' itemscope itemtype='http://schema.org/AggregateRating'>" +
"\n                             <span style='color: #cd1d63;'>&hearts; &hearts; &hearts; &hearts; &hearts;</span>" +
"\n                             (Rating: <span itemprop='ratingValue'>" + ratingValue + "</span> from <span itemprop='ratingCount'>" + ratingCount + "</span> reviews)" +
"\n                         </div>" +
"\n <!-- /------------/ -->" +
"\n                         <h3>INGREDIENTS</h3>" + recipeIngredients + "<hr>" +
"\n <!-- /------------/ -->" +
"\n             </div><!-- recipe left flexbox ends -->" +
"\n <!-- /------------/ -->" +
"\n             <div class='flexbox_recipe_right'><!-- recipe right flexbox starts -->" +
"\n                         <table border='0' cellpadding='1' cellspacing='5' width='100%'>" +
"\n                             <tr>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#128336; Prep time</th>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#128336; Cook time</th>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#128336; Total time</th>" +
"\n                             </tr>" +
"\n <!-- /------------/ -->" +
"\n                             <tr>" +
"\n                                 <td style='text-align:center'><time datetime='" + prepTime + "' itemprop='prepTime'>" + prepTimeHuman + "</time></td>" +
"\n                                 <td style='text-align:center'><time datetime='" + cookTime + "' itemprop='cookTime'>" + cookTimeHuman + "</time></td>" +
"\n                                 <td style='text-align:center'><time datetime='" + totalTime + "' itemprop='totalTime'>" + totalTimeHuman + "</time></td>" +
"\n                             </tr>" +
"\n <!-- /------------/ -->" +
"\n                             <tr>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#9782; Category</th>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#9832; Cuisine</th>" +
"\n                                 <th style='text-align:center; width:33%; color:#cd1d63;'>&#9786; Serves</th>" +
"\n                             </tr>" +
"\n <!-- /------------/ -->" +
"\n                             <tr>" +
"\n                                 <td itemprop='recipeCategory' style='text-align:center; width:33%;'>" + recipeCategory + "</td>" +
"\n                                 <td itemprop='recipeCuisine' style='text-align:center; width:33%;'>" + recipeCuisine + "</td>" +
"\n                                 <td itemprop='recipeYield' style='text-align:center; width:33%;'>" + recipeYield + "</td>" +
"\n                             </tr>" +
"\n                         </table>" +
"\n <!-- /------------/ -->" +
"\n                         <hr>" +
"\n <!-- /------------/ -->" +
"\n                         <div itemprop='nutrition' itemscope itemtype='http://schema.org/NutritionInformation'>" +
"\n                             <strong>Nutrition Info:</strong> <span itemprop='calories'>" + nutritionCalories + "</span> // <strong>Servings:</strong> <span itemprop='servingSize'>" + nutritionServingSize + "</span>" + "</div>" +
"\n <!-- /------------/ -->" +
"\n                         <h3>INSTRUCTIONS:</h3>" +
"\n                         <div itemprop='recipeInstructions'>" + recipeInstructions + "</div>" +
"\n <!-- /------------/ -->" +
"\n                         <hr>" +
"\n <!-- /------------/ -->" +
"\n                         <h3>NOTES:</h3>" + recipeNotes +
"\n <!-- /------------/ -->" +
"\n         </div><!-- recipe right flexbox ends -->" +
"\n <!-- /------------/ -->" +
"\n      </div><!-- recipe main flexbox container ends -->" +
"\n <!-- /------------/ -->" +
"\n         <hr>" +
"\n <!-- /------------/ -->" +
"\n         <table border='0' cellpadding='1' cellspacing='5' width='100%'>" +
"\n             <tr>" +
"\n                 <td style='text-align:left; width:15%;'><img alt='Logo' height='70px' src='http://www.mygingergarlickitchen.com/wp-content/uploads/2015/02/mggk-new-logo-transparent-150px.png'>" +
"\n                 </td>" +
"\n <!-- /------------/ -->" +
"\n                 <td style='text-align:left;'>" +
"\n                     <strong>Author:</strong> <span itemprop='author'>" + recipeAuthor + "</span><br>" +
"\n                     <strong>Recipe Source Link:</strong> <a href='" + recipeUrl + "'><span itemprop='url'>" + recipeUrl + "</span></a><br>" +
"\n                     <strong>Date Published: </strong> <span itemprop='datePublished'>" + datePublished + "</span>" +
"\n                 </td>" +
"\n             </tr>" +
"\n         </table>" +
"\n <!-- /------------/ -->" +
"\n     </div>" +
"\n <!-- /------------/ -->" +
"\n </div>" +
"\n <!-- HTML RECIPE CODE BLOCK ABOVE THIS --> \n" ;

/******* Writing this code content to the specified element on the main HTML page ********/
        document.getElementById('generatedRecipeMarkup').innerHTML = "<textarea rows='40' style='width: 100%; border: 5px double #3498db;'>" + NewCodeContent + "</textarea>" ;

        /******* Writing this code content to the specified element on the main HTML page ********/
        document.getElementById('generatedRecipeMarkupPreview').innerHTML = NewCodeContent ;

        /*************  CREATING AND OPENING POP-UP WINDOW **********/
        /**************************************************************/
        /******* Creating a new PopUp window with added stylesheet for the final display for checking ********/

                var myPreviewWindow = window.open("", "_blank", "HTMLPreviewWindow", "width=800,height=800");
                myPreviewWindow.document.write("<!DOCTYPE html><html><head><title>Recipe Preview Window</title>" +
                "<style>" +
                    ".flexbox_recipe_container{display:-webkit-flex;display:flex;flex-wrap:wrap;width:100%}" +
                    ".flexbox_recipe_left{padding:5px;width:30%}" +
                    ".flexbox_recipe_right{padding:5px;width:65%}" +
                    "@media(max-width:640px){" +
                    "    .flexbox_recipe_left{width:100%}" +
                    "    .flexbox_recipe_right{width:100%}" +
                    "}" +
                "</style> " +
                "</head><body>" +
                NewCodeContent +
                "</body></html>");

/**************************************************************/
/*************  CREATING AND OPENING POP-UP WINDOWS END **********/

/**************************************************************/
/******* Creating official RECIPE LD+JSON code for custom-fields in Wordpress *********/
final_LDJSON_code = "<script type=\"application/ld+json\">" +
"\n { " +
"\n   \"@context\": \"http://schema.org/\"," +
"\n   \"@type\": \"Recipe\"," +
"\n   \"name\": \"" + recipeName + "\"," +
"\n     \"image\": [" +
"\n       \"" + imageUrl + "\"," +
"\n       \"" + recipeVideoYoutubeURLid_thumb + "\"" +
"\n       ]," +
"\n   \"description\": \"" + recipeDescription + "\"," +
"\n   \"recipeIngredient\": [" + LDJSONrecipeIngredients + "]," +
"\n   \"prepTime\": \"" + prepTime + "\"," +
"\n   \"cookTime\": \"" + cookTime + "\"," +
"\n   \"totalTime\": \"" + totalTime + "\"," +
"\n   \"recipeCategory\": \"" + recipeCategory + "\"," +
"\n   \"recipeCuisine\": \"" + recipeCuisine + "\", " +
"\n   \"recipeYield\": \"" + recipeYield + "\"," +
"\n   \"recipeInstructions\": \"" + LDJSONrecipeInstructions + "\", " +
"\n   \"url\": \""  + recipeUrl + "\", " +
"\n   \"datePublished\": \""  + datePublished + "\", " +
"\n   \"aggregateRating\": { " +
"\n     \"@type\": \"AggregateRating\", " +
"\n     \"ratingValue\": \"" + ratingValue + "\", " +
"\n     \"ratingCount\": \"" + ratingCount + "\" " +
"\n   }, " +
"\n   \"nutrition\": { " +
"\n       \"@type\": \"NutritionInformation\", " +
"\n       \"calories\": \"" + nutritionCalories + "\", " +
"\n       \"servingSize\": \"" + nutritionServingSize + "\" " +
"\n   }, " +
"\n   \"author\": { " +
"\n   \"@type\": \"Person\", " +
"\n   \"name\": \"" + recipeAuthor + "\", " +
"\n   \"brand\": \"My Ginger Garlic Kitchen\", " +
"\n   \"url\": \"http://www.MyGingerGarlicKitchen.com\" " +
"\n   }, " +
"\n   \"keywords\": \"" + recipeGoogleKeywords + "\", " +
"\n   \"video\": [" +
"\n     {" +
"\n     \"name\": \"" + recipeNameVideo + "\"," +
"\n     \"description\": \"" + recipeDescriptionVideo + "\"," +
"\n     \"thumbnailUrl\": [" +
"\n       \"" + recipeVideoYoutubeURLid_thumb + "\"," +
"\n       \"" + imageUrlVideo + "\" " +
"\n       ]," +
"\n     \"contentUrl\": \"" + recipeVideoYoutubeURLid_url + "\"," +
"\n     \"embedUrl\": \"" + recipeVideoYoutubeURLid_embed + "\"," +
"\n     \"uploadDate\": \"" + datePublishedVideo + "\" " +
"\n    }" +
"\n   ]" +
"\n } " +
"\n </script>" ;

/**** Printing JSON-LD Values ****/
JSONLDrecipeCodePrefix = "\n<!-- JSON+LD RECIPE SCHEMA BLOCK BELOW THIS -->\n" ;
JSONLDrecipeCodeSuffix = "\n<!-- JSON+LD RECIPE SCHEMA BLOCK ABOVE THIS -->\n" ;
document.getElementById('final_LDJSON_code_Printing').innerHTML = "<textarea rows='20' style='width: 100%; border: 5px double #cd1d62;'>" + JSONLDrecipeCodePrefix + final_LDJSON_code + JSONLDrecipeCodeSuffix + "</textarea>" ;


/** TIME STAMP AND DATE AT EXECUTION **/
var TODAY = new Date();
document.getElementById('timeNow').innerHTML = TODAY ;
document.getElementById('timeNow1').innerHTML = TODAY ;

/************************ CODE ENDS **************************************/
}
