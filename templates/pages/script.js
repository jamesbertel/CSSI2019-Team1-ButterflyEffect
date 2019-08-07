const stry = document.querySelector('#stry');
const choice1 = document.querySelector('#choice1')
const choice2 = document.querySelector('#choice2')

choice1.innerHTML = "Venture out";
choice2.innerHTML = "Search plane";


var story = ["Your eyes shoot open to the distinct cold, wet feeling hitting your cheek. Cold sweat drips down your furrowed brow. You tilt your head ever so slightly to the left to see piercing brown eyes looking back at you. <br><br> Its Duke. <br><br> Thoughts begin to rush into your head. Where are you? Memories of you childhood and adolescence shoot back into your head, but your thoughts come to a halt, when you feel the stinging sensation against you leg. <br><br> You look down and around at your surroundings. You see metal tiles torn and strewn about the cabin of your now destroyed “ship”. Your leg is only slightly injured from the impact. You know you’ll recover just fine with some gauze and tape. But for now you have to figure out where to go next. <br> Duke kneels down at your side. <br><br> Where to next?","After a quick look around you see a tattered worn down knapsack hanging from broken, ripped wires. You search the cabins compartments and stumble across a half-shattered flashlight. <br><br> Good enough, but the exhaustion is starting to get to you.","You step out the cavernous hole made from the demolished pilot wing. The overgrown grass sways above your knees. Large sequoia trees cover the ample sky above, their branches sprouting every direction. New sights and smells overwhelm your senses. You feel your heartbeat quicken, your environment makes you shudder. Duke seems to be enjoying himself. You see him smelling every plant, bush and tree in sight, until he makes a sudden stop and begin trailing off deeper into the forest. You’re feeling cold and alone. <br><br> Will you...","It's imperative you don't die of hypothermia, Duke is just exploring anyway. You step over the bounds of overgrown grass, dodging low hanging branches and ascending over fallen timber. Along the way picking up dry leaves and small twigs to use as kindle. Your hear the fibers in the tree twist and bend until an echoing crunch emanates from its severed stump. You move through the forest as swiftly as possible. Your callused hands reach for another branch when you hear a deafening, bitter outcry. It rolls across your ears like thunder from the clouds. You hear the sound of sporadic flaps spring past the tall trees. The ground vibrates a low hum. Your unable to tell if it’s from the screech before or the creatures its scared off.","You inch your way further into the forest following the hollow screech you heard earlier. Your footsteps are agile, Duke trails behind you, matching your pace. You see tree’s breeze past you, your visions a hazy blur. What if it was a call for help? What if it is your call for help? A chance for rescue was one worth taking. These hopeful thoughts linger on your mind. Your optimism fuels your tenacity, your legs feel lighter than ever, but slowly your affirmations waste away. Hopeful thinking is not enough for survival. A scream as horrid as the one you heard isn't a rescue call it’s suici- <br><br> The corner of your eye. It’s just a glimpse. You see it. It towers at twice your size. Its no animal, and its certainly not human. Adrenaline pumps into your heart, the silence eats away at your sanity. <br><br> You only have time for instinct.",
"Your mind doesn’t have time to catch up with your legs. You find yourself sprinting against the frigid wind. Heat rushes through your body. You pound your legs into the ground as if your strength could affect the laws of friction. Your wounds scream out in pain but you’re unable to feel it. Your adrenaline keeps you moving, the sound of footsteps keeps you running.",
"Your breaths are short and short, your mind feels clouded through your lack of oxygen. You want to scream but you have no air for it. Your tear ducts begin to burn-tears welling out, but the wind dries them within seconds. Even the forest ignores your pleads for help. You feel your stamina depleting with each passing step. Your mind confirms you position. <br><br> You can’t go any further. <br><br> You stand there It’s footsteps ring in your ears. You want to shut your eyes but you remain paralyzed. In draws near you, It’s skin a pale, sickly color. Its body resembles your own framework, however its eyes are sunken deep into its skull, long bruised arms that drag against the floor - its ribs protrude out as if it hasn’t eaten in days. <br><br> You exhale one...last...time.",
"Your eyes widen with fear, your instinct tells you to hide. You dart across the woodlands, the sound of snarls following behind. Your lungs burning in pain. You feel as though you might faint. Rushing past the trees",
"You freeze into place. Its eyes meet your own, but you feel no life from them, they are white, hollow spheres- ruthless in nature, but they look right past you. Passed your sweating body and its pulsing heart, passed the desperation in your eyes. <br><br> You hold your breath, your chest [pounding][shifting][moving][bouncing] in and out as you bind it. You don’t make a move, nor a sound. Your eyes refusing to look away from its own. You notice It’s skin is a pale, sickly color. How Its body resembles your own framework, but its eyes are sunken deep into its skull. <br><br> Its mouth opens, unhinging itself like a snake to reveal its rows of jagged and cleft teeth that spiral down into the back of its neck. It exhales. Its hot [envelopes][cloaks] your face, invading your nose with the stench of its previous prey. <br><br> The sound of chirps can be heard in the distance, it throws its head back with a gritting violent screech and bounds for that direction. <br><br> You exhale...Slumping against the collapsed log, you cry in silence, tears dripping off your face. Dukes wistful eyes look into your own. You refuse to die here.",
"Your mouth is dry and stale, you feel worn-out and weak. You don’t allow yourself to rest out of fear that you might not wake up. Theres been no source of water ever since you crashed, and if you don’t find some soon you might die of dehydration. <br><br> Duke whines. He must be thirsty as well. You reach over to hold his somber head in your hands, reassuring him that you’ll survive. That you both will. <br><br> As you drag yourself off the ground, duke lets you stabilize yourself on him, aiding you as you walk. Twenty minutes goes by when you begin to hear the sounds of forest creatures scurrying around. Natures allows you a few seconds of peace and a new opportunity.  To the left you hear the vibration of rushing water. To the right is a drum of splashes and drips. <br><br> Where will you go next?",
"find river and cabin you win",
"arrive at pond",
"death to pond water",
"dark you hear sounds",
"death to beast after approaching sound",
"find newly killed dear",
"monster comes death",
"wake up to strange sound",
"wake up to sunrise"
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
