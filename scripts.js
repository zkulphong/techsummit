function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
        };
}

function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                        clearInterval(timeinterval);
                }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
}

function showImages(el) {
        var windowHeight = jQuery(window).height();
        $(el).each(function () {
                var thisPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (topOfWindow + windowHeight - 200 > thisPos) {
                        $(this).addClass("fadeIn");
                }
        });
}

var deadline = new Date(2019, 3, 24, 8, 0, 0, 0);
initializeClock('clockdiv', deadline);

$(document).ready(function () {
        var y = $(window).scrollTop();  //trigger fade in if refresh mid page
        $(window).scrollTop(y+1);
        $(window).scrollTop(y-1);

        $('#toRegister').click(function () {
                var currentScrollHeight = $(window).scrollTop();
                var elementOffset = $('#about-page').offset().top;
                var distance = Math.abs(currentScrollHeight - elementOffset);
                $('html, body').animate({
                        scrollTop: $('#about-page').offset().top
                }, 1000);
        });
        $('#toSpeakers').click(function () {
                var currentScrollHeight = $(window).scrollTop();
                var elementOffset = $('#speakers-page').offset().top;
                var distance = Math.abs(currentScrollHeight - elementOffset);
                $('html, body').animate({
                        scrollTop: $('#speakers-page').offset().top
                }, 1000);
        });
        $('#toSchedule').click(function () {
                var currentScrollHeight = $(window).scrollTop();
                var elementOffset = $('#schedule-page').offset().top;
                var distance = Math.abs(currentScrollHeight - elementOffset);
                $('html, body').animate({
                        scrollTop: $('#schedule-page').offset().top
                }, 1000);
        });
        $('#toTeam').click(function () {
                var currentScrollHeight = $(window).scrollTop();
                var elementOffset = $('#team-page').offset().top;
                var distance = Math.abs(currentScrollHeight - elementOffset);
                $('html, body').animate({
                        scrollTop: $('#team-page').offset().top
                }, 1000);
        });
        $('#toContact').click(function () {
                var currentScrollHeight = $(window).scrollTop();
                var elementOffset = $('#contact-page').offset().top;
                var distance = Math.abs(currentScrollHeight - elementOffset);
                $('html, body').animate({
                        scrollTop: $('#contact-page').offset().top
                }, 1000);
        });

        $(window).scroll(function () {
                showImages('#about-title');
                showImages('#about-text');
                showImages('#about-button');
                showImages('#schedule-title');
                showImages('#schedule-text');
                showImages('#speakers-title');
                showImages('#speakers-text');
                showImages('#team-title');
                showImages('.row.people')
                showImages('#contact-content')
        });

        

});