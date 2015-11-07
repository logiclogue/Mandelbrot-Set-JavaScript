window.addEventListener("load", function ()
{
	console.log(Mandelbrot.iterate([0.25, 0], 100));

	Canvas.set('canvas-mandelbrot');
	Canvas.draw();
});