import fs from "fs";
import path from "path";


const wordsFilePath = path.join(__dirname, "../tmp/words.json");
// read file line by line
const lines = fs.readFileSync(wordsFilePath, "utf8").split("\n");

function formatWord() {
    const formattedWords = [];
    for (const [index, line] of lines.entries()) {
        if (line.indexOf(":") === -1) {
            continue;
        }
        const [word, meaning] = line.split(": ");
        formattedWords.push({ id: index + 1, word, meaning });
    }
    fs.writeFileSync(path.join(__dirname, "../tmp/formatted-words.json"), JSON.stringify(formattedWords, null, 2));
}

function extractWords() {
    const formattedWords = [];
    for (const [index, line] of lines.entries()) {
        if (line.indexOf(":") === -1) {
            continue;
        }
        const [word, meaning] = line.split(": ");
        formattedWords.push(word);
    }
    fs.writeFileSync(path.join(__dirname, "../tmp/extracted-words.json"), JSON.stringify(formattedWords));

}

function combineWords() {
    const formattedWords = fs.readFileSync(path.join(__dirname, "../tmp/formatted-words.json"), "utf8");
    const phonetics = fs.readFileSync(path.join(__dirname, "../tmp/phonetics.json"), "utf8");

    const phoneticsArray = JSON.parse(phonetics);
    const newWords = JSON.parse(formattedWords).map((word, index) => ({ id: word.id, word: word.word, phonetic: `[${phoneticsArray[index]}]`, meaning: word.meaning }));
    fs.writeFileSync(path.join(__dirname, "../tmp/combined-words.json"), JSON.stringify(newWords, null, 2));
}

// extractWords();
combineWords();
