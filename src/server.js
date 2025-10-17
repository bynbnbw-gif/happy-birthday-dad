// src/server.js - שרת Node.js המשתמש ב-Express
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// הגדרת הנתיב לתיקיית public שבה נמצאים הקבצים הסטטיים (כולל index.html)
// הנחת עבודה: הקובץ server.js נמצא ב-src/ וצריך לחזור אחורה תיקייה אחת כדי להגיע ל-public
const publicPath = path.join(__dirname, '..', 'public');

// הגשת קבצים סטטיים מהתיקייה 'public'.
// Express מגיש אוטומטית את index.html אם נכנסים לנתיב הבסיס (http://localhost:3000/)
app.use(express.static(publicPath));

// הפעלת השרת והאזנה לפורט
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Serving static files from: ${publicPath}`);
  console.log('To stop the server, press Ctrl+C');
});
