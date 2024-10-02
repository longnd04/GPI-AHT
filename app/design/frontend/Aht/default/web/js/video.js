document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.image-play').addEventListener('click', function () {
        this.style.display = 'none';
        var iframe = document.querySelector('.video-ytb iframe');
        iframe.src += "?autoplay=1&mute=1";
    });
});
