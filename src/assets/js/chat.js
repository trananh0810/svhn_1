import $ from 'jquery';

$(function () {
    $('#sec-content>.container>#div-mess>#div-list-mess .div-mess-item>.div-mess-item-content>.content').click(function () {
        let itemStatus = $(this).closest('.div-mess-item-content').find('.status.hide');

        if (itemStatus.length > 0) {
            itemStatus.removeClass('hide');
        } else {
            $(this).closest('.div-mess-item-content').find('.status').addClass('hide');
        }

    });

    tataFindFriend();

    scrollBottomChat();
})

function tataFindFriend() {
    let btnFindFriend = $('#btn-find-friend');

    setInterval(function () {
        btnFindFriend.addClass('tada');

        setTimeout(function () {
            btnFindFriend.removeClass('tada');
        }, 1000)
    }, 2000);
}

function scrollBottomChat() {
    setInterval(function () {
        $('#div-list-mess').scrollTop($('#div-list-mess').height());
    }, 500)

}