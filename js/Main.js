window.addEventListener("load", function ()
{
	Canvas.set('canvas-mandelbrot');
	Canvas.x = -1.75;
	Canvas.y = 0;
	Canvas.scale = 0.1;
	Canvas.iterations = 256;
	Canvas.draw(-1.75, 0, 0.1, 256);
	Events.init();
});