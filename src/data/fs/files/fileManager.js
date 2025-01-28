const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/books.json');

// Leer archivo JSON
const readFile = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error leyendo el archivo:', error);
        return [];
    }
};

// Escribir en archivo JSON
const writeFile = async (data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error escribiendo en el archivo:', error);
    }
};

module.exports = { readFile, writeFile };
