const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve halaman form
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
    
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    res.send(`Terima kasih, ${username}. Data telah diterima.`);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
