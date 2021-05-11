var slideIndex = 1;

showSlide(slideIndex);

function nextSlide(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    var index;
    var paragraphs = document.getElementsByClassName("paragraph");
    var images = document.getElementsByClassName("img");

    if (n > paragraphs.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = paragraphs.length;
    }
    for (index = 0; index < paragraphs.length; index++) {
        const notCurrentSlide = paragraphs[index];
        const notCurrenImage = paragraphs[index];
        notCurrentSlide.style.display = "none";
        notCurrenImage.style.display = "none";
    }
    paragraphs[slideIndex - 1].style.display = "block";
    images[slideIndex - 1].style.display = "flex";
}
