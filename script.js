//Fact Generator on Home Page//
var clickCount = 0;

var myButton = document.getElementById("buttonStat");

var myFact = document.getElementById("stats")

var factList = [
  "76% of people in publishing are white",
  "7% in publishing are Asian/Native Hawaiian/Pacific Islander/South Asian/Southeast Indian",
  "6% in publishing are Latinx/Mexican",
  "5% in publishing are Black/Afro American/Afro Caribbean",
  "3% in publishing are biracial/multiracial",
  "<1% in publishing are Middle Eastern",
  "<1% in publishing are American Indian/Alaskan Native/First Nations/Native American",
  "74% in publishing are cis women",
  "23% in publishing are cis men",
  "1% in publishing are genderfluid/genderqueer/nonbinary",
  "<1% in publishing are trans men, intersex people, and trans women",
  "81% in publishing are straight",
  "10% in publishing are bisexual/pansexual",
  "4% in publishing are gay",
  "2% in publishing are lesbian",
  "1% in publishing are asexual",
  "89% of publishing staff identify as nondisabled"
];

if (myButton) { myButton.addEventListener("click", factGenerator); }


function factGenerator() {
  myFact.innerHTML = factList[clickCount]; clickCount++;
  if (clickCount==factList.length) {
    clickCount = 0;
  }
}





//Book Recs on Book Rec Page//

var fantasyBtn = document.getElementById("fantasyBtn");
var dystopianBtn = document.getElementById("dystopianBtn");
var romanceBtn = document.getElementById("romanceBtn");
var comingOfAgeBtn = document.getElementById("comingOfAgeBtn");
var mysteryBtn = document.getElementById("mysteryBtn");
var bookDesc = document.getElementById("bookDesc");

fantasyBtn.addEventListener("click",fantasyDesc);
dystopianBtn.addEventListener("click",dystopianDesc);
romanceBtn.addEventListener("click",romanceDesc);
comingOfAgeBtn.addEventListener("click",comingOfAgeDesc);
mysteryBtn.addEventListener("click",mysteryDesc);

function fantasyDesc(){ 
  bookDesc.innerHTML = "Six of Crows by Leigh Bardugo - Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone... A convict with a thirst for revenge. A sharpshooter who can’t walk away from a wager. A runaway with a privileged past. A spy known as the Wraith. A Heartrender using her magic to survive the slums. A thief with a gift for unlikely escapes. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.";
}

function dystopianDesc () {
  bookDesc.innerHTML = "Legend by Marie Lu - What was once the western United States is now home to the Republic, a nation perpetually at war with its neighbors. Born into an elite family in one of the Republic's wealthiest districts, fifteen-year-old June is a prodigy being groomed for success in the Republic's highest military circles. Born into the slums, fifteen-year-old Day is the country's most wanted criminal. But his motives may not be as malicious as they seem. From very different worlds, June and Day have no reason to cross paths—until the day June's brother, Metias, is murdered and Day becomes the prime suspect. Caught in the ultimate game of cat and mouse, Day is in a race for his family's survival,while June seeks to avenge Metias's death. But in a shocking turn of events, the two uncover the truth of what has really brought them together and the sinister lengths their country will go to keep its secrets.";
}

function romanceDesc (){
  bookDesc.innerHTML = "Everything, Everything by Nicola Yoon - My disease is as rare as it is famous. It’s a form of Severe Combined Immunodeficiency, but basically, I’m allergic to the world. I don’t leave my house, haven't left my house in fifteen years. The only people I ever see are my mom and my nurse, Carla.But then one day, a moving truck arrives. New next door neighbors. I look out the window, and I see him. He’s tall, lean and wearing all black—black t-shirt, black jeans, black sneakers and a black knit cap that covers his hair completely. He catches me looking and stares at me. I stare right back. His name is Olly. I want to learn everything about him, and I do. I learned that he is funny and fierce. I learn that his eyes are Atlantic Ocean-blue and that his vice is stealing silverware. I learn that when I talk to him, my whole world opens up, and I feel myself starting to change—starting to want things. To want out of my bubble. To want everything, everything the world has to offer.Maybe we can’t predict the future, but we can predict some things. For example, I am certainly going to fall in love with Olly. It’s almost certainly going to be a disaster.";
}

function comingOfAgeDesc (){
bookDesc.innerHTML="Aristotle and Dante Discover the Secrets of the Universe by Benjamin Alire Sáenz - Aristotle is an angry teen with a brother in prison. Dante is a know-it-all who has an unusual way of looking at the world. When the two meet at the swimming pool, they seem to have nothing in common. But as the loners start spending time together, they discover that they share a special friendship—the kind that changes lives and lasts a lifetime. And it is through this friendship that Ari and Dante will learn the most important truths about themselves and the kind of people they want to be.";
}

function mysteryDesc (){
bookDesc.innerHTML="A Good Girl's Guide to Murder by Holly Jackson - Pippa may be the only person in her small town who doesn't believe Sal Singh was responsible for the murder of Andie Bell five years earlier, which makes it the perfect case study for her senior year final project. But if Sal isn't the murderer, that means someone else is — and the further Pippa digs, the more secrets she uncovers that were never meant to be learned. Even if Pippa does find the truth, will she live to tell it?";
}
