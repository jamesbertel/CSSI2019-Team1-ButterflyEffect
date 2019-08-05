
const stry = document.querySelector('#stry');
const choice1 = document.querySelector('#choice1')
const choice2 = document.querySelector('#choice2')
const choice3 = document.querySelector('#choice3')

choice1.innerHTML = "Venture out";
choice2.innerHTML = "Search plane";


var story = ["you crash landed", "you find an empty backpack and flashlight",
 "your dog picks up a scent", "your dog follows you and you find firewood and start a fire",
 "hear roar", "hear it get closer", "dead to beast", "dog takes hiding spot stuck out in open",
 "the beast leaves it is blnd", "you are thirsty and search for water", "find river and cabin you win",
 "arrive at pond", "death to pond water", "dark you hear sounds", "death to beast after approaching sound",
"find newly killed dear", "monster comes death"
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
  }
});

choice2.addEventListener('click', (event) => {
  console.log("clicked 2")
  if (stry.innerHTML == story[13]){
    stry.innerHTML = story[1];
    choice1.innerHTML = "Explore";
    choice2.innerHTML = "wait until morning"
  }
});
