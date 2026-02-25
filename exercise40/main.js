const video = document.querySelector('#main-video');
const playBtn = document.querySelector('#play-pause');
const progressBar = document.querySelector('#progress-bar');
const speedSelect = document.querySelector('#speed-select');


const playlist = [
    { 
        title: "Big Buck Bunny", 
        artist: "Blender Foundation", 
        src: "https://www.w3schools.com/html/mov_bbb.mp4" 
    },
    { 
        title: "Bear Movie", 
        artist: "Nature Clips", 
        src: "https://www.w3schools.com/html/movie.mp4" 
    },
    // Adding Video 3
    { 
        title: "Coastal View", 
        artist: "Travel Reels", 
        src: "https://vjs.zencdn.net/v/oceans.mp4" 
    },
    // Adding Video 4
    { 
        title: "Animation Test", 
        artist: "Sample Studio", 
        src: "https://media.w3.org/2010/05/sintel/trailer.mp4" 
    }
];



let currentIndex = 0;

// Toggle Play/Pause
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Sync Progress Bar
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    document.querySelector('#current-time').textContent = formatTime(video.currentTime);
});

// Seek Functionality
progressBar.addEventListener('input', () => {
    video.currentTime = (progressBar.value / 100) * video.duration;
});

// Playback Speed
speedSelect.addEventListener('change', () => {
    video.playbackRate = speedSelect.value;
});

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Initial Metadata Load
video.onloadedmetadata = () => {
    document.querySelector('#duration-time').textContent = formatTime(video.duration);
};