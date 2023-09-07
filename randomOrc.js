const orcPeonQuotes = ['Ready to Work', 'Yes?', 'Hmmm?', 'What you want?',
'Something need doing?', 'I can do that.', 'Be happy to.', 'Work, work.',
'Okie dokie.', 'OK!', "Kill 'em", "I'll try...", "WHy not?!", 'Whaaat?',
'Me busy. Leave me alone!!', 'No time for play.', 'Me not that kind of orc!'];

const randomMessage = (messageArray) => {
    let number = Math.floor(Math.random() * messageArray.length);
    let message = messageArray[number];
    console.log(number);
    console.log(message);
}

randomMessage(orcPeonQuotes);