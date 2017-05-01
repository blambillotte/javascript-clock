


const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hand = document.querySelector('.hand')


function setDate() {
  const now = new Date();

  //Second hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //Minute hand
  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  //Hour hand
  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;


  //Prevent second hand from flipping all the way around around
  if (seconds == 0 ) {
    secondHand.style.transition = `none`;

  } else if ( seconds == 1) {
    secondHand.style.transition = `all 0.13s`;
    secondHand.style.transitionTimingFunction = `cubic-bezier(0.02, 1.15, 0.61, 1.38)`;
    console.log("test")
    // try changing secondHand to just hand to pick up minute and hour changes.. seems like it won't work since the transform is happening via the JS on each element

  }
}

///This calls the setdate function every seccond to update the clock hands
setInterval(setDate,1000);
