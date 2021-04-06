var txt;
var counts = {};
var keys = [];

function preload() {
    txt = loadStrings('doraemon.txt');

}

function setup() {
    var allwords = txt.join("\n");
    var tokens = allword.split(/\W+/);
    for (var i = 0; i < tokens.length; i++) {
        var word = tokens [i].toLowerCase();
        if (!/\d+/.test(word)) {
            //console.log(word);
            if (counts[word] == undefined) {
                counts[word] = 1;
                keys.push(word);
            } else {
                counts[word] = counts [word] + 1;
            }
        }
    }

    keys.sort();

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        createDiv(keys + " " + counts[key]);
    }
    noCanvas();
}