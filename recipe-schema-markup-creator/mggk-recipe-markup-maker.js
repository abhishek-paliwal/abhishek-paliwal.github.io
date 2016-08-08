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
                for(var i = 0;i < arrayOfIngredients.length;i++){
                    //code here using arrayOfIngredients[i] which will give you each line
                    ingr += "&amp;#10047; &lt;span itemprop=&quot;recipeIngredient&quot;>" + arrayOfIngredients[i] + "&lt;/span&gt; &lt;br&gt;<br>";
                }
                recipeIngredients = "<br>" + ingr + "<br>";

/************** INGREDIENTS BLOCK CALCULATIONS END ******/

/************** INTRUCTIONS BLOCK CALCULATIONS BEGIN ******/

        recipeInstructions = document.getElementById("recipeInstructions").value;
                recipeInstructions = recipeInstructions.replace(/</g, "&lt;"); /* replacing < html tags */
                recipeInstructions = recipeInstructions.replace(/>/g, "&gt;"); /* replacing > html tags */
                recipeInstructions = recipeInstructions.replace(/\n/g, "&lt;br /&gt;<br>");

/************** INTRUCTIONS BLOCK CALCULATIONS END ******/



        recipeNotes = document.getElementById("recipeNotes").value;
        recipeUrl = document.getElementById("recipeUrl").value.replace(/ /g, "");
        recipeAuthor = document.getElementById("recipeAuthor").value;
        datePublished = document.getElementById("datePublished").value.replace(/ /g, "");

/********** Assembling the BIG BIG code from all the values above **********/
        var CodeContent = "&lt;div id=&quot;recipe-here&quot;&gt;        <br />    &lt;/div&gt;        <br />    &lt;style&gt;        <br />    @import 'https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700'; <br>@import 'https://fonts.googleapis.com/icon?family=Material+Icons';       <br />    &lt;/style&gt;        <br />        <br />    &lt;div id=&quot;recipe-print-block&quot; style=&quot;border: 1px dashed black; padding: 10px; font-size:12px; font-family: 'Roboto Slab', serif;&quot;&gt;        <br />        &lt;div itemscope itemtype=&quot;http://schema.org/Recipe&quot;&gt;        <br />            [print-me target=&quot;div#recipe-print-block&quot;]        <br />        <br />            &lt;h2 itemprop=&quot;name&quot;&gt;" + recipeName + "&lt;/h2&gt;        <br />            &lt;span itemprop=&quot;description&quot;&gt;" + recipeDescription + "&lt;/span&gt;        <br />        <br />            &lt;table border=&quot;0&quot; cellpadding=&quot;10&quot; cellspacing=&quot;10&quot; width=&quot;100%&quot;&gt;        <br />                &lt;tbody&gt;        <br />                    &lt;tr&gt;        <br />                        &lt;td align=&quot;left&quot; valign=&quot;top&quot; width=&quot;40%&quot;&gt;        <br />                            &lt;img itemprop=&quot;image&quot; src=&quot;"+imageUrl+"&quot; width=&quot;150px&quot;&gt;        <br />        <br />                            &lt;div itemprop=&quot;aggregateRating&quot; itemscope itemtype=&quot;http://schema.org/AggregateRating&quot;&gt;        <br />                                &lt;span style=&quot;color: #cd1d63;&quot;&gt;&amp;hearts; &amp;hearts; &amp;hearts; &amp;hearts; &amp;hearts;&lt;/span&gt; (Rating: &lt;span itemprop=&quot;ratingValue&quot;&gt;5&lt;/span&gt; from &lt;span itemprop=&quot;ratingCount&quot;&gt;1&lt;/span&gt; reviews)        <br />                            &lt;/div&gt;        <br />        <br />        <br />                            &lt;h3&gt;INGREDIENTS&lt;/h3&gt;        <br />" + recipeIngredients + "<br />                        &lt;/td&gt;        <br />        <br />                        &lt;td align=&quot;left&quot; valign=&quot;top&quot;&gt;        <br />                            &lt;table border=&quot;0&quot; cellpadding=&quot;1&quot; cellspacing=&quot;5&quot; width=&quot;100%&quot;&gt;        <br />                                &lt;tr&gt;        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#128336; Prep time&lt;/th&gt;        <br />        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#128336; Cook time&lt;/th&gt;        <br />        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#128336; Total time&lt;/th&gt;        <br />                                &lt;/tr&gt;        <br />        <br />        <br />                                &lt;tr&gt;        <br />                                    &lt;td style=&quot;text-align:center&quot;&gt;&lt;time datetime=&quot;" + prepTime + "&quot; itemprop=&quot;prepTime&quot;&gt;" + prepTimeHuman + "&lt;/time&gt;        <br />                                    &lt;/td&gt;        <br />        <br />                                    &lt;td style=&quot;text-align:center&quot;&gt;&lt;time datetime=&quot;" + cookTime + "&quot; itemprop=&quot;cookTime&quot;&gt;" + cookTimeHuman + "&lt;/time&gt;        <br />                                    &lt;/td&gt;        <br />        <br />                                    &lt;td style=&quot;text-align:center&quot;&gt;&lt;time datetime=&quot;" + totalTime + "&quot; itemprop=&quot;totalTime&quot;&gt;" + totalTimeHuman + "&lt;/time&gt;        <br />                                    &lt;/td&gt;        <br />                                &lt;/tr&gt;        <br />        <br />        <br />                                &lt;tr&gt;        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#9782; Category&lt;/th&gt;        <br />        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#9832; Cuisine&lt;/th&gt;        <br />        <br />                                    &lt;th style=&quot;text-align:center; width:33%; color:#cd1d63;&quot;&gt;&amp;#9786; Serves&lt;/th&gt;        <br />                                &lt;/tr&gt;        <br />        <br />        <br />                                &lt;tr&gt;        <br />                                    &lt;td itemprop=&quot;recipeCategory&quot; style=&quot;text-align:center; width:33%;&quot;&gt;" + recipeCategory + "&lt;/td&gt;        <br />        <br />                                    &lt;td itemprop=&quot;recipeCuisine&quot; style=&quot;text-align:center; width:33%;&quot;&gt;" + recipeCuisine + "&lt;/td&gt;        <br />        <br />                                    &lt;td itemprop=&quot;recipeYield&quot; style=&quot;text-align:center; width:33%;&quot;&gt;" + recipeYield + "&lt;/td&gt;        <br />                                &lt;/tr&gt;        <br />                            &lt;/table&gt;        <br />        <br />                            &lt;hr&gt;        <br />        <br />        <br />                            &lt;div itemprop=&quot;nutrition&quot; itemscope itemtype=&quot;http://schema.org/NutritionInformation&quot;&gt;        <br />                                Nutrition Info: &lt;span itemprop=&quot;calories&quot;&gt;" + nutritionCalories + "&lt;/span&gt;, Servings: &lt;span itemprop=&quot;servingSize&quot;&gt;" + nutritionServingSize + "&lt;/span&gt;        <br />                            &lt;/div&gt;        <br />        <br />        <br />                            &lt;h3&gt;INSTRUCTIONS:&lt;/h3&gt;        <br />        <br />        <br />                            &lt;div itemprop=&quot;recipeInstructions&quot;&gt;" + recipeInstructions + "       <br />                            &lt;/div&gt;        <br />        <br />                            &lt;hr&gt;        <br />        <br />        <br />                            &lt;h3&gt;NOTES:&lt;/h3&gt;        <br />                            " + recipeNotes + "       <br />                        &lt;/td&gt;        <br />                    &lt;/tr&gt;        <br />                &lt;/tbody&gt;        <br />            &lt;/table&gt;        <br />        <br />            &lt;hr&gt;        <br />        <br />        <br />            &lt;table border=&quot;0&quot; cellpadding=&quot;1&quot; cellspacing=&quot;5&quot; width=&quot;100%&quot;&gt;        <br />                &lt;tr&gt;        <br />                    &lt;td style=&quot;text-align:left; width:15%;&quot;&gt;&lt;img alt=&quot;Logo&quot; height=&quot;70px&quot; src=&quot;http://www.mygingergarlickitchen.com/wp-content/uploads/2015/02/mggk-new-logo-transparent-150px.png&quot;&gt;        <br />                    &lt;/td&gt;        <br />        <br />                    &lt;td style=&quot;text-align:left;&quot;&gt;        <br />                        &lt;strong&gt;Author:&lt;/strong&gt; &lt;span itemprop=&quot;author&quot;&gt;" + recipeAuthor + "&lt;/span&gt;&lt;br&gt;        <br />                        &lt;strong&gt;Recipe Source Link:&lt;/strong&gt; &lt;a href=&quot;" + recipeUrl + "&quot;&gt;&lt;span itemprop=&quot;url&quot;&gt;" + recipeUrl + "&lt;/span&gt;&lt;/a&gt;&lt;br&gt;        <br />                        &lt;strong&gt;Date Published: &lt;/strong&gt; &lt;span itemprop=&quot;datePublished&quot;&gt;" + datePublished + "&lt;/span&gt;        <br />                    &lt;/td&gt;        <br />                &lt;/tr&gt;        <br />            &lt;/table&gt;        <br />        &lt;/div&gt;        <br />    &lt;/div&gt;" ;

/******* Writing this code content to the specified element on the main HTML page ********/
        document.getElementById('generatedRecipeMarkup').innerHTML = CodeContent;


/*************  CREATING AND OPENING POP-UP WINDOWS **********/
/**************************************************************/

/******* Creating a new PopUp window with the code ready to be copieds ********/
        var myCodeWindow = window.open("", "_blank", "PlainCodeWindow", "width=800,height=800");
        myCodeWindow.document.write("<pre><code>" + CodeContent + "</code></pre>");

/******* HTML Preview Window Display + Conversion of source-code tags to html symbols **********/
var htmlPreviewCodeContent = CodeContent.replace(/&amp;/g, "&");
var htmlPreviewCodeContent = htmlPreviewCodeContent.replace(/&quot;/g, "\"");
var htmlPreviewCodeContent = htmlPreviewCodeContent.replace(/&gt;/g, ">");
var htmlPreviewCodeContent = htmlPreviewCodeContent.replace(/&lt;/g, "<");
var htmlPreviewCodeContent = htmlPreviewCodeContent.replace(/<br \/>/g, "");

/******* Writing this code content to the specified element on the main HTML page ********/
document.getElementById('generatedRecipeMarkupPreview').innerHTML = htmlPreviewCodeContent;


        var myPreviewWindow = window.open("", "_blank", "HTMLPreviewWindow", "width=800,height=800");
        myPreviewWindow.document.write("<!DOCTYPE html><html><head><title>Recipe Preview Window</title></head><body>" + htmlPreviewCodeContent + "</body></html>");


/**************************************************************/
/*************  CREATING AND OPENING POP-UP WINDOWS END **********/

}
