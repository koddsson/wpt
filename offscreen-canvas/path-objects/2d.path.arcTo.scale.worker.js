// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arcTo.scale
// Description:arcTo scales the curve, not just the control points
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("arcTo scales the curve, not just the control points");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.translate(100, 0);
ctx.scale(0.1, 1);
ctx.arcTo(50, 50, 50, 0, 50);
ctx.lineTo(-1000, 0);
ctx.fill();
_assertPixel(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,0, 0,255,0,255, "50,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,25, 0,255,0,255, "0,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,25, 0,255,0,255, "99,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,49, 0,255,0,255, "50,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255");

t.done();

});
done();