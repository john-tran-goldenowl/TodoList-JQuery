$(document).ready(function() {
    stt = 0;
    $("#addtolist").click(function() {
        var title = $('#title').val();
        var content = $('#content').val();
        $('.items').append(`<div class="item">
        <div class="absolue">
            <i id="finish" class="fas fa-check-circle"></i>
            <i  id="delete" class="far fa-trash-alt"></i>
        </div>
        <h3>${title}</h3>
        <p>${content} </p>
    </div>`);

        $('#title').val('');
        $('#content').val('');

        $(".items").on('click', '#delete', function() {
            $(this).parent().parent().fadeOut(300);
        });
        $(".items").on('click', '#finish', function() {
            $(this).parent().parent().css("background-color", "#4BB543");;
            $(this).parent().parent().css("color", "white");
            $(this).fadeOut(100);
        });

    });



});