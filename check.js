var words        = ["Aleksey", "Oleg", "Sergey", "Stas", "Greg"],
	anotherWords = [" go to ", " speep to ", " most a ", " seet "],
	endWords     = ["Theme - Lyteand eat.", "and cry.", "and watch tv."];

var countWords    = words.length,
	countAnWords  = anotherWords.length,
	countEndWords = endWords.length;

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

function getRandomPhrace(w1, w2, w3) {
	return w1[random(0, countWords)] + w2[random(0, countAnWords)] + w3[random(0, countEndWords)];
}

console.log(getRandomPhrace(words, anotherWords, endWords));