import './index.scss';
import $ from 'jquery';

$(function(){
    var links = $('.slide__menu, .close_menu');
    var menu = $('.header-nav');

    links.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('active');
    });

    menu.on('click', 'a', () => {
        menu.removeClass('active');
    })
});

$(document).ready(function(){
    $(".header-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});
