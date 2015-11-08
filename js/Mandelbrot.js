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
		var coord = self.point([0, 0], z);
		var distance;

		for (var i = 0; i < max; i += 1) {
			coord = self.point(coord, z);
			distance = Math.sqrt(Math.pow(coord[0], 2) + Math.pow(coord[1], 2));

			if (distance > 2) {
				return i;
			}
		}

		return max;
	};
});