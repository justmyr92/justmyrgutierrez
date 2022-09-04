$(document).ready(function() {
    $(this).scrollTop(0);
    var getTop = $('#topBtn').offset().top;
    $('#topBtn').hide();
    $(document).scroll(function() {
        console.log($('#topBtn').offset());
        if (getTop == $('#topBtn').offset().top) {
            $('#topBtn').hide('slow');
        } else {
            $('#topBtn').show('slow');
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
            if (window.pageYOffset <= main_section) {
                navlink[i].classList.remove('active');
                navlink[0].classList.add('active');
            } else if (window.pageYOffset <= main_section + about_section) {
                navlink[i].classList.remove('active');
                navlink[1].classList.add('active');
            } else if (window.pageYOffset <= skill_section + about_section + main_section) {
                navlink[i].classList.remove('active');
                navlink[2].classList.add('active');
            } else if (window.pageYOffset <= contact_me_section + skill_section + about_section + main_section) {

                navlink[i].classList.remove('active');
                navlink[3].classList.add('active');
            }
        }
    });
});