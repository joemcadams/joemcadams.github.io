import filmein from './images/filmein.png'
import femignabsome from './images/femignabsome.gif'
import geopoverty from './images/geopoverty.png'
import humansong from './images/humansong.png'
import nyse from './images/nyse.png'
import rpi from './images/rpi.png'
import smokealarmportal from './images/smokealarmportal.png'
import toggledemo from './images/toggle-demo.gif'
import upkeep from './images/upkeep.png'

export const Projects = {
    sections: [
        {
            name: "Filmein",
            description: "At Princeton's Spring hackathon in 2016, I worked with three other students to build a web application utilizing APIs from IMDB, Facebook, and the MovieDatabase. ",
            tools: [
                "Angular",
                "Apache",
                "JavaScript",
                "jQuery"
            ],
            type: "web",
            imagePath: filmein,
            url: "http://devpost.com/software/filmein"
        },
        {
            name: "Upkeep",
            description: "At UChicago's Uncommon Hacks hackathon in 2016, I built an Android SMS application that would asyncronously analyze the sentiment of a user's SMS conversations with IBM's Watson API. It would then color conversations based on five areas of sentiment. I also worked alongside three other students.",
            tools: [
                "Java",
                "Android"
            ],
            type: "mobile",
            imagePath: upkeep,
            url: "http://devpost.com/software/upkeep"
        },
        {
            name: "Dj Rainbow Pi",
            description: "At PennApps, I met and worked with three other students to build a music visualizer from scratch using a Raspberry Pi, an Arduino UNO, WS2812 LEDs, and a breadboard. I used the Librosa library in Python to do rudimentary signal analysis of mp3 files, then sent the data over UART to an Arduino to map these values to the LED strip in real-time.",
            tools: [
                "Python",
                "C"
            ],
            type: "hardware",
            imagePath: rpi,
            url: "http://devpost.com/software/dj-rainbow-pi-73dbh8"
        },
        {
            name: "Smoke Alarm Portal",
            description: "At HackIllinois, I worked with two developers on an open source project for the Red Cross. The application is still in development, and will be used to help manage national fire alarm installations across the United States. I helped fix an asynchronous database call in a JS file that had >600 lines of code.",
            tools: [
                "Node.js",
                "PostgreSQL"
            ],
            type: "web",
            imagePath: smokealarmportal,
            url: "https://github.com/redcross/smoke-alarm-portal"
        },
        {
            name: "GeoPoverty",
            description: "At HuskieHack in 2015, I collaborated with two students to build a jQuery application to grab poverty data from the U.S. Census Bureau's API based on a given zip code. The application tracked metrics like average household income, unemployment, and property values.",
            tools: [
                "HTML",
                "JavaScript",
                "jQuery"
            ],
            type: "web",
            imagePath: geopoverty,
            url: "http://devpost.com/software/geopoverty"
        },
        {
            name: "The Human Song",
            description: "With two close friends of mine, I went to Madhacks back in 2015 (my first ever hackathon :D) and built a Java program to read a text representation of a human chromosome, search for encoding sequences (a string of RNA between two codons), then play C chords mapped to each possible codon in the encoding sequence. We won third place overall!",
            tools: [
                "Java"
            ],
            type: "desktop",
            imagePath: humansong,
            url: "https://github.com/joemcadams/The-Human-Song"
        }
    ]
}