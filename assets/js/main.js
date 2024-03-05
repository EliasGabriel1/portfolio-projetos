const cursorbgblack = document.querySelectorAll('.cursor-bgblack');
const cursorbgwhite = document.querySelectorAll('.cursor-bgwhite');

cursorbgwhite.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        document.querySelector(".cursor-follower").style.border = "0.5px solid #000000";
        document.querySelector(".cursor").style.backgroundColor = "#50c878";
    });

    // el.addEventListener('mouseleave', (e) => {
    //     document.querySelector(".cursor-follower").style.backgroundColor = "transparent";
    //     document.querySelector(".cursor-follower").style.border = "0.5px solid #50c878";
    //     document.querySelector(".cursor").style.backgroundColor = "#50c878";
    // });
})

cursorbgblack.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        document.querySelector(".cursor-follower").style.backgroundColor = "transparent";
        document.querySelector(".cursor-follower").style.border = "0.5px solid #50c878";
        document.querySelector(".cursor").style.backgroundColor = "#50c878";
    });
    el.addEventListener('mouseleave', (e) => {
        document.querySelector(".cursor-follower").style.border = "0.5px solid #000000";
        document.querySelector(".cursor").style.backgroundColor = "#50c878";
    });
})

// var case1=document.querySelector(".card-see-more.case-1")

// case1.addEventListener('mousemove', (e) => {
//     console.log("sla")
// });

$(window).on("load", function () {

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const uperboll = document.querySelectorAll('.box-projetos figure img');
    const uperbollarrowup = document.querySelectorAll('.arrow-link');
    const uperbollprojetos = document.querySelectorAll('.projetos picture');


    var posX = 0, posY = 0, mouseX = "0", mouseY = "0";

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX>innerWidth-50?innerWidth-50:e.pageX;
        mouseY = e.pageY
    });

    uperboll.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
            document.querySelector(".cursor").style.backgroundColor = "transparent";
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        })
    })

    uperbollprojetos.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
            document.querySelector(".cursor").style.backgroundColor = "transparent";
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        })
    })

    uperbollarrowup.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('arrowup');
            follower.classList.add('arrowup');
            document.querySelector(".cursor").style.backgroundColor = "transparent";
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('arrowup');
            follower.classList.remove('arrowup');
        })
    })


    // =================================================== MOUSE MOVEMENT END =====================================

    $(".drop-brand").on("click", function () {
        if ($(this.parentNode).find(".content-dropdown").hasClass("active")) {
            $(".active").addClass("drop-slow")
            setTimeout(function () {
                $(".drop-slow").addClass("d-hidden")
            }, 500);
            $(".active").removeClass("active")
            $(this).removeClass("toggle-drop")
        } else if ($(".content-dropdown").hasClass("active") || !$(this.parentNode).find(".content-dropdown").hasClass("active")) {
            $(".active").addClass("drop-slow")
            setTimeout(function () {
                $(".drop-slow").addClass("d-hidden")
            }, 500);
            $(".content-dropdown").removeClass("active")
            $(".toggle-drop").removeClass("toggle-drop")
            $(this).addClass("toggle-drop")
            $(this.parentNode).find(".content-dropdown").addClass('active');
            $(this.parentNode).find(".content-dropdown").removeClass('d-hidden');
            $(this.parentNode).find(".content-dropdown").removeClass('drop-slow');
        }
    })


    

$( document ).ready(function() {
    embreve();
    embreve2();
})

function embreve(){
    mouseover(".projetos .case-1");
    $("picture" ).mouseout(function() {$(".cursor").removeClass("case-1")});
}

function mouseover(classe){
    $(classe).mouseover(function() {$(".cursor").toggleClass("case-1")});
}

function embreve2(){
    mouseover2(".projetos .case-2");
    $("picture" ).mouseout(function() {$(".cursor").removeClass("case-2")});
}

function mouseover2(classe){
    $(classe).mouseover(function() {$(".cursor").toggleClass("case-2")});
}



});