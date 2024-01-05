
//Select a random quote from a speaker object and
//add quotation marks and attribution.
const randomQuote = (obj) => {
    let i = Math.floor(Math.random() * obj.quoteList.length);
    let quote = obj.quoteList[i];
    let finalQuote = "\"" + quote + '\" - ' + obj.speaker;
    return finalQuote;
}

//Create a new speaker object
const speakerFactory = (speaker, quoteList) => {
    let newSpeaker = {
        speaker,
        quoteList
    }
    return newSpeaker;
}

//Select a random speaker and return a quote
const randomMessage = (speakerList) => {
    let i = Math.floor(Math.random() * speakerList.length);
    return randomQuote(speakerList[i]);
}

//Create a master list of speakers: 
//Don't forget to add to this as you create new speakers
let speakerMasterList = [];

//CREATE OUR ORCS HERE
//----------------------
//  1) Create Quote List
//  2) Create Speaker
//  3) Add Speaker to Master

//Create an Orc Peon: 
let orcPeonQuotes = ['Ready to Work', 'Yes?', 'Hmmm?', 'What you want?',
'Something need doing?', 'I can do that.', 'Be happy to.', 'Work, work.',
'Okie dokie.', 'OK!', "Kill 'em", "I'll try...", "Why not?!", 'Whaaat?',
'Me busy. Leave me alone!!', 'No time for play.', 'Me not that kind of orc!'];
let orcPeon = speakerFactory("Orc Peon", orcPeonQuotes);
speakerMasterList.push(orcPeon);

//Create an Orc Grunt: 
let orcGruntQuotes = ['My life for the Horde!', 'Yes?', 'Huh?', 'Master?',
'What you want?', 'Dabu!', "Lok'tar!", "Swobu!", "Zug zug!", "Time for killing!",
"Hragh!", "Time to die!", "For the Horde!", "Why you poking me again?",
"Why don't you lead an army instead of touching me?!", "Poke, poke, poke - is that all you do?",
"Oh, that was kind of nice.", "Me no sound like Yoda. Do I?",
"It not easy being green!"];
let orcGrunt = speakerFactory("Orc Grunt", orcGruntQuotes);
speakerMasterList.push(orcGrunt);

//Create an Orc Raider:
let orcRaiderQuotes = ["Ready to ride!", "Yes, chieftain?", "Hmm?",
"Need something?", "Say the word.", "No problem.", "Yeea!", "Mush!",
"Let's ride.", "Take 'em", "Taste my steel!", "For Doomhammer!",
"For the glory of the Warchief!", "Down, boy.", "You're annoying my dog.",
"What's that smell? Oh, bad dog!", "I'm hungry like the wolf!"];
let orcRaider = speakerFactory("Orc Raider", orcRaiderQuotes);
speakerMasterList.push(orcRaider);


const newQuote = () => {
    document.getElementById("randomQuote").innerHTML = randomMessage(speakerMasterList);
}

const targetedQuote = (target) => {
    switch (true) {
        case target === "Peon":
            document.getElementById("randomQuote").innerHTML = randomQuote(orcPeon);
            break;
        case target === "Grunt":
            document.getElementById("randomQuote").innerHTML = randomQuote(orcGrunt);
            break;
        case target === "Raider":
            document.getElementById("randomQuote").innerHTML = randomQuote(orcRaider);
            break;
    }
}

//On click of the Orc button, display random Orc quote
let btnRandom = document.getElementById("randomOrc");
btnRandom.addEventListener("click", newQuote);

let btnPeon = document.getElementById("randomPeon");
btnPeon.addEventListener("click", () => targetedQuote("Peon"));

let btnGrunt = document.getElementById("randomGrunt");
btnGrunt.addEventListener("click", () => targetedQuote("Grunt"));

let btnRaider = document.getElementById("randomRaider");
btnRaider.addEventListener("click", () => targetedQuote("Raider"));



