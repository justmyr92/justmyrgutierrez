$(document).ready(function() {
    $(this).scrollTop(0);
    var getTop = $('.box').offset().top;
    $('.box').hide();
    $(document).scroll(function() {
        console.log($('.box').offset());
        if (getTop == $('.box').offset().top) {
            $('.box').css('display', 'none');
        } else {
            $('.box').css('display', 'block');
        }
    });
});

var toggler = document.getElementsByClassName('navbar-toggler');

$(document).ready(function() {
    var main_section = document.querySelector('.main').clientHeight;
    var about_section = document.querySelector('.about-me').clientHeight;
    var skill_section = document.querySelector('.skills').clientHeight;
    var contact_me_section = document.querySelector('.contact-me').clientHeight;
    console.log(contact_me_section)
    var navlink = document.querySelectorAll('.nav-link');
    console.log(navlink.length);
    $(document).scroll(function() {
        for (let i = 0; i < navlink.length; i++) {
            if (window.pageYOffset < main_section) {
                navlink[i].classList.remove('active');
                navlink[0].classList.add('active');
            } else if (window.pageYOffset < main_section + about_section) {
                navlink[i].classList.remove('active');
                navlink[1].classList.add('active');
            } else if (window.pageYOffset < skill_section + about_section + main_section) {
                navlink[i].classList.remove('active');
                navlink[2].classList.add('active');
            } else if (window.pageYOffset < contact_me_section + skill_section + about_section + main_section) {

                navlink[i].classList.remove('active');
                navlink[3].classList.add('active');
            }
        }
    });
    $(document).scroll(function() {
        if (window.pageYOffset > 10) {
            $('.navbar').css('background-color', '#fff');
            $('.navbar').css('padding', '15px 0');
            $('.navbar').css('box-shadow', '0 .125rem .25rem rgba(0, 0, 0, .075)');
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar').css('padding', '18px 0');
            $('.navbar').css('box-shadow', 'none');
        }
    });
});