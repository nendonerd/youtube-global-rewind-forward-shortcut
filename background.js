const playPause = () => {
    console.log("youtube-global-rewind-forward-shortcut: Play/Pause")
    document.querySelector('.ytp-play-button').click()
}
const forward =  () => {
    console.log("youtube-global-rewind-forward-shortcut: Forward")
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
        cancelable: true,
        composed: true,
        keyCode: 39,
        which: 39
    });
    document.body.dispatchEvent(event)
}
const rewind = () => {
    console.log("youtube-global-rewind-forward-shortcut: Rewind")
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
        cancelable: true,
        composed: true,
        keyCode: 37,
        which: 37
    });
    document.body.dispatchEvent(event)
}


chrome.commands.onCommand.addListener( (command) =>  {
    console.log(`${command} invoked!`)
	const action = (
        () => {
            switch(command) {
                case "playPause":
                    return playPause
                case "forward":
                    return forward
                case "rewind":
                    return rewind
	        }
        }
    )()

    chrome.tabs.query({ active: true }, ([tab]) => {
        console.log(tab.url)
        if (!tab) return
        if (!tab.url?.startsWith("https://www.youtube.com/")) return
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: action,
        });
    })
} )