var Events = new (function ()
{
	var self = this;

	self.startX;
	self.startY;


	self.move = function (e) {
		Canvas.move(e.pageX - self.startX, e.pageY - self.startY);
	};

	self.mousedown = function (e) {
		self.startX = e.pageX;
		self.startY = e.pageY;

		Input['canvas-mandelbrot'].addEventListener('mousemove', self.move);
	};

	self.mouseup = function (e) {
		Canvas.x += ((self.startX - e.pageX) * Canvas.scale) / window.innerWidth;
		Canvas.y += ((self.startY - e.pageY) * Canvas.scale) / window.innerHeight;
		Canvas.draw();

		Input['canvas-mandelbrot'].removeEventListener('mousemove', self.move);
	};

	self.init = function () {
		Input['canvas-mandelbrot'].addEventListener('mousedown', self.mousedown);
		Input['canvas-mandelbrot'].addEventListener('mouseup', self.mouseup);
	}
});