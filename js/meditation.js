function changeVideo(videoSrc, title, thumbnail) {
    const videoPlayer = document.getElementById('video-player');
    const currentTitle = document.getElementById('current-title');

    videoPlayer.src = videoSrc;
    currentTitle.textContent = title;

    // Load the new video
    videoPlayer.load();
    videoPlayer.play();
}

function viewMoreVideos() {
    alert("Loading more videos..."); // Replace with your actual logic
}
