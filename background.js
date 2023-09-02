chrome.commands.onCommand.addListener(function (command) {
    if(command==="open-whatsapp"){
        chrome.tabs.create({url:"https://web.whatsapp.com/"})
    }
    else if(command==="open-youtube"){
        chrome.tabs.create({url:"https://www.youtube.com/"})
    }
    else if(command==="open-twitter"){
        chrome.tabs.create({url:"https://www.twitter.com/"})
    }
})

console.log(chrome.commands);