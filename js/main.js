$(function() {
	rings.init();
	rings.showColoredRings();
	rings.setupButtons();
});
var rings = {
	pi: 	"314159265358979323846264338327950288419716939937510",
	e: 		"271828182845904523536028747135266249775724709369995",
	primes: "012357111317192329313741434753596167717379838997101",
	colors: ["#FB9B00", "#FBE700", "#BEB32E", "#FDF270", "#F50012", "#A1000C", "#FA6F79", "#0D4FA5", "#04326D", "#6695D1"],
	piArray: [],
	eArray: [],
	primesArray: [],
	ringHtMultiplier: 5,
	spaceHtMultiplier: 2,
	numRings: 0,
	ringContainer: "",
	init: function () {
		this.piArray = this.pi.split("");
		this.eArray = this.e.split("");
		this.primesArray = this.primes.split("");
		this.numRings = Math.min(this.piArray.length, this.eArray.length, this.primesArray.length);
		this.ringContainer = $('<div id="rings"></div>');
	},
	setupButtons: function () {
		$('.clr').on('click', rings.showColoredRings);
		$('.grey').on('click', rings.showGreyRings);
		$('.pi-primes').on('click', rings.showPiPrimesRings);
	},
	generateRings: function (ht, space, op, clr) {
		var ring = $('<div class="ring"></div>');
		ring.height(ht).css({
			'marginBottom': space + 'px',
			'opacity': op,
			'backgroundColor': clr
		});
		ring.appendTo(this.ringContainer);
	},
	showGreyRings: function() {
		console.log('show grey rings');
		$('#rings').empty();
		for (var i=0; i < rings.numRings; i++) {
			var ht = rings.piArray[i] * rings.ringHtMultiplier;
			var space = Math.max(rings.primesArray[i] * rings.spaceHtMultiplier, 1);
			var opacity = rings.piArray[i] * 0.1;
			rings.generateRings(20, space, opacity, "#000000");
		}
		rings.ringContainer.appendTo($('#container'));	
	},
	showColoredRings: function() {
		$('#rings').empty();
		for (var i=0; i < rings.numRings; i++) {
			var ht = rings.piArray[i] * rings.ringHtMultiplier;
			var space = Math.max(rings.primesArray[i] * rings.spaceHtMultiplier, 1);
			var color = rings.colors[rings.piArray[i]];
			rings.generateRings(20, space, 1, color);
		}
		rings.ringContainer.appendTo($('#container'));	
	},
	showPiPrimesRings: function() {
		$('#rings').empty();
		for (var i=0; i < rings.numRings; i++) {
			var ht = rings.piArray[i] * rings.ringHtMultiplier;
			var space = Math.max(rings.primesArray[i] * rings.spaceHtMultiplier, 1);
			var color = rings.colors[rings.piArray[i]];
			rings.generateRings(ht, space, 1, "#000000");
		}
		rings.ringContainer.appendTo($('#container'));	
	},
}