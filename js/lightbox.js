$.each($('.img-expandable'), function(i, val){
    var s = '';
    if(i == 0)
    {
        s = '<div class="item img-expanded active"'
    } else {
        s = '<div class="item img-expanded"';
    }
    s += '><img class="img-responsive img-full" src="' + $(val).attr('expand') + '"><p>' + $(val).parent().siblings('.figure-caption').text() + '</p></div>';
    $(val).attr('expand-id', i);
    $('#main-carousel').append(s)
});

$('.img-expand-button').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)

    var targetID = $(this).find('img').attr('expand-id')
    $.each($('.img-expanded'), function(i, val){
        if(i == targetID)
        {
            $(val).addClass("active");
        } else {
            $(val).removeClass("active");
        }
    });
});
