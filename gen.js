const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const result = generate();
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

col = ["Blue","Azure","Beige","Violet","Crimson","Cyan","Golden","Grey","Green","Khaki","Magenta","Olive","Orange","Red","Slate","Pink","Turquoise","Fuchsia","Indigo","Lavender","Steel","Iron","Silver","Bronze","Maroon","Purple","Orchid","Plum","Rose","Teal","Thistle"]
peaks = ["Everest","Crown","McKinley","Kilimanjaro","Logan","Elbrus","Blanc","Rainier","Fairweather","Stanley","Erebus","Fuji","Cook","Blackburn","Hayes","Etna","Waddington","Whitney","Lucania","Stephenson","Wilhelm","Monarch","Robson","Elbert","Olympus","Kosciuszko","Taranaki","Rosa","Washington","Zugspitze","Radomir","Nevis","Snowdon","Matterhorn","Eiger","Tatra","Beskid","Skrzyczne","Klimczok","Magura","Szyndzielnia","Czantoria","Muronka"]

function generate() {
    const randomCol = col[Math.floor(Math.random() * col.length)];
    const randomPeak = peaks[Math.floor(Math.random() * peaks.length)];
    return `${randomCol} ${randomPeak}`;
}

