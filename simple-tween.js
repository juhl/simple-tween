var EASE_IN = 0;
var EASE_OUT = 1;
var EASE_IN_OUT = 2;
var EASE_OUT_IN = 3;

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

tweenBounce = function(a, b, t) {
	if (t < (1/2.75)) {
		return a + (b - a) * (7.5625 * t * t);
	} 
	else if (t < (2/2.75)) {
		return a + (b - a) * (7.5625 * (t-=(1.5/2.75)) * t + 0.75);
	} 
	else if (t < (2.5/2.75)) {
		return a + (b - a) * (7.5625 * (t-=(2.25/2.75)) * t + 0.9375);
	} 
	else {
		return a + (b - a) * (7.5625 * (t-=(2.625/2.75)) * t + 0.984375);
	}
}

function tween(func, easing, a, b, t) {
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

	return func(a, b, t);
}