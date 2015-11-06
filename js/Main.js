function mandelbrotPoint(a, b, aF, bF) {
	return [
		Math.pow(a, 2) - Math.pow(b, 2) + aF,
		2 * a * b + bF
	]
}


function mandelbrotIteration(a, b, max) {
	var coord = mandelbrotPoint(a, b, a, b);

	for (var i = 0; i < max; i += 1) {
		coord = mandelbrotPoint(coord[0], coord[1], a, b);

		if (coord[0] > 2 || coord[1] > 2) {
			return false;
		}
	}

	return true;
}


window.addEventListener("load", function ()
{
	console.log(mandelbrotIteration(0.12, 0.12, 100));
});