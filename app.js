App = function() {
    var canvas;
    var ctx;
    var func = tweenLinear;
    var easing = EASE_IN;

    function main() {
        canvas = document.getElementById("canvas");
        if (!canvas.getContext) {
            alert("Couldn't get canvas object !");
        }

        // Main canvas context
        ctx = canvas.getContext("2d");

        // Transform coordinate system to y-axis is up
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);

        updateScreen();
    }

    function updateScreen() {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.beginPath();
        ctx.moveTo(0, 120);
        ctx.lineTo(800, 120);
        ctx.moveTo(0, 360);
        ctx.lineTo(800, 360);
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 480);
        ctx.moveTo(700, 0);
        ctx.lineTo(700, 480);
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 1;
        ctx.lineCap = "butt";
        ctx.stroke();

        ctx.beginPath();
        var y = tween(func, easing, 0, 400, 0);
        ctx.moveTo(100, y + 120);

        for (var t = 0; t < 1000; t++) {
            y = tween(func, easing, 0, 240, t / 1000);
            ctx.lineTo(100 + 600 * (t / 1000), y + 120);
        }
        
        ctx.strokeStyle = "#F00";
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.stroke();
    }

    function onchanged_method(value) {
        switch (value) {
            case 0: func = tweenLinear; break;
            case 1: func = tweenQuadratic; break;
            case 2: func = tweenCubic; break;
            case 3: func = tweenQuartic; break;
            case 4: func = tweenQuintic; break;
            case 5: func = tweenSinusoidal; break;
            case 6: func = tweenExponential; break;
            case 7: func = tweenCircular; break;
            case 8: func = tweenElastic; break;
            case 9: func = tweenBack; break;
            case 10: func = tweenBounce; break;
        }
        updateScreen();
    }

    function onchanged_easing(value) {
        easing = value;
        updateScreen();
    }    

    return { main: main, 
        onchanged_method: onchanged_method,
        onchanged_easing: onchanged_easing
    };
} ();