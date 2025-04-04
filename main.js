

const container = document.getElementById("container");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");



daily.addEventListener('click', function(){
    const timebound = "daily"
    container.innerHTML = '';
    
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
            <div class="bg-orange-300 w-60 h-16 relative -mb-5 z-0 rounded-t-lg inline-block">
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
        </div>`
    console.log(current,previous,title);

    container.innerHTML += cardContainer;

    });
    
    

       
  });
    

  });
  
  weekly.addEventListener('click', function(){
    const timebound = "weekly"
    container.innerHTML = '';


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
            <div class="bg-orange-300 w-60 h-16 relative -mb-5 z-0 rounded-t-lg inline-block">
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
        </div>`
    console.log(current,previous,title);

    container.innerHTML += cardContainer;

    });
    
    

       
  });
    
  });
  monthly.addEventListener('click', function(){
    const timebound = "monthly"
    container.innerHTML = '';

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
            <div class="bg-orange-300 w-60 h-16 relative -mb-5 z-0 rounded-t-lg inline-block">
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
        </div>`
    console.log(current,previous,title);

    container.innerHTML += cardContainer;

    });
    
    

       
  });
    
  });