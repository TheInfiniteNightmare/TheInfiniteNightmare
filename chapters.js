/* =========================================================
   THE INFINITE NIGHTMARE
   CHAPTERS.JS
========================================================= */


/* =========================================================
   CHAPTER DATA
========================================================= */

const chapters = {

    1: {
        title: "CHAPTER 1",
        subtitle: "THE BEGINNING",

        color: "#ffd900",

        background: "images/chapter-1-bg.png",
        entity: "images/chapter-1-entity.png",

        music: "sounds/The Infinite Nightmare Ost - Burning Memory (Fallen Down).mp3",

        story: `
You are playing as Michael Anderon, a person with a divorced wife and it is not known if he has kids or not.

There is only one opportunity for you to save yourself from living in the streets forever, and that is to work for M.E.G. (Major Explorer Group).

You talk with the manager, Shawn Franks, and come to an agreement.

You can already feel a shift in the tone of the place, as it is highly futuristic for that time, 1998.

But also, something feels off.

Some people have gone missing during M.E.G. missions. But Michael skips that.

After a few days, you get called up to a gas mask test, and before entering the test room, Shawn Franks looks at you weirdly.

Almost as if you are a test subject, going into a disturbing reality.

You enter the room, and the test begins.

Gas enters the room but you feel off.

You suddenly wake up in that same room with other M.E.G. workers looking at you while standing next to you, while the boss, Shawn Franks, is standing further away.

You leave the room and check the footage.

You collapsed.

Your mask failed.

But you skip it, saying that "it's just a technical issue."

After 3 days, you get picked for a M.E.G. mission on 9th of January 1998.

The quest is simple:

Explore and record the first three levels: Level 0, Pipe Dreams and Level Fun.

Seems pretty simple, right...?

Well.

You start the mission by the base where you open the elevator and head down to Level 0.

You are equipped with a hazmat suit, a flashlight and some almond water.

You encounter the Howler and a Partygoer, but you already knew they were going to be in your way since they were already documented as threats in the M.E.G. files.

But wait a second...

You take the exit in Level Fun, the one you were supposed to take.

But...

That exit doesn't take you back to the base.

You witness a new level, specifically Dark Poolrooms, and you just say:

"Oh well, the real exit is going to be in this level."

But you have been fooled.

You have fallen deeper down the rabbit hole.
`
    },


    2: {
        title: "CHAPTER 2",
        subtitle: "THE FACILITY",

        color: "#ff3030",

        background: "images/chapter-2-bg.png",
        entity: "images/chapter-2-entity.png",

        music: "sounds/Fallen Down Recreation.mp3",

        story: `
You fall deeper down the rabbit hole.

The protagonist, Michael Anderon, is clearly losing his mind.

He doesn't look like he can hold on for much longer.
`
    },


    3: {
        title: "CHAPTER 3",
        subtitle: "INSANITY",

        color: "#ff8c00",

        background: "images/Chapter_3_Thub.png",
        entity: "images/chapter-3-entity.png",

        music: "sounds/The Infinite Nightmare Ost - Insanity (The Piano Instrumetal).mp3",

        story: `
You get over the Redrooms, the Metro and the Monochrome Hallways.

Michael Anderon has lost a lot of sanity.

After all of this insanity that you went through, after all of these threats you had to survive...

Suddenly, the power transmission station in Electrical Station opens a light-powered gate, which you step into.

It leads you to reality.

You enter one of the M.E.G. bases, the Laboratory Base.

But it doesn't feel right.

Active red alarm lights are loud.

The place feels abandoned but at the same time not.

Some bodies are seen in the base.

You head forward towards the exit.

2:04 AM.

But you hear and see police cars outside the glass door.

They see you, and they try to talk to you, saying that they don't want to hurt you. They were just searching for you.

Which was the truth.

But Michael Anderon had lost a lot of his mind after all of that.

He didn't trust the police.

He panicked.

And ran back to the Backrooms.

One of the officers tried to go catch him but was stopped by his fellow officers.

They told him that Evan Brown, Michael's cousin and a detective, would handle the case.
`
    },


    4: {
        title: "CHAPTER 4",
        subtitle: "THE INFINITE DESCENT",

        color: "#258cff",

        background: "images/chapter-4-bg.png",
        entity: "images/chapter-4-entity.png",

        music: "sounds/The Infinite Nightmare Ost - The Infinite Descent.mp3",

        story: `
The protagonist shifts.

You are no longer playing as Michael Anderon, and you no longer know where he is, what he is doing or if he is even alive.

You now play as Evan Brown, a detective and the only cousin of Michael Anderon.

You tell the police to step aside; you want to take this case yourself.

You enter the Backrooms with one mission:

Find and escort Michael Anderon to end this misery once and for all.

Every single piece of evidence, every bit of research has led to the Laboratory Base, Echo Hollow, in the dead of night.

But what you see was not what you expected.

Michael Anderon was captured by a Wretch and is now deceased.

Evan Brown cannot handle this.

He has never experienced loss before.

He takes Michael to the police station, but the loss changes him forever.

In the end, Evan's fate remains unknown.

Leaving one final question...

But at what cost?...
`
    }

};


/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const chapterBackground =
    document.getElementById("chapterBackground");

const chapterEntity =
    document.getElementById("chapterEntity");

const chapterTitle =
    document.getElementById("chapterTitle");

const chapterSubtitle =
    document.getElementById("chapterSubtitle");

const chapterStory =
    document.getElementById("chapterStory");

const chapterButtons =
    document.querySelectorAll(".chapter-button");

const chapterMusic =
    document.getElementById("chapterMusic");

const speakerButton =
    document.getElementById("speakerButton");

const speakerText =
    document.getElementById("speakerText");

const loadingScreen =
    document.getElementById("loading-screen");


/* =========================================================
   VARIABLES
========================================================= */

let currentChapter = 1;

let isSpeaking = false;

let isChangingChapter = false;


/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loadingScreen) {
            loadingScreen.classList.add(
                "loading-finished"
            );
        }

    }, 2500);

});


/* =========================================================
   CHANGE CHAPTER
========================================================= */

function changeChapter(chapterNumber) {

    if (!chapters[chapterNumber]) {
        return;
    }

    if (isChangingChapter) {
        return;
    }

    if (chapterNumber === currentChapter) {
        return;
    }

    isChangingChapter = true;


    const chapter =
        chapters[chapterNumber];


    /* Stop narrator */

    stopSpeaker();


    /* Stop previous music */

    chapterMusic.pause();

    chapterMusic.currentTime = 0;


    /* Start visual transition */

    document.body.classList.add(
        "chapter-changing"
    );


    setTimeout(() => {

        currentChapter = chapterNumber;


        /* =====================================
           CHANGE BACKGROUND
        ====================================== */

        chapterBackground.style.backgroundImage =
            `url("${chapter.background}")`;


        /* =====================================
           CHANGE ENTITY
        ====================================== */

        chapterEntity.style.opacity = "0";

        chapterEntity.src =
            chapter.entity;


        chapterEntity.onload = () => {

            setTimeout(() => {

                chapterEntity.style.opacity =
                    "1";

            }, 50);

        };


        /* =====================================
           CHANGE TITLE
        ====================================== */

        chapterTitle.textContent =
            chapter.title;

        chapterSubtitle.textContent =
            chapter.subtitle;


        /* =====================================
           CHANGE STORY
        ====================================== */

        chapterStory.textContent =
            chapter.story.trim();


        /* =====================================
           CHANGE COLOR
        ====================================== */

        document.documentElement.style
            .setProperty(
                "--chapter-color",
                chapter.color
            );


        /* =====================================
           UPDATE BUTTONS
        ====================================== */

        chapterButtons.forEach(button => {

            button.classList.remove("active");

            const number =
                Number(
                    button.dataset.chapter
                );

            if (number === chapterNumber) {

                button.classList.add("active");

            }

        });


        /* =====================================
           CHANGE MUSIC
        ====================================== */

        chapterMusic.src =
            chapter.music;

        chapterMusic.load();

        chapterMusic.volume = 0.45;


        /*
            Browser autoplay can block this.
            The music will start after the
            user's first interaction if blocked.
        */

        const playPromise =
            chapterMusic.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {

                console.log(
                    "Music waiting for user interaction."
                );

            });

        }


        /* =====================================
           FINISH TRANSITION
        ====================================== */

        setTimeout(() => {

            document.body.classList.remove(
                "chapter-changing"
            );

            isChangingChapter = false;

        }, 500);

    }, 450);

}


/* =========================================================
   CHAPTER BUTTON EVENTS
========================================================= */

chapterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const chapterNumber =
                Number(
                    button.dataset.chapter
                );

            changeChapter(
                chapterNumber
            );

        }
    );

});


/* =========================================================
   SPEAKER
========================================================= */

function stopSpeaker() {

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

    }

    isSpeaking = false;

    if (speakerText) {

        speakerText.textContent =
            "READ STORY";

    }

    if (speakerButton) {

        speakerButton.classList.remove(
            "speaking"
        );

    }

}


/* =========================================================
   READ CURRENT CHAPTER
========================================================= */

function readCurrentChapter() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Your browser does not support the story speaker."
        );

        return;

    }


    /* If currently speaking -> stop */

    if (isSpeaking) {

        stopSpeaker();

        return;

    }


    const chapter =
        chapters[currentChapter];


    const text =
        chapter.story.trim();


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    /* =====================================
       VOICE SETTINGS
    ====================================== */

    const voices =
        window.speechSynthesis
            .getVoices();


    /*
        Try to find a deeper / male-sounding
        English voice when the browser provides one.
    */

    const preferredVoice =
        voices.find(
            voice =>
                voice.lang
                    .toLowerCase()
                    .startsWith("en") &&
                /david|mark|daniel|george|alex|male/i
                    .test(voice.name)
        );


    if (preferredVoice) {

        speech.voice =
            preferredVoice;

    }


    speech.lang = "en-US";

    speech.rate = 0.88;

    speech.pitch = 0.8;

    speech.volume = 1;


    /* =====================================
       SPEAKER START
    ====================================== */

    speech.onstart = () => {

        isSpeaking = true;

        speakerText.textContent =
            "STOP SPEAKER";

        speakerButton.classList.add(
            "speaking"
        );

    };


    /* =====================================
       SPEAKER FINISHED
    ====================================== */

    speech.onend = () => {

        stopSpeaker();

    };


    /* =====================================
       SPEAKER ERROR
    ====================================== */

    speech.onerror = () => {

        stopSpeaker();

    };


    window.speechSynthesis.speak(
        speech
    );

}


/* =========================================================
   SPEAKER BUTTON
========================================================= */

speakerButton.addEventListener(
    "click",
    readCurrentChapter
);


/* =========================================================
   INITIAL CHAPTER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            Chapter 1 is selected when
            the page opens.
        */

        const firstChapter =
            chapters[1];


        chapterBackground.style.backgroundImage =
            `url("${firstChapter.background}")`;


        chapterEntity.src =
            firstChapter.entity;


        chapterTitle.textContent =
            firstChapter.title;


        chapterSubtitle.textContent =
            firstChapter.subtitle;


        chapterStory.textContent =
            firstChapter.story.trim();


        document.documentElement.style
            .setProperty(
                "--chapter-color",
                firstChapter.color
            );


        chapterMusic.src =
            firstChapter.music;


        chapterMusic.volume =
            0.45;


        /*
            Don't force autoplay on page load.
            Browser policies can block it.
        */

    }
);


/* =========================================================
   START MUSIC AFTER FIRST USER INTERACTION
========================================================= */

document.addEventListener(
    "click",
    () => {

        if (
            chapterMusic &&
            chapterMusic.paused
        ) {

            const playPromise =
                chapterMusic.play();

            if (
                playPromise !== undefined
            ) {

                playPromise.catch(
                    () => {}
                );

            }

        }

    },
    {
        once: true
    }
);


/* =========================================================
   PRELOAD CHAPTER ASSETS
========================================================= */

function preloadChapterAssets() {

    Object.values(chapters)
        .forEach(chapter => {

            const background =
                new Image();

            background.src =
                chapter.background;


            const entity =
                new Image();

            entity.src =
                chapter.entity;

        });

}


/* Start preloading */

preloadChapterAssets();
