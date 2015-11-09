var Input = new (function () {
	var self = this;


	self.load = function () {
		var args = Array.prototype.slice.call(arguments);

		args.forEach(function (arg) {
			self[arg] = document.getElementById(arg);
		});
	};

	self.load('canvas-mandelbrot');
});