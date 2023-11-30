$(document).ready(function () {
    const imageGrid = $("#imageGrid");
    const images = [
        "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg",
        "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg",
        "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg"
    ];

    const totalImages = images.length;
    let currentIndex = 0;
    let interval;

    function startCarousel() {
        interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }, 900); // Intervalo de 1 segundo
    }

    function updateCarousel() {
        imageGrid.empty();
        for (let i = 0; i < Math.min(totalImages, 4); i++) {
            const imgIndex = (currentIndex + i) % totalImages;
            const imgElement = $("<img>", {
                src: images[imgIndex],
                alt: "Image",
                class: "image"
            });
            imageGrid.append(imgElement);
        }
    }

    startCarousel();

    $(".right-arrow").mouseenter(function () {
        clearInterval(interval);
    }).mouseleave(function () {
        startCarousel();
    });
});
