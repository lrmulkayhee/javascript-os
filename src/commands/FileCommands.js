const fs = require('fs');
const path = require('path');

function createFile(os, filename) {
    const filePath = path.join(os.fileSystemRoot, filename);
    fs.writeFileSync(filePath, '', 'utf8');
    console.log(`File ${filename} created.`);
}

function readFile(os, filename) {
    const filePath = path.join(os.fileSystemRoot, filename);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(content);
    } else {
        console.log(`File ${filename} does not exist.`);
    }
}

function writeFile(os, filename, content) {
    const filePath = path.join(os.fileSystemRoot, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File ${filename} written.`);
}

function deleteFile(os, filename) {
    const filePath = path.join(os.fileSystemRoot, filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`File ${filename} deleted.`);
    } else {
        console.log(`File ${filename} does not exist.`);
    }
}

module.exports = { createFile, readFile, writeFile, deleteFile };