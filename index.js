// index.js

function superbowlWin(record) {
    // Use the find() method to search for a win result
    const win = record.find(game => game.result === "W");

    // If a win is found, return the year of the win, otherwise return undefined
    return win ? win.year : undefined;
}


