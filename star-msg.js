
    // Romantic messages for the stars
    const messages = [
        "saiba, you are the brightest star in my sky! ✨",
        "Every night, I wish upon a star for you. 💖",
        "Like the moon in Ramadan, you illuminate my world. 🌙",
        "You are my dua come true, my love. ❤️",
        "I love you more than all the stars in the sky. 🌟",
        "My heart twinkles for you, just like these stars. ✨",
        "You are the moon to my Ramadan nights. 🌙",
        "Every prayer I make, I thank Allah for you. 💕",
        "Like the crescent moon, my love for you grows each day. 🥰",
        "saiba, you are the Noor (light) of my heart. 💖",
        "If I could, I’d capture all the stars just to see you smile. ✨",
        "You are the dua I never stop making. 🤲💖",
"My heart finds peace in your presence, just like sujood brings peace to my soul. 🕌💕",
"Like the Kaaba is the center of our faith, you are the center of my heart. 🖤",
"With every sunrise and every prayer, I fall deeper in love with you. ☀️🕋",
"Your love is sweeter than the dates of Iftar. 🌙❤️",
"saiba, you are my answered prayer, my greatest blessing. 🙏💞",
"Like the Quran soothes the soul, your love soothes my heart. 📖💖",
"Every time I see you, my heart whispers, ‘SubhanAllah.’ ✨🥰",
"Like Laylatul Qadr, you are rare and precious to me. 🌙💛",
"You are my Eid after every hardship. 🎉💕",
"Just like wudu purifies, your love cleanses my heart. 💦❤️",
"Allah created you, and in you, He placed my happiness. 🌷😊",
"You are my moon in the darkest nights, my guiding light. 🌙💙",
"Your love is like the Adhan—always calling me home. 📢💞",
"I ask Allah to keep us together in this life and reunite us in Jannah. 🕊️💑",
"Loving you is like performing Tawaf—pure, beautiful, and endless. 🤍",
"My love for you is like my faith—it only strengthens with time. ⏳💕",
"You are my Ramadan—beautiful, peaceful, and a blessing. 🌙💖",
"Like the stars fill the night sky, you fill my heart with light. ✨❤️",
"If love had a fragrance, yours would be like musk from Jannah. 🌹💘",
"You are my favorite verse in the story of my life. 📖💛",
"Like the gentle whisper of the wind, your love soothes my soul. 🍃💗",
"Even if the whole world forgets me, I pray Allah never separates me from you. 🤲💞",
"I found my missing piece when I found you. 🧩💖",
"You are my Jannah in this dunya. 🏡💛",
"Like Zamzam quenches thirst, your love quenches my soul. 💦💕",
"I love you for the sake of Allah, and in that love, I find peace. ☮️💖",
"Like the rain after a long drought, your love revives me. 🌧️❤️",
"You are the du’a I never knew I needed. 🌿💞",
"Every test of life feels easier because I have you. 🎗️💗",
"In every prostration, I whisper a prayer for us. 🕌💑",
"Allah wrote our love story long before we met. 📜💛",
"The love between us is like a well-written Surah—pure and timeless. 🕋💖",
"Your kindness is the most beautiful Sunnah you practice. ☀️💗",
"Like an unbroken fast, my love for you remains steadfast. 🌙💕",
"Aabbcc, your love is the bridge that connects my heart to Jannah. 🌉💞",
"If love had a color, yours would be the golden glow of Fajr. 🌅💖",
"You are the peace after a long night of tahajjud. 🕌💙",
"You are the Bismillah to my every new beginning. 📖💕",
"Loving you is an act of worship my heart performs every day. 💝",
"Your smile is my favorite Sadaqah. 😊💖",
"Like the crescent moon of Eid, you bring me joy and hope. 🌙💛",
"You are the chapter in my life I never want to end. 📖❤️",
"Your love is a melody that my heart sings in sujood. 🎶💖",
"Like a beautiful Ayah, you bring meaning to my life. 📜💞",
"You are the light in my darkest moments, my Noor. 💡💗",
"Even if this world separates us, I pray to meet you in Jannah. 🤲💕",
"You are my faith’s companion, my partner in this life and the next. 💑💖",
"If I had to choose between the world and you, I’d choose you every time. 🌍💘",
"Like the call to prayer, your love calls my heart to peace. 📢❤️",
    ];


    function createStars() {
        const starsContainer = document.getElementById("stars-container");
    
        for (let i = 0; i < 8; i++) { // Number of stars
            let star = document.createElement("div");
            star.classList.add("star");
            star.innerText = "⭐";
    
            // Adjust for mobile screens
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;
    
            if (screenWidth < 600) {  // Mobile screen adjustments
                star.style.left = Math.random() * 80 + "vw"; // Adjusted width range
                star.style.top = Math.random() * 40 + "vh";  // Adjusted height range
            } else {
                star.style.left = Math.random() * 90 + "%";
                star.style.top = Math.random() * 60 + "%";
            }
    
            // Show a random message when clicked
            star.onclick = function() {
                alert(messages[Math.floor(Math.random() * messages.length)]);
            };
    
            starsContainer.appendChild(star);
        }
    }
    
    createStars();
    