$(document).ready(function () {

    $(".form-style label").draggable({ helper: "clone"});

    // $( "#blue" ).sortable({
    //     connectWith: "#red"
    //   }).disableSelection();


    //   $("#blue").children().draggable({
    //     connectToSortable: '#red',
    //     helper: 'clone',
    //     revertDuration: 0
    //   });
//new!!!
    $(".drop").droppable({
        drop: function (event, ui) {
            //przypisuję draggable element do zmiennej(kopia)
            let element = $(ui.draggable).clone();
            
            element.draggable ({
                connectToSortable: "#red",
                stop : function (event, ui)
                {
                  
                  element.remove();
                }
              });

              //dodaję kopię do prawej części form'a
              $(".drop form").append(element);
        }
    });

    // $("#red label").draggable({ 
    //       helper: "clone",
    //       connectToSortable: "#blue"
    // });

    // $("#blue label").draggable({ 
    //     helper: "clone",
    //     connectToSortable: "#red"
    //  });


    // console.log(y);
    // $(".form-style").droppable({
    //     drop: function (event, ui) {
    //         // let element = $(ui.draggable).clone();
    //         $(".drop form").append($(ui.draggable));
    //     }
    // });

    // $("#div1 span").draggable ({
    //     helper : "clone",
    //     stop : function (event, ui)
    //     {
    //       ui.helper.clone ().appendTo ($(this).parent ());
    //       $(this).remove ();
    //     }
    //   });


    // $("#div1 span").draggable ({
    //     helper : "clone",
    //     stop : function (event, ui)
    //     {
    //       ui.helper.clone ().appendTo ($(this).parent ());
    //     }
    //   });

    //w8
    // $(".drop").droppable({
    //     drop: function (event, ui) {
    //         let element = $(ui.draggable).clone();
    //         $(".drop form").append(element);
    //     }
    // });
    

    $("#button").click(function (e) {
        var jsonData = {};

        var formData = $("#blue").serializeArray();

        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }
        });
        let per = JSON.stringify(jsonData);
        // console.log(per);
        // console.log(y);
        $(".resolution").empty();
        $(".resolution").append(per);
    });
});
