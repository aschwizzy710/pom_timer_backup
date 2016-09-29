(function() {

  //initialize variables
  var startButton= $("#start");
  var seconds = $("#seconds");
  var minutes = $("#minutes");
  var timerInterval;
  //main functionality
  startButton.on("click", startTimer);

  //function definition
  function startTimer (){
      if(!timerInterval){
          timerInterval = setInterval(countdown, 1000);
      }
  }
  function countdown(){
    var secondsText = seconds.text ();
    var secondsTextAsNumber = parseInt(secondsText);
    var minutesText = minutes.text();
    var minutesTextAsNumber = parseInt(minutesText);

    //console.log(typeof secondsText);
    //console.log(typeof secondsTextAsNumber);
    if (minutesTextAsNumber === 0 && secondsTextAsNumber === 0){
      //stop!
      return; //temporary
    }
    if (secondsTextAsNumber === 0) {
      if (minutesTextAsNumber !== 0){
      var decreaseMinutesAsNumberByOne = minutesTextAsNumber -1;
      var padminutesTextAsNumber = pad(decreaseMinutesAsNumberByOne);
      minutes.text(padminutesTextAsNumber);
}
      seconds.text ("59");
      //then change seconds text to 59
  } else {

    var decreasedSecondsAsNumberByOne = secondsTextAsNumber - 1;
    var padSecondsTextAsNumber = pad(decreasedSecondsAsNumberByOne);
    seconds.text(padSecondsTextAsNumber);
  }
    // var secondsValue = parseInt(seconds.text());
    // console.log(secondsValue);
    // seconds.text(pad(secondsValue - 1));
    //transforms letter to text
  }

    function pad (num){
        if(num < 10){
          //spit out number with a leading 0
          return "0" + num;

      } else {
        //spit out the original number
        return num;
      }
    }
}());
