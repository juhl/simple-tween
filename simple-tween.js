var EASE_IN = 0;
var EASE_OUT = 1;
var EASE_IN_OUT = 2;
var EASE_OUT_IN = 3;

var TWEEN_LINEAR = 0;
var TWEEN_QUADRATIC = 1;
var TWEEN_CUBIC = 2;
var TWEEN_QUARTIC = 3;
var TWEEN_QUINTIC = 4;
var TWEEN_SINUSOIDAL = 5;
var TWEEN_EXPONENTIAL = 6;
var TWEEN_CIRCULAR = 7;
var TWEEN_ELASTIC = 8;
var TWEEN_BACK = 9;

tweenLinear = function(a, b, t) {
	return a + (b - a) * t;
}

tweenQuadratic = function(a, b, t) {
	return a + (b - a) * t * t;
}

tweenCubic = function(a, b, t) {
	return a + (b - a) * t * t * t;
}

tweenQuartic = function(a, b, t) {
	return a + (b - a) * t * t * t * t;
}

tweenQuintic = function(a, b, t) {
	return a + (b - a) * t * t * t * t * t;
}

tweenSinusoidal = function(a, b, t) {
	return a + (b - a) * (1 - Math.cos(Math.PI * 0.5 * t));
}

tweenExponential = function(a, b, t) {
	return a + (b - a) * Math.pow(2, 10 * (t - 1));
}

tweenCircular = function(a, b, t) {
	return a + (b - a) * (1 - Math.sqrt(1 - t * t));
}

tweenElastic = function(a, b, t) {
	var w = 8 * Math.PI;
	var z = 0.32;
	var damping = Math.exp(-z * w * (1 - t));
	var periodic = w * Math.sqrt(1 - z * z) * (1 - t);
	return a + (b - a) * damping * Math.cos(periodic);
}

tweenBack = function(a, b, t) {
	var e = 2.71828;
	return a + (b - a) * t * t * (e * t + t - e);
}

function tween(method, easing, a, b, t) {
	if (easing == EASE_OUT || (easing == EASE_IN_OUT && t > 0.5) || (easing == EASE_OUT_IN && t < 0.5)) {
		var temp = a;
		a = b;
		b = temp;
		t = 1 - t;
	}

	if (easing == EASE_IN_OUT || easing == EASE_OUT_IN) {
		if (t < 0.5) {
			b = (a + b) * 0.5;
			t *= 2;
		}
		else {
			a = (a + b) * 0.5;
			t = (t - 0.5) * 2;
		}
	}

	switch (method) {
		case 0: return tweenLinear(a, b, t);
		case 1: return tweenQuadratic(a, b, t);
		case 2: return tweenCubic(a, b, t);
		case 3: return tweenQuartic(a, b, t);
		case 4: return tweenQuintic(a, b, t);
		case 5: return tweenSinusoidal(a, b, t);
		case 6: return tweenExponential(a, b, t);
		case 7: return tweenCircular(a, b, t);
		case 8: return tweenElastic(a, b, t);
		case 9: return tweenBack(a, b, t);
	}

	return a;
}