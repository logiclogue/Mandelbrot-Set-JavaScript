var Canvas = new (function ()
{
	var self = this;
	
	self.canvas;
	self.ctx;
	self.imgData;

	self.x = 0;
	self.y = 0;
	self.scale = 4;
	self.iterations = 10;


	function drawCanvas() {
		self.imgData = self.ctx.getImageData(0, 0, self.canvas.width, self.canvas.height);
	}


	self.set = function (canvasId) {
		self.canvas = document.getElementById(canvasId);
		self.ctx = self.canvas.getContext('2d');
		self.canvas.width = window.innerWidth;
		self.canvas.height = window.innerHeight;
		self.ctx.imageSmoothingEnabled = true;
	};

	self.draw = function (x, y, scale, iterations) {
		x = x || self.x;
		y = y || self.y;
		scale = scale || self.scale;
		iterations = iterations || self.iterations;
		
		var scaleX = self.canvas.height / scale;
		var scaleY = self.canvas.height / scale;
		var xPos = x - scale / 2;
		var yPos = y - scale / 2;
		var colour;
		var rgb_r;
		var rgb_g;
		var rgb_b;
		var rgb_a;

		for (var x = 0, maxX = self.canvas.width; x < maxX; x += 1) {
			for (var y = 0, maxY = self.canvas.height; y < maxY; y += 1) {
				colour = Math.floor(Mandelbrot.iterate([(x / scaleX) + xPos, (y / scaleY) + yPos], iterations) * 256);
				rgb_g = Math.floor((colour & 3) * (256 / 3));
				rgb_b = Math.floor((colour & 12) * (256 / 12));
				rgb_r = Math.floor((colour & 48) * (256 / 12));
				rgb_a = (colour & 192) * (1 / 192);

				self.ctx.fillStyle = 'rgba(' + rgb_r + ', ' + rgb_g + ', ' + rgb_b + ', 1.0)';
				self.ctx.fillRect(x, y, 1, 1);
			}
		}

		drawCanvas();
	};

	self.move = function (x, y) {
		self.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
		self.ctx.putImageData(self.imgData, x, y);
	};
});