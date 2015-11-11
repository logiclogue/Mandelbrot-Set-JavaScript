window.addEventListener("load", function ()
{
	Canvas.set('canvas-mandelbrot');
	Canvas.x = -1.75;
	Canvas.y = 0;
	Canvas.scale = 1;
	Canvas.iterations = 256;
	Canvas.draw();
	Events.init();
});