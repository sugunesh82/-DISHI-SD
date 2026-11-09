function openPortal() {
    document.body.innerHTML = `
    <style>
    body {
        background:#080611;
        color:white;
        font-family:Poppins,sans-serif;
    }
    .portal {
        min-height:100vh;
        padding:45px 20px;
        text-align:center;
        animation:appear 1s ease;
    }
    @keyframes appear {
        from {opacity:0;transform:translateY(25px)}
        to {opacity:1;transform:translateY(0)}
    }
    h1 {
        font-size:clamp(30px,7vw,48px);
        background:linear-gradient(90deg,#ff853d,#bd80ff);
        -webkit-background-clip:text;
        color:transparent;
    }
    .memory-grid,.gallery {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:14px;
        max-width:700px;
        margin:35px auto;
    }
    .memory-card,.photo-card {
        background:linear-gradient(145deg,#291634,#171027);
        border:1px solid #8c59ad66;
        border-radius:18px;
        padding:22px 8px;
        color:white;
        cursor:pointer;
        transition:.4s;
    }
    .memory-card:hover,.photo-card:hover {
        transform:translateY(-7px);
        box-shadow:0 0 25px #a34dff55;
    }
    .memory-card span {font-size:35px}
    .memory-card p {font-size:11px}
    #message {
        color:#ffad75;
        line-height:2;
        margin:20px auto;
    }
    .photo-card {
        min-height:150px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        cursor:default;
        background:linear-gradient(140deg,#472052,#9a492c);
    }
    .photo-card span {font-size:40px}
    .photo-card p {font-size:11px}
    .action {
        background:linear-gradient(100deg,#ff792d,#812aff);
        border:0;
        border-radius:40px;
        padding:14px 25px;
        color:white;
        font-weight:bold;
        margin:20px 0;
        cursor:pointer;
    }
    @media(max-width:450px) {
        .memory-grid,.gallery {gap:7px}
        .photo-card {min-height:120px}
    }
    </style>

    <div class="portal">
        <div style="font-size:55px">🦋</div>
        <p style="color:#bd80ff;letter-spacing:3px;font-size:10px">
            SECRET MEMORY ARCHIVE
        </p>
        <h1>Little Pieces of Magic</h1>
        <p>Three little surprises are waiting for you, DISHI 🫧</p>

        <div class="memory-grid">
            <button class="memory-card" onclick="showMemory(1)">
                <span>🧡</span><p>Little Happiness</p>
            </button>
            <button class="memory-card" onclick="showMemory(2)">
                <span>💜</span><p>Special Moments</p>
            </button>
            <button class="memory-card" onclick="showMemory(3)">
                <span>🪐:)</span><p>One Secret</p>
            </button>
        </div>

        <div id="message">Choose a memory to unlock its message.</div>
        <button class="action" onclick="openGallery()">
            Enter Memory Gallery ✨
        </button>
    </div>
    `;
}

function showMemory(number) {
    const messages = {
        1:"Some people bring happiness without even trying. You are one of them. 🧡",
        2:"Every special moment deserves to be remembered. Today is all about you. 💜",
        3:"One more surprise is waiting beyond these memories. 🎁"
    };

    document.getElementById("message").innerHTML = messages[number];
}

function openGallery() {

    document.body.innerHTML = `
    <style>
        body {
            background:#080611;
            color:white;
            font-family:Poppins,sans-serif;
        }

        .portal {
            min-height:100vh;
            padding:45px 20px;
            text-align:center;
        }

        .gallery {
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
            gap:20px;
            max-width:850px;
            margin:35px auto;
        }

        .photo-card {
            background:linear-gradient(145deg,#291634,#171027);
            border:1px solid #8c59ad66;
            border-radius:20px;
            padding:12px;
            overflow:hidden;
            transition:.4s;
        }

        .photo-card:hover {
            transform:translateY(-8px);
            box-shadow:0 0 25px #a34dff66;
        }

        .photo-card img {
            width:100%;
            height:260px;
            object-fit:cover;
            border-radius:14px;
        }

        .photo-card p {
            color:#ffad75;
        }

        .action {
            background:linear-gradient(100deg,#ff792d,#812aff);
            border:0;
            border-radius:40px;
            padding:14px 25px;
            color:white;
            font-weight:bold;
            margin:20px 0;
            cursor:pointer;
        }
    </style>

    <div class="portal">

        <p style="letter-spacing:3px;color:#bd80ff">
            YOUR LITTLE UNIVERSE
        </p>

        <h1>Memories of 🦋DISHI🫧</h1>

        <p>Every picture has a story. Every memory has a feeling.</p>

        <div class="gallery">

            <div class="photo-card" onclick="openPhoto('photo1.jpeg')">
                <img src="./photo1.jpeg" alt="Memory One">
                <p>Memory One 🧡</p>
            </div>

            <div class="photo-card" onclick="openPhoto('photo2.jpeg')">
                <img src="./photo2.jpeg" alt="Memory Two">
                <p>Memory Two 💜</p>
            </div>

            <div class="photo-card" onclick="openPhoto('photo3.jpeg')">
                <img src="./photo3.jpeg" alt="Memory Three">
                <p>Memory Three 🦋</p>
            </div>

        </div>

        <button class="action" onclick="startSlideshow()">
            Watch Our Memories 🎬
        </button>

        <button class="action" onclick="openFinale()">
            Reveal Your Birthday Surprise ✨
        </button>

    </div>
    `;
}


function openPhoto(src) {
    const viewer = document.createElement("div");

    viewer.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.95);
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        z-index:9999;
        padding:20px;
    `;

    viewer.innerHTML = `
        <span style="color:white;font-size:35px;cursor:pointer;"
        onclick="this.parentElement.remove()">×</span>

        <img src="./${src}"
        style="max-width:90%;max-height:80vh;
        object-fit:contain;border-radius:15px;">
    `;

    document.body.appendChild(viewer);
}
   function startSlideshow() {
   
const photos = [
    "./photo1.jpeg",
    "./photo2.jpeg",
    "./photo3.jpeg"
];


    let index = 0;

    const viewer = document.createElement("div");

    viewer.style.cssText = `
        position:fixed;
        inset:0;
        background:#080611;
        z-index:9999;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px;
        text-align:center;
    `;

    viewer.innerHTML = `
        <h2 style="color:#ffad75">Our Little Memories 🦋</h2>
        <img id="slidePhoto" src="${photos[0]}"
        style="width:90%;max-width:500px;height:65vh;
        object-fit:contain;border-radius:18px;
        transition:opacity 1s;">
        <p id="slideCount" style="color:white">1 / 3</p>
        <button class="action" onclick="this.parentElement.remove()">
            Close ✕
        </button>
    `;

    document.body.appendChild(viewer);

    const timer = setInterval(() => {
        if (!viewer.isConnected) {
            clearInterval(timer);
            return;
        }

        index = (index + 1) % photos.length;

        const img = viewer.querySelector("#slidePhoto");
        img.style.opacity = 0;

        setTimeout(() => {
            if (!viewer.isConnected) return;

            img.src = photos[index];
            img.style.opacity = 1;

            viewer.querySelector("#slideCount").textContent =
                `${index + 1} / ${photos.length}`;
        }, 500);

    }, 3000);
} 
function openFinale() {

    document.body.innerHTML = `
    <style>
        body {
            background:#080611;
            color:white;
            font-family:Poppins,sans-serif;
        }

        .finale {
            min-height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            padding:25px;
            animation:fadeIn 2s ease;
        }

        @keyframes fadeIn {
            from {opacity:0; transform:scale(.9)}
            to {opacity:1; transform:scale(1)}
        }

        .finale h1 {
            font-size:clamp(35px,8vw,65px);
            background:linear-gradient(90deg,#ff853d,#bd80ff);
            -webkit-background-clip:text;
            color:transparent;
        }

        .finale p {
            color:#e2d5f5;
            line-height:2;
        }

        .butterfly {
            font-size:65px;
            animation:float 3s infinite ease-in-out;
        }

        @keyframes float {
            50% {transform:translateY(-20px) rotate(10deg)}
        }

        .birthday-btn {
            margin-top:30px;
            padding:15px 28px;
            border:0;
            border-radius:40px;
            color:white;
            background:linear-gradient(90deg,#ff7828,#842cff);
            cursor:pointer;
        }

        #birthdayMessage {
            margin-top:30px;
            max-width:500px;
            color:#ffb27d;
            display:none;
        }
    </style>

    <div class="finale">

        <div class="butterfly">🦋</div>

        <p style="letter-spacing:4px;color:#bd80ff">
            A SPECIAL MOMENT
        </p>

        <h1>Happy Birthday</h1>

        <h2 style="color:#ff9b59;margin:15px">
            🦋DISHITHA🫧
        </h2>

        <p>
            Today is not just another day...
            <br>
            It's a celebration of someone special.
        </p>

        <button class="birthday-btn"
            onclick="revealMessage()">
            Open Your Birthday Wish 🎁
        </button>

        <div id="birthdayMessage">
            <h2>Dear DISHI 🧡💜</h2>
            <p>
                May your life always be filled with
                happiness, beautiful memories and
                endless reasons to smile.
                <br><br>
                You deserve all the wonderful things
                life has to offer.
                <br><br>
                HAPPY BIRTHDAY! 🦋🫧
            </p>
            <h1>✨🧡💜✨</h1>
            </div>
            <div id="cinematicSection" style="display:none; margin-top:40px; max-width:600px;">

    <h2 style="color:#ff9b59;">
        🎬 A Little Movie For You
    </h2>

    <p>
        Every picture has a story...
        Every memory has a meaning.
    </p>

    <video id="birthdayVideo" controls width="100%" style="border-radius:18px;">
    <source src="/birthday.mp4" type="video/mp4">
    Your browser does not support video.
</video>

    <p style="color:#bd80ff;">
        Made with 🧡 and 💜 for 🦋DISHI🫧
    </p>
        </div>

    </div>
    `;
}

function revealMessage() {

    const birthdayMessage = document.getElementById("birthdayMessage");
    const cinematicSection = document.getElementById("cinematicSection");

    birthdayMessage.style.display = "block";
    cinematicSection.style.display = "block";

    const video = document.getElementById("birthdayVideo");
    const music = window.birthdayMusic;

    if (music) {

        video.addEventListener("play", () => {
            music.pause();
        });

        video.addEventListener("ended", () => {
            music.play().catch(error => {
                console.log("Music playback:", error);
            });
        });

        video.addEventListener("pause", () => {
            if (!video.ended) {
                music.play().catch(error => {
                    console.log("Music playback:", error);
                });
            }
        });
    }

    setTimeout(() => {
        cinematicSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 500);

}
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        const music = new Audio("./birthday-music.mp3");

        music.loop = true;
        music.volume = 0.6;
        window.birthdayMusic = music;

        music.play().catch(error => {
            console.log("Music playback:", error);
        });

        openPortal();
    });
}

