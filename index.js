const getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

const width = 620;
const height = 620;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

function getDistance(target, event) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

function getDistanceHint(distance) {
  if (distance < 10) {
    return "Обожжешься!";
  } else if (distance < 20) {
    return "Очень горячо";
  } else if (distance < 40) {
    return "Горячо";
  } else if (distance < 80) {
    return "Тепло";
  } else if (distance < 160) {
    return "Холодно";
  } else if (distance < 320) {
    return "Очень холодно";
  } else if (distance < 450) {
    return "Очень-очень холодно";
  } else {
    return "Замерзнешь!";
  }
}

const map = document.querySelector("#map");
let clicks = 0;
const maxClick = 30;

map.addEventListener("click", (event) => {
  clicks++;
  let clicksToFinish = maxClick - clicks;

  const distance = getDistance(target, event);
  const distanceHelp = document.querySelector("#distance");
  distanceHelp.textContent = getDistanceHint(distance);

  if (
    getDistanceHint(distance) === "Холодно" ||
    getDistanceHint(distance) === "Горячо"
  ) {
    alert("Осталось кликов: " + clicksToFinish);
  }
  if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
  }
  if (clicks >= maxClick)
    alert("КОНЕЦ ИГРЫ. Вы привысили количество кликов:" + clicks);
});