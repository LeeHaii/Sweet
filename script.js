const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let img = document.getElementById('image');

let isMoving = false;

function moveRandom() {
    if (!isMoving) {
        isMoving = true;
        const maxX = window.innerWidth - noButton.clientWidth; // lay chieu ngang max - chieu ngang button de button ko bay khoi man hinh
        const maxY = window.innerHeight - noButton.clientHeight;

        noButton.style.position = "absolute"; // de absolute thi ms di chuyen lung tung dc
        const randomX = Math.floor(Math.random() * maxX); //math.random() la random so tu 0 -> 1 vs 0.03487351
        const randomY = Math.floor(Math.random() * maxY);// math.floor() la xoa phan thap phan

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        setTimeout(() => {
            isMoving = false;
        }, 100); // de ko bi bay di neu chua du 0.1s
    }
}

function clickNo() {
    alert("ko thương cx phải thương")
}

function clickYes() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    const popup = document.getElementById("popup");
    const video = document.getElementById("video");
    video.pause();
    popup.style.display = "none";
  }