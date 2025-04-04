const container = document.getElementById("container");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const buttons = document.querySelectorAll(".btn");

const setActiveButton = (activeButton) => {
  buttons.forEach((button) => {
    button.classList.remove("text-white");
  });
  activeButton.classList.remove("text-neutral-400");
  activeButton.classList.add("text-white");
};

const renderData = (timebound = "daily") => {
  container.innerHTML = "";

  fetch("/data.json")
    .then((response) => {
      if (!response.ok) return console.log("data not retieved");
      return response.json();
    })
    .then((data) => {
      console.log(data);

      data.forEach((item) => {
        const current = item.timeframes[timebound].current;
        const previous = item.timeframes[timebound].previous;
        const title = item.title;

        const cardContainer = `<div>
            <div class="bg-violet-600 w-60 h-16 relative -mb-5 z-0 rounded-t-lg inline-block">
                <img src="/images/${title}.svg" alt="studyicon">
            </div>
            <div class="bg-blue-900 w-60 h-48 relative z-20 rounded-lg p-7 hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                <div class="flex justify-center items-center space-x-30 mb-6">
                    <p class="flex justify-center items-center">${title}</p>
                    <p class="flex justify-center items-center">...</p>
                </div>
                <p class="text-5xl mb-2">${current}hrs</p>
                <p class="text-sm text-neutral-300">Last week - <span id="work-previous">${previous}hrs</span></p>
            </div>
        </div>`;
        console.log(current, previous, title);

        container.innerHTML += cardContainer;
      });
    });
};

renderData();
setActiveButton(daily);

daily.addEventListener("click", function () {
  renderData("daily");
  container.innerHTML = "";
  setActiveButton(daily);
});

weekly.addEventListener("click", function () {
  renderData("weekly");
  container.innerHTML = "";
  setActiveButton(weekly);
});

monthly.addEventListener("click", function () {
  renderData("monthly");
  container.innerHTML = "";
  setActiveButton(monthly);
});
