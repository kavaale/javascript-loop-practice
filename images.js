$(document).ready(function () {

    $("button").click(runLoops);


    function runLoops() {
        // Clear out all existing images
        $(".imageHolder").empty();

        // Get the number from the box
        var num = parseInt($("#numPics").val());
        var i = 0;

        // Print the desired number of images for each loop
        $("#while-num").text(num + 1);
        $("#do-while-num").text(num - 1);
        $("#for-num").text(num);


        /*
         Create a while loop that runs "num + 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#while-loop");
        */
        while(num + 1 > i) {
            addImageToDiv("#while-loop");
            i++;
        }

        /*
         Create a do-while loop that runs "num - 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#do-while-loop");
        */
        i = 0;
        do {
            addImageToDiv("#do-while-loop");
            i++;
        }
        while (num - 1 > i);

        /*
         Create a for loop that runs exactly "num" times.

         The body of the loop should contain the statement:
         addImageToDiv("#for-loop");
        */

        for(var x = 0; num > x; x++) {
            addImageToDiv("#for-loop");
        }





    }

    function addImageToDiv(divId) {
        var fileName = $(":radio[name='pictureSelect']:checked").val();
        // Create a new image element
        var imageElement = $("<img>");
        // Set its source attribute
        imageElement.attr("src", `img/${fileName}`);
        // Add it as a child of another element
        $(divId).append(imageElement);
    }

});