const express = require('express');

const app = express();
const port = 3000;

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: "Too many requests, please try again later.",
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

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

