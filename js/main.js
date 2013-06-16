$(function() {
	var pi = "314159265358979323846264338327950288419716939937510";
	var e =  "271828182845904523536028747135266249775724709369995";
	var er = "0.2357111317192329313741434753596167717379838997101"
	var mmp = 5;
	var mme = 2;
	var piArray = pi.split("");
	var eArray = e.split("");
	var erArray = er.split("");
	var numRings = Math.min(piArray.length, eArray.length);
	var ringContainer = $('<div id="rings"></div>');
	var ring;
	for (var i=0; i < numRings; i++) {
		ring = $('<div class="ring"></div>');
		ring.height(piArray[i] * mmp).css('marginBottom', Math.max(erArray[i] * mme, 1) +'px');
		//ring.height(piArray[i] * mmp).css('marginBottom', '2px');
		ring.appendTo(ringContainer);
	}
	ringContainer.appendTo($('#container'));
});
