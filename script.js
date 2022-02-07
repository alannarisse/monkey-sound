$("#monkey-button").click(function () {
  $("#monkey-sound")[0].play()
})
$("#taylor-button").click(function () {
  var tayAudio = $("#taytay")[0]
  if (tayAudio.paused == true) {
    $("#taytay")[0].play()
    $("#taylor-button").html("Pause Taylor")

    //$("audio#pop")[0].currentTime = 0
  } else {
    $("#taytay")[0].pause()
    $("#taylor-button").html("Play Taylor")
  }
})

$("#reset-button").click(function () {
  $("#taytay")[0].currentTime = 0
  $("#taytay")[0].play()
})

// $('audio#pop')[0].pause()
// $('audio#pop')[0].currentTime = 0
