var pressed;

var fired = false;
var endPress = false;

$("body").on('keydown', function(event) {
    if (event.code === "KeyE" && !fired) {
        pressed = setTimeout(function() {
            console.log('1sec');
            endPress = true;
        }, 1000);
        document.getElementById('progressCircle').style.animation="offsettozero 1s linear forwards";
        fired = true;
    }
    if (event.code === "KeyR") {
        clearTimeout(pressed);
        fired = false;
    }
});

$("body").on('keyup', function(event) {
    if (event.code === "KeyE" && fired && !endPress) {
        clearTimeout(pressed);
        document.getElementById('progressCircle').style.animation="";
        fired = false;
    }
});
