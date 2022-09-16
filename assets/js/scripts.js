$(document).ready(function() {


    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".accordion").on("click", ".cidade", function(e) {
            $(this).next(".bairro").not(":animated").slideToggle();
        });
    }

 
    $(".filtroBusca").click(function() {
        $(".filtroCampos, .hideBusca, .afterBusca h2").toggleClass("display-none");
        $(".afterBusca").toggleClass("tamanhoForm");
        $(".select").toggleClass("espacamentoForm");
        $(".espacamentoImg").toggleClass("espacamentoImgForm display-none");
        $(".submit").toggleClass("submitAfterForm");
    });

    if (windowWidth < 768) {
        $(".sliderVitrineImoveis").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    } else {
        $(".sliderVitrineImoveis").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    }
});
var windowWidth = $(window).width();

function sliderCards() {
    if (windowWidth < 768) {
        $(".sliderCards").not(".slick-initialized").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        });
    }
}

function sliderStatus() {
    if (windowWidth < 768) {
        $(".sliderStatus").not(".slick-initialized").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            variableWidth: true,
            cssEase: "linear",
        });
    }
}

function videoPlaylistHome() {
    var boxVideo = document.getElementsByClassName("videoYoutubeHome");

    for (var i = 0; i < boxVideo.length; i++) {
        boxVideo[i].addEventListener("click", function() {
            var idVideo = this.getAttribute("data-embed");
            var videoUrl = "https://www.youtube.com/embed/" + idVideo;

            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", 0);
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", videoUrl);

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
}

(function() {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


$('.accordion h3.tab-title').click(function (j) {
    var dropDown = $(this).find('.tab-content');
    $(this).closest('.accordion').find('.tab-content').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('h3.tab-title').next().css("display", "none");

    } else {
        $(this).closest('.accordion').find('h3.tab-title.active').removeClass('active');
        $(this).addClass('active');
        $('h3.tab-title.active').next().css("display", "block");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
});
