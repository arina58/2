$(document).ready(function() {  
    $("#el1").draggable();
    $("#el1").resizable();

    $("#sort1").sortable();

    $("#el2").draggable();
    $("#el3").draggable();
    $("#drop1").droppable({
        accept:"#el2, #el3",
        over:function(event, ui){
            let el = ui.draggable
            el.css("background-color","#c4f66f");
        },
        drop:function(event, ui){
           let el = ui.draggable
           el.hide()
        }
        });
     $("#drop2").droppable({
        accept:"#el3",
        drop:function(){
           $("#el3").css("display","none");
           $("#drop2").css("background-color","#c4f66f");
        }
     });
 });