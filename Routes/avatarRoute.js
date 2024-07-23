const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('avatar');

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Upload route
router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Upload Error:', err);
            res.status(400).json({ mssg: err });
        } else {
            if (req.file === undefined) {
                console.error('No file selected');
                res.status(400).json({ mssg: 'No file selected!' });
            } else {
                const avatarUrl = `uploads/${req.file.filename}`;
                console.log('File uploaded successfully:', avatarUrl);
                res.status(200).json({
                    mssg: 'File uploaded!',
                    file: avatarUrl
                });
            }
        }
    });
});

module.exports = router;
