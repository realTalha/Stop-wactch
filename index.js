const countDownElement = document.getElementById("countDown");
      const resetValueElement = document.querySelector(".resetValue");
      let startcount = 0;

      const startTimer = () => {
         intervalID = setInterval(() => {
            countDownElement.innerText = startcount++ ;
        },1000);
      }

      const stopTimer = () => {
        clearInterval(intervalID);
      }

      const resetTimer = () => {
        startcount = 0;
        countDownElement.innerText = startcount ;
        clearInterval(intervalID);
      }

      const showStopValue = () =>{
        const newPara = document.createElement("p");
        newPara.innerText = `The stop time is ${startcount - 1}`;
        resetValueElement.append(newPara);
      };
      const clearTimeValue = () => {
        resetValueElement.innerHTML = "";
      }



      document.querySelector(".start_btn").addEventListener("click", startTimer);

      document.querySelector(".reset_btn").addEventListener("click", resetTimer);

      document.querySelector(".stop_btn").addEventListener("click", stopTimer);

      document.querySelector(".time_btn").addEventListener("click", showStopValue);

      document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);