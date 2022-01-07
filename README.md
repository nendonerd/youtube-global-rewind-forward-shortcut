# youtube-global-rewind-forward-shortcut
A Chrome extension to map media keys on a mac to control youtube playback globally, even when the browser window is not in focus
The work is inspired by [streamkeys](https://github.com/berrberr/streamkeys)

### Usage
0. Clone the Repo
1. In Chrome Open chrome://extensions
2. Enable Developer Mode
3. Click the Load unpacked button and select the repo directory

### How
It just maps some global keyboard shortcuts to execute a code snippet in the active tab, which mimic mouse click and keypress to control youtube playback.

### Why
I've a duel screen setup, one is for watching tutorial videos on youtube and the other is for praticing on a code editor.
Frequently， I've to pause/rewind/forward the tutorial, but the process is rather inefficient:
1. move cursor to tutorial video window
2. click to activate the window
3. click to pause or press arrow keys to rewind/forward
4. move cursor back to code editor
5. click to activate it
It takes loads of locating and clicking effort to control the playback. 
There's an extension called [streamkeys](https://github.com/berrberr/streamkeys), which can map media keys to play/pause/jumpNext/jumpPrev. However it lacks seeking back and forward support, thus I wrote my own.