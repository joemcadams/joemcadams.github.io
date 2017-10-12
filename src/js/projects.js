import filmein from '../images/filmein.png'
import femignabsome from '../images/femignabsome.gif'
import geopoverty from '../images/geopoverty.png'
import humansong from '../images/humansong.png'
import nyse from '../images/nyse.png'
import rpi from '../images/rpi.png'
import smokealarmportal from '../images/smokealarmportal.png'
import toggledemo from '../images/toggle-demo.gif'
import upkeep from '../images/upkeep.png'

export const Projects = {
    sections: [
        {
            name: "MRI Hololens",
            description: "For my senior design project at Marquette University, I worked with two other students to build a proof-of-concept medical imaging augmented reality application. We sought to model layers of bone, muscle, skin, and capillary systems by segmenting DICOM images. I wrote the Python script to stitch together a directory of 2D DICOM images into a 3D model to be used on the Microsoft Hololens. I also helped create the UI for the application. Unfortunately, the work we did was proprietary and protected by IP, so I can only show the GIF.",
            tools: [
                "Microsoft Hololens",
                "Unity",
                "Python",
                "Vtk"
            ],
            type: "ar/vr",
            imagePath: toggledemo
        },
        {
            name: "Femi-Gnab-Some",
            description: "For my Feminist Philosophy class, I created a web application to visualize sentiment from tweets on Marquette University's campus by analyzing the treatment of online gender identities. I built out a Node.js application, deployed it to Heroku, connected it to a MongoDB instance, then scrapped Twitter data for a couple of months. I then built out an entire front end using React, Highscharts, and Material-UI. It is still live :D .",
            tools: [
                "Node",
                "React",
                "MongoDB",
                "Highcharts"
            ],
            type: "web",
            imagePath: femignabsome,
            url: "https://medium.com/feminist-philosophy-sp17-class-magazine/gender-and-oppression-online-a-discussion-about-marquettes-tweeting-habits-d1a4dc024cc2"
        },
        {
            name: "Filmein",
            description: "At Princeton's Spring hackathon in 2016, I worked with three other students to build a web application utilizing APIs from IMDB, Facebook, and the MovieDatabase. I also set up an Apache server using Linode's cloud services to host our application remotely.",
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
            name: "NYSE Visualizer",
            description: "At MHacks VI, I worked with three other students to create a VR representation of the New York Stock Exchange. I primarily worked on the JS code to asynchronously load data from Yahoo's Finance API; however, I couldn't quite figure out how to stitch that data into the model in real-time.",
            tools: [
                "Unity",
                "JavaScript"
            ],
            type: "ar/vr",
            imagePath: nyse,
            url: "http://devpost.com/software/filmein"
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