<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0/jquery.counterup.min.js"></script>
<script>

//countdown timer
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let deadline = document.getElementById("countdownDate").innerText//"Sept 21, 2023 23:59:00",
  console.log(deadline);
        countDown = new Date(deadline).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
           headline = document.getElementById("headline");
		document.getElementById("days").innerText = 0;
		document.getElementById("hours").innerText = 0;
		document.getElementById("minutes").innerText = 0;
		document.getElementById("seconds").innerText = 0;
           //countdown = document.getElementById("countdown");
           //content = document.getElementById("content");

          headline.innerText = "THE CONFERENCE IS ONGOING!";
		document.getElementById("btn_store").disabled = true
          //countdown.style.display = "none";
          //content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
    </script>