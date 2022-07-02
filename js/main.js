$(function() {
    // To-Top Button
    function showToTopBtn() {
        var scroll = $(window).scrollTop();
        var viewHeight = $(window).height();
        if(scroll>viewHeight) {
            $("#toTop").addClass('showTopbtn');
        } else {
            if($("#toTop").hasClass('showTopbtn')) {
                $("#toTop").removeClass('showTopbtn');
            }
        }
    }
    $(window).on('load', function() {
        showToTopBtn();
    });
    $(window).scroll(function() {
        showToTopBtn();
    });
    // Animate When To-Top btn
    $("#toTop").click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 50, "linear");
        return false;
    });

    // Animate When under-fv btn
    $('#scrollbtn').click(function() {
        var underFv = $('#about').offset().top;
        $('body, html').animate({
            scrollTop: underFv
        }, 500, "linear");
        return false;
    });

    // Humberger Menu
    function humbergerMenu(menu) {
        /* Humberger Menu bars */
        if($(menu).hasClass('open')) {
            $('#sp-menu').css('display', 'none');
            $(menu).removeClass('open');
            $('.humberger-wrap').css({
                position:'relative',
                right: 'unset',
            });
        } else {
            $('#sp-menu').css('display', 'block');
            $(menu).addClass('open');
            $('.humberger-wrap').css({
                position:'fixed',
                right: '15px',
            });
        }
    }
    $('#humber').click(function() {
        humbergerMenu(this);
    });
    $(".page-links a[href*='#']").click(function() {
        var humber = $('#humber');
        if($(humber).hasClass('open')) {
            humbergerMenu($(humber));
        }
    });
    $(window).on('resize', function() {
        var windowW = $(window).width();
        if(windowW >= 992) {
            $('#sp-menu').css('display', 'block');
        } else {
            $('#sp-menu').css('display', 'none');
            if($('#humber').hasClass('open')) {
                $('#humber').removeClass('open');
            }
        }
    });

    // inside page links
    $(".page-links a[href*='#']").click(function() {
        var linkPushed = $(this).attr('href');
        var pos = $(linkPushed).offset().top;
        $('body, html').animate({
            scrollTop: pos
        }, 50, "linear");
        return false;
    })

    // Contact Form Validations
    $('#form-inquiry').validate({
        rules: {
            "entry.1672295369": {
                required: true
            },
            "entry.944752399": {
                required: true,
                email: true
            },
            "entry.335258978": {
                required: true
            }
        },
        messages: {
            "entry.1672295369": {
                required: '※名前は入力必須です。'
            },
            "entry.944752399": {
                required: '※メールアドレスは入力必須です。',
                email: "※メールアドレス形式で入力して下さい。"
            },
            "entry.335258978": {
                required: '※メッセージは入力必須です。'
            }
        }
        // errorPlacement: function(err, elem) {
        //     err.appendTo($('#outputMessage'));
        // }
    });
});
