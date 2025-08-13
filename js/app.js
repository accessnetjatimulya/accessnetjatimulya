

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});


$('.hero-slider').on('changed.owl.carousel', function(event) {
    let currentSlide = $('.owl-item').eq(event.item.index).find('.slide');
    let text = currentSlide.find('.slide-text');

    // Reset semua slide
    $('.slide').removeClass('fade-in');
    $('.slide-text').removeClass('slide-in');

    // Delay background muncul
    setTimeout(() => {
        currentSlide.addClass('fade-in');

        // Delay lagi untuk teks masuk
        setTimeout(() => {
            text.addClass('slide-in');
        }, 1000); // teks muncul setelah background
    }, 100); // background mulai fadeIn
});

// Trigger animasi untuk slide pertama
$('.hero-slider').trigger('changed.owl.carousel', { item: { index: 0 } });



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".produk-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200); // delay antar kartu
            }
        });
    }, { threshold: 0.2 }); // muncul saat 20% terlihat

    cards.forEach(card => observer.observe(card));
});

