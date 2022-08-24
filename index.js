// Your code here
var dodger = document.getElementById("dodger");

    function moveDodgerLeft(){
        var leftNumbers = dodger.style.left.replace("px", "");
        var left = parseInt(leftNumbers, 10);
        if (left > 0){
            dodger.style.left = `${left - 1}px`
        }
    }

    function moveDodgerRight() {
        var leftNumbers = dodger.style.left.replace('px', '');
        var left = parseInt(leftNumbers, 10)
        if (left > 0) {
            dodger.style.left = `${left + 1}px`
        }
    }

    document.addEventListener('keydown', function(key) {
        if (key.dodger === 37) {
            moveDodgerLeft()
        }
    })

    document.addEventListener('keydown', function(key) {
        if (key.dodger === 39) {
            moveDodgerRight()
        }
    }) 

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//         const leftNumbers = dodger.style.left.replace("px", "");
//         const left = parseInt (leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`;
//     }
//   });

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });
