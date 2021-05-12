var slideIndex = 1;

showSlide(slideIndex);

function nextSlide(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    var index;
    var paragraphs = document.getElementsByClassName("paragraph");
    var images = document.getElementsByClassName("img");

    if (n > images.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = images.length;
    }

    for (index = 0; index < images.length; index++) {
        const notCurrenImage = images[index];
        notCurrenImage.style.display = "none";
        const notCurrentParragraph = paragraphs[index];
        notCurrentParragraph.style.display = "none";
    }

    paragraphs[slideIndex - 1].style.display = "block";
    images[slideIndex - 1].style.display = "block";
}
