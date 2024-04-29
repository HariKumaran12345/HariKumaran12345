document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the portfolio-thumb div with id "photopill-project"
    document.getElementById('photopill-project').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Path to the video file
        var videoPath = "media/Final Demo.mp4";

        // Open the video in a new window with a specified width and height
        var newWindow = window.open(videoPath, '_blank', 'width=600,height=400');
        
        // Focus on the new window
        newWindow.focus();
    });
});

function openVideo(path) {
    // Open the video in a new window with a specified width and height
    var newWindow = window.open(path, '_blank', 'width=600,height=400');
    
    // Focus on the new window
    newWindow.focus();
}