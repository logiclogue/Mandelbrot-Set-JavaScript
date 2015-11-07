var Mandelbrot = new (function ()
{
	var self = this;


	self.point = function (z, c) {
		return [
			Math.pow(z[0], 2) - Math.pow(z[1], 2) + c[0],
			2 * z[0] * z[1] + c[1]
		];
	};

	self.iterate = function (z, max) {
		var coord = self.point(z, z);

		for (var i = 0; i < max; i += 1) {
			coord = self.point(coord, z);

			if (coord[0] >= 2 || coord[0] <= -2 || coord[1] >= 2 || coord[1] <= -2) {
				return i;
			}
		}

		return max;
	};
});