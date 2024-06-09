/*
    Copyright (c) 2024 MR.ANDA LA-NGU

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


*/

let fade = [
    {

        opacity: 1,
        offset: 0,
    },
    {
        offset: 0.75,
    },

];

let shiny = [
    {

        opacity: 0.3,
        offset: 0.25,
    }
    ,
    {
        opacity: 1,
        offset: 0.75,
    }
]


let random = [
    {

        opacity: 0.0,
        offset: 0.0,
    },
    {

        opacity: 0.35,
        offset: 0.25,
    },
    {

        opacity: 0.1,
        offset: 0.5,
    },
    {
        opacity: 1,
        offset: 0.75,
    }
]


let animationsDict = {
    "fade": fade,
    "shiny": shiny,
    "random": random,
}



let durationDict = {
    "fade": true,
    "shiny": true,
    "random": false,
}

function slideDuration({ index, duration, len }) {
    let animationDuration = duration - (len - index) * duration / 100;
    return animationDuration; // ms
}

function randomDuration({ index, duration, len }) {
    let animationDuration = duration - getRandomInt(9)*100;
    console.log(animationDuration);
    return animationDuration; // ms
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", (e) => {
    // var animationStyleSheet = document.createElement("link");
    // animationStyleSheet.setAttribute("rel", "stylesheet");
    // animationStyleSheet.setAttribute("href", "animations.css");
    // document.head.appendChild(animationStyleSheet);

    var targets = document.querySelectorAll('*');
    // console.log(targets);

    targets.forEach(target => {
        let text = [...target.textContent];
        text = text.join("", "");
        const regex = /animate-\[([^\]]+)\]/;
        const regexType = /separate/;
        const regexDuration = /duration-\[([^\]]+)\]/;
        const regexInfinite = /infinite-\[([^\]]+)\]/;
        const regexColor = /color-\[([^\]]+)\]/;

        const matches = target.className.match(regex);
        const matchesType = target.className.match(regexType);
        const matchesDuration = target.className.match(regexDuration);
        const matchesInfinite = target.className.match(regexInfinite);
        const matchesColor = target.className.match(regexColor);

        if (matches) {

            if (!matchesType) {
                if (matchesColor != null) animationsDict[matches[1]][0]["color"] = matchesColor[1];
                target.animate(animationsDict[matches[1]], { duration: matchesDuration ? parseInt(matchesDuration[1]) : 1000, iterations: matchesInfinite ? parseInt(matchesInfinite[1]) : Infinity });
                console.log(matches[1]);


            } else {
                target.innerHTML = "";
                console.log(text);
                for (let index = 0; index < text.length; index += 1) {
                    // console.log(text[index]);
                    if (text[index] === " " || text[index] === "\n") {
                        if (text[index - 1] === " " || text[index] === "\n") continue;
                        target.innerHTML += "&nbsp";
                        continue;
                    }

                    let span = document.createElement("span");
                    span.innerHTML = text[index];
                    target.appendChild(span);


                    // target.innerHTML += `<span style="animation: ${matches[1]} ${index}s ${matchesInfinite ? parseInt(matchesInfinite[1]) : "infinite"};">${text[index]}</span>`;


                }
                // console.log(target.children);
                for (let index = 0; index < target.children.length; index++) {
                    if (matchesColor != null) animationsDict[matches[1]][0]["color"] = matchesColor[1];
                    target.children[index].animate(animationsDict[matches[1]], { duration: matchesDuration ? durationDict[matches[1]] ? slideDuration({ index: index, duration: parseInt(matchesDuration[1]), len: target.children.length }) : randomDuration({ index: index, duration: parseInt(matchesDuration[1]), len: target.children.length }) : 1000, iterations: matchesInfinite ? parseInt(matchesInfinite[1]) : Infinity });
                }

            }
        }
    })
})


