var Canvas = new (function ()
{
	var self = this;
	
	self.canvas;
	self.ctx;


	self.set = function (canvasId) {
		self.canvas = document.getElementById(canvasId);
		self.ctx = self.canvas.getContext('2d');
		self.canvas.width = window.innerWidth;
		self.canvas.height = window.innerHeight;
	};

	self.draw = function () {
		var scaleX = window.innerWidth / 4;
		var scaleY = window.innerHeight / 4;
		var xPos = -1;
		var yPos = 0;

		for (var x = 0, maxX = window.innerWidth; x < maxX; x += 1) {
			for (var y = 0, maxY = window.innerHeight; y < maxY; y += 1) {
				self.ctx.globalAlpha = 1 - Mandelbrot.iterate([(x / scaleX) + xPos - 2, (y / scaleY) + yPos - 2], 255) / 255;
				self.ctx.fillRect(x, y, 1, 1);
			}
		}
	};
});