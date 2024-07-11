
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight
  };
  