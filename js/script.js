var pressed;

var fired = false;
var endPress = false;
var swapSuccess = false;
var start = false;

var timer;

var elkeyE = document.getElementById('keyE');

elkeyE.requestPointerLock = elkeyE.requestPointerLock || elkeyE.mozRequestPointerLock;

elkeyE.onclick = function() {
    elkeyE.requestPointerLock();
    start = true;
};

$("body").on('keydown', function(event) {
    // console.log(event.code);
    if (event.code === "KeyE" && !fired && start) {
        pressed = setTimeout(function() {
            $('#loot_box_div').show();
            timer = Date.now();
            document.exitPointerLock();
            endPress = true;
        }, 500);
        document.getElementById('progressCircle').style.animation="offsettozero 0.5s linear forwards";
        fired = true;
    }
    if (event.code === "KeyR") {
        clearTimeout(pressed);
        $('#loot_box_div').hide();
        document.getElementById('progressCircle').style.animation="";
        fired = false;
        endPress = false;
        $('#armorValid').hide();
        swapSuccess = false;
        $('#result').hide();
        start = false;
    }
    if (event.code === "Escape" && swapSuccess) {
        var delta = ((Date.now() - timer) / 1000);
        document.getElementById("timer").innerHTML = delta;
        $('#result').show();
    }
});

$("body").on('keyup', function(event) {
    if (event.code === "KeyE" && fired && !endPress) {
        clearTimeout(pressed);
        document.getElementById('progressCircle').style.animation="";
        fired = false;
        endPress = false;
        $('#armorValid').hide();
    }
});

$("#armorInvald").on('click', function(event) {
    $('#armorValid').show();
    swapSuccess = true;
    event.preventDefault();
});
