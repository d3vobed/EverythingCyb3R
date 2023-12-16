$(".planet").click(function () {
  $('.container').attr("planet-center", this.id);
  if (this.id == "planet1") centerPlanet1();
  if (this.id == "planet2") centerPlanet2();
  if (this.id == "planet3") centerPlanet3();

});


function centerPlanet1() {
  var tl = new TimelineMax().
  to('#planet1', 1, { xPercent: 0, z: 1 }, 0).
  to('#planet2', 1, { xPercent: 140, z: -800 }, 0).
  to('#planet3', 1, { xPercent: -140, z: -800 }, 0);

}

function centerPlanet2() {
  var tl = new TimelineMax().
  to('#planet1', 1, { xPercent: -140, z: -800 }, 0).
  to('#planet2', 1, { xPercent: 0, z: 1 }, 0).
  to('#planet3', 1, { xPercent: 140, z: -800 }, 0);
}

function centerPlanet3() {
  var tl = new TimelineMax().
  to('#planet1', 1, { xPercent: 140, z: -800 }, 0).
  to('#planet2', 1, { xPercent: -140, z: -800 }, 0).
  to('#planet3', 1, { xPercent: 0, z: 1 }, 0);
}


$(function () {
  centerPlanet2();
});