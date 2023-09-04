// Get all the video buttons
const videoButtons = document.querySelectorAll('.video-button');

// Add a click event listener to each button
videoButtons.forEach(button => {
    button.addEventListener('click', function () {
        const videoSource = this.getAttribute('data-video-source');
        changeVideo(videoSource);
    });
});

function changeVideo(videoSource) {
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSource;
    mainVideo.load();
    mainVideo.play();
}
