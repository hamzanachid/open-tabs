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
    else if(command==="open-fb"){
        chrome.tabs.create({url:"https://www.facebook.com/"})
    }
    else if(command==="open-chat"){
        chrome.tabs.create({url:"https://chat.openai.com/"})
    }
})

console.log(chrome.commands);