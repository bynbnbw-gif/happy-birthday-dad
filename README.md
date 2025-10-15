
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>יום הולדת שמח, ינאי!</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Assistant', sans-serif;
            overflow-x: hidden; /* מונע גלילה אופקית בגלל הקונפטי */
        }
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: #f00;
            opacity: 0.7;
            border-radius: 50%;
            animation: fall 5s linear infinite;
            top: -20px; /* מתחיל מעל המסך */
        }
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        blockquote {
            background-color: #f8fafc;
            border-right: 5px solid #0ea5e9;
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0 8px 8px 0;
        }
        blockquote p {
            font-style: italic;
        }
        blockquote footer {
            text-align: left;
            margin-top: 0.5rem;
            font-weight: bold;
            color: #475569;
        }
    </style>
</head>
<body class="bg-slate-100 text-slate-800">

    <div id="confetti-container"></div>

    <div class="container mx-auto p-4 md:p-8 max-w-4xl">
        
        <!-- כותרת ראשית -->
        <header class="text-center my-8 md:my-12">
            <h1 class="text-4xl md:text-6xl font-bold text-sky-600">יום הולדת שמח, ינאי!</h1>
            <p class="text-2xl md:text-3xl mt-4 text-slate-600">חוגגים לך יום הולדת 44!</p>
        </header>

        <main>
            <!-- קטע ברכה אישית -->
            <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 text-center">
                <h2 class="text-2xl font-bold mb-4 text-sky-800">ברכה אישית ממני</h2>
                <p class="text-lg leading-relaxed">
                    ינאי היקר, רציתי לאחל לך את כל הטוב שבעולם. אתה האבא הכי מדהים שיש, תמיד תומך, מלמד ומצחיק.
                    אני כל כך מעריך את כל מה שעשית ואתה עושה בשבילי ובשביל כולנו. מאחל לך שנים רבות של בריאות, אושר, נחת והגשמת כל החלומות.
                    אוהב המון,
                </p>
                <p class="mt-4 font-bold text-xl">- השם שלך -</p>
            </section>

            <!-- אזור הברכות - יתמלא דינמית -->
            <section id="blessings-container" class="mb-8">
                <!-- ברכות שיתווספו על ידי משתמשים יופיעו כאן -->
            </section>

            <!-- גלריית תמונות -->
            <section class="mb-8">
                <h2 class="text-3xl font-bold text-center mb-6 text-sky-800">גלריית זיכרונות</h2>
                <div id="gallery-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <!-- תמונות קיימות -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/3498db/ffffff?text=תמונה+משפחתית" alt="תמונה משפחתית" class="w-full h-48 object-cover">
                        <p class="p-3 text-center text-slate-600">תיאור קצר של התמונה</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/e74c3c/ffffff?text=תמונה+מטיול" alt="תמונה מטיול" class="w-full h-48 object-cover">
                        <p class="p-3 text-center text-slate-600">עוד זיכרון מתוק</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/2ecc71/ffffff?text=תמונה+מצחיקה" alt="תמונה מצחיקה" class="w-full h-48 object-cover">
                        <p class="p-3 text-center text-slate-600">וכמובן תמונה מצחיקה</p>
                    </div>
                     <!-- תמונות שיתווספו על ידי משתמשים יופיעו כאן -->
                </div>
            </section>

             <!-- טופס הוספת ברכה ותמונה -->
            <section class="bg-sky-50 rounded-lg shadow-lg p-6 md:p-8 text-center border-2 border-sky-200">
                <h2 class="text-2xl font-bold mb-4 text-sky-800">הוסיפו ברכה ותמונה משלכם!</h2>
                <form id="blessing-form" class="flex flex-col gap-4 max-w-lg mx-auto text-right">
                    <input type="text" id="sender-name" placeholder="השם שלכם" class="w-full p-2 border border-slate-300 rounded-md" required>
                    <textarea id="blessing-text" placeholder="הברכה שלכם..." rows="4" class="w-full p-2 border border-slate-300 rounded-md"></textarea>
                    <div>
                        <label for="image-upload" class="block mb-2 font-medium">רוצים להוסיף גם תמונה?</label>
                        <input type="file" id="image-upload" accept="image/*" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200">
                    </div>
                    <button type="submit" class="bg-sky-600 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition-colors duration-300 text-lg shadow-md w-full">
                        הוסיפו את הברכה
                    </button>
                </form>
                <p id="success-message" class="text-green-600 mt-4 font-bold hidden">תודה! הברכה נוספה בהצלחה.</p>
            </section>
        </main>
        
        <footer class="text-center mt-12 mb-6">
            <p class="text-slate-500">נבנה באהבה על ידי <span class="font-bold">השם שלך</span>, 2025</p>
        </footer>

    </div>

    <script>
        // סקריפט קונפטי
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('confetti-container');
            const confettiCount = 100;
            const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = `${Math.random() * 100}vw`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = `${Math.random() * 5}s`;
                const size = Math.random() * 5 + 5;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                container.appendChild(confetti);
            }
        });

        // סקריפט לטופס הוספת ברכה
        const blessingForm = document.getElementById('blessing-form');
        const blessingsContainer = document.getElementById('blessings-container');
        const galleryContainer = document.getElementById('gallery-container');
        const successMessage = document.getElementById('success-message');

        blessingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const senderName = document.getElementById('sender-name').value;
            const blessingText = document.getElementById('blessing-text').value;
            const imageFile = document.getElementById('image-upload').files[0];

            // הוספת הברכה
            if (blessingText.trim() !== '') {
                const newBlessing = document.createElement('blockquote');
                newBlessing.innerHTML = `
                    <p>"${blessingText}"</p>
                    <footer>- ${senderName}</footer>
                `;
                blessingsContainer.appendChild(newBlessing);
            }

            // הוספת התמונה
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newImageContainer = document.createElement('div');
                    newImageContainer.className = 'bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300';
                    newImageContainer.innerHTML = `
                        <img src="${e.target.result}" alt="תמונה מ-${senderName}" class="w-full h-48 object-cover">
                        <p class="p-3 text-center text-slate-600">תמונה חדשה מ: ${senderName}</p>
                    `;
                    galleryContainer.appendChild(newImageContainer);
                }
                reader.readAsDataURL(imageFile);
            }
            
            // הצגת הודעת הצלחה ואיפוס הטופס
            successMessage.classList.remove('hidden');
            setTimeout(() => { successMessage.classList.add('hidden'); }, 3000);
            blessingForm.reset();
        });
    </script>

</body>
</html>
