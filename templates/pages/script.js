const stry = document.querySelector('#stry');
const choice1 = document.querySelector('#choice1')
const choice2 = document.querySelector('#choice2')

choice1.innerHTML = "Venture out";
choice2.innerHTML = "Search plane";


var story = ["you crash landed", "you find an empty backpack and flashlight",
 "your dog picks up a scent", "your dog follows you and you find firewood and start a fire",
 "hear roar", "hear it get closer", "dead to beast", "dog takes hiding spot stuck out in open",
 "the beast leaves it is blnd", "you are thirsty and search for water", "find river and cabin you win",
 "arrive at pond", "death to pond water", "dark you hear sounds", "death to beast after approaching sound",
"find newly killed dear", "monster comes death", "wake up to strange sound", "wake up to sunrise"
];

stry.innerHTML = story[0];

choice1.addEventListener('click', (event) => {
  console.log("clicked 1")
  if (stry.innerHTML == story[0]){
    stry.innerHTML = story[13];
    choice1.innerHTML = "Approach";
    choice2.innerHTML = "search for supplies";
  } else if (stry.innerHTML == story[13]) {
    stry.innerHTML = story[14];
  } else if (stry.innerHTML == story[1]) {
    stry.innerHTML = story[2];
    choice1.innerHTML = "follow the dog";
    choice2.innerHTML = "find supplies";
  } else if (stry.innerHTML == story[2]){
    stry.innerHTML = story[15];
    choice1.innerHTML = "Take deer back to cook";
    choice2.innerHTML = "Ignore";
  } else if (stry.innerHTML == story[15]){
    stry.innerHTML = story[16];
  } else if (stry.innerHTML == story[11]){
    stry.innerHTML = story[12];
  } else if (stry.innerHTML == story[9]){
    stry.innerHTML = story[10];
  } else if (stry.innerHTML == story[3]){
    stry.innerHTML = story[4];
    choice1.innerHTML = "Run";
    choice2.innerHTML = "Hide";
  } else if (stry.innerHTML == story[4]){
    stry.innerHTML = story[5];
    choice1.innerHTML = "RUN";
    choice2.innerHTML = "HIDE";
  } else if (stry.innerHTML == story[5]){
    stry.innerHTML = story[6];
  } else if (stry.innerHTML == story[7]){
    stry.innerHTML = story[5];
    choice1.innerHTML = "Run";
    choice2.innerHTML = "Hide";
  } else if (stry.innerHTML == story[8]){
    stry.innerHTML = story[9];
    choice1.innerHTML = "Rushing water";
    choice2.innerHTML = "Splashing water";
  } else if (stry.innerHTML == story[17]){
    stry.innerHTML = story[2];
    choice1.innerHTML = "follow the dog";
    choice2.innerHTML = "find supplies";
  } else if (stry.innerHTML == story[18]){
    stry.innerHTML = story[15];
    choice1.innerHTML = "take deer back to cook";
    choice2.innerHTML = "ingnore"
  }
});

choice2.addEventListener('click', (event) => {
  console.log("clicked 2")
  if (stry.innerHTML == story[13]){
    stry.innerHTML = story[1];
    choice1.innerHTML = "Explore";
    choice2.innerHTML = "wait until morning"
  } else if (stry.innerHTML == story[0]){
    stry.innerHTML = story[1];
    choice1.innerHTML = "Explore";
    choice2.innerHTML = "wait until morning"
  } else if (stry.innerHTML == story[2]){
    stry.innerHTML = story[3];
    choice1.innerHTML = "investigate";
    choice2.innerHTML = "Mind your Business";
  } else if (stry.innerHTML == story[2]){
    stry.innerHTML = story[3];
    choice1.innerHTML = "investigate";
    choice2.innerHTML = "mind your business";
  } else if (stry.innerHTML == story[15]){
    stry.innerHTML = story[3];
    choice1.innerHTML = "investigate";
    choice2.innerHTML = "mind your business";
  } else if (stry.innerHTML == story[3]){
    stry.innerHTML = story[9];
    choice1.innerHTML = "Rushing water";
    choice2.innerHTML = "Splashing water";
  } else if (stry.innerHTML == story[9]){
    stry.innerHTML = story[11];
    choice1.innerHTML = "Drink";
    choice2.innerHTML = "Go to rushing water";
  } else if (stry.innerHTML == story[11]){
    stry.innerHTML = story[10];
  }  else if (stry.innerHTML == story[4]){
    stry.innerHTML = story[7];
    choice1.innerHTML = "RUN";
    choice2.innerHTML = "Stay very still";
  } else if (stry.innerHTML == story[7]){
    stry.innerHTML = story[8];
    choice1.innerHTML = "Find water";
    choice2.innerHTML = "Find Food";
  } else if (stry.innerHTML == story[8]){
    stry.innerHTML = story[10];
  } else if (stry.innerHTML == story[5]){
    stry.innerHTML = story[8];
    choice1.innerHTML = "find water";
    choice2.innerHTML = "Find food";
  } else if (stry.innerHTML == story[1]){
    stry.innerHTML = story[17];
    choice1.innerHTML = "follow dog";
    choice2.innerHTML = "hold dog back";
  } else if (stry.innerHTML == story[17]){
    stry.innerHTML = story[18];
    choice1.innerHTML = "go find food";
    choice2.innerHTML = "go find firewood";
  } else if (stry.innerHTML == story[18]){
    stry.innerHTML = story[3];
    choice1.innerHTML = "investigate";
    choice2.innerHTML = "mind your business";
  }
});
