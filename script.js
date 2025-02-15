const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreElement = document.getElementById("score");

let isJumping = false;
let score = 0;

// وظيفة القفز
function jump() {
    if (isJumping) return;

    isJumping = true;
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 150) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                jumpHeight -= 5;
                character.style.bottom = `${jumpHeight}px`;
            }, 20);
        }
        jumpHeight += 5;
        character.style.bottom = `${jumpHeight}px`;
    }, 20);
}

// التحقق من الاصطدام
function checkCollision() {
    const characterRect = character.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        characterRect.right > obstacleRect.left &&
        characterRect.left < obstacleRect.right &&
        characterRect.bottom > obstacleRect.top
    ) {
        alert(`انتهت اللعبة! مجموع النقاط: ${score}`);
        score = 0;
        scoreElement.textContent = `النقاط: ${score}`;
    }
}

// تحديث النقاط
function updateScore() {
    score++;
    scoreElement.textContent = `النقاط: ${score}`;
}

// تشغيل اللعبة
setInterval(() => {
    checkCollision();
    updateScore();
}, 200);

// استماع إلى القفز عند الضغط على المسافة
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        jump();
    }
});
