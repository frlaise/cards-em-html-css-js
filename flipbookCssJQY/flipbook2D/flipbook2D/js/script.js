$(function() {
    //single book
    $('#mybook').booklet();

    //multiple books with ID's
    //$('#mybook1, #mybook2').booklet();

    //multiple books with a class
    //$('.mycustombooks').booklet();
});

$(function() {
    $('#mybook').booklet({
        width:  '820',
        height: 800
    });
});

$(function() {
    $('#mybook').booklet({
        speed: 250
    });
});
    
    $(function() {
    $('#mybook').booklet({
        startingPage: 3
    });
});
    
    $(function() {
    $('#mybook').booklet({
        direction:  'LTR'
    });
});

    $(function() {
    $('#mybook').booklet({
        easing:  null,
        easeIn:  null,
        easeOut: null
    });
});
    
    $(function() {
    $('#mybook').booklet();
});

    $(function() {
    $('#mybook').booklet({
        closed: true,
        covers: true
    });
});
    