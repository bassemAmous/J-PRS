// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="counterDown"
  document.getElementById("counterDown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  document.getElementById("counterDown2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counterDown").innerHTML = "EXPIRED";
    document.getElementById("counterDown2").innerHTML = "EXPIRED";
  }
}, 1000);
