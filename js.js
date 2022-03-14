$(document).ready(function() {  
    $("#head1").draggable({cursor:"move"});
    $("#head2").draggable({cursor:"help"}); 

    $("#head1").draggable({helper:"clone"});
    $("#head2").draggable({helper:function(event){return $("<div>Я элемент помощник.</div>")}});

    $("#head1").draggable({revert:true});
 });