var Events = new (function () {
	var self = this;


	self.move = function (e) {
		Canvas.move(e.pageX, e.pageY);
	};

	self.init = function () {
		Input['canvas-mandelbrot'].addEventListener('mousemove', self.move);
	}
});