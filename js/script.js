document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the portfolio-thumb div with id "photopill-project"
    document.getElementById('photopill-project').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Path to the video file
        var videoPath = "media/Final Demo.mp4";

        // Open the video in a new window with a specified width and height
        openVideo(videoPath);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the portfolio-thumb div with id "photopill-project"
    document.getElementById('shotmap-project').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Path to the video file
        var videoPath = "media/shotMap.mp4";

        // Focus on the new window
        openVideo(videoPath);
    });
});

function openVideo(path) {
    /*
    var width = 800;
    var height = 600;

    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;
    
    var newWindow = window.open(path, '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
    
    newWindow.focus();*/ //code for opening in same window
    window.open(path,'_blank')
}