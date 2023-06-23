const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Tên Pháp Sư (nhấn số): \n ' +
    '1. Pháp sư Ấn Quang\n' +
    '2. Pháp sư Tịnh Không\n' +
    '3. Pháp sư Tuyên Hoá\n' +
    '4. Hoà thượng Thích Giác Khang: ', (author_short) => {
    rl.question('Enter the title: ', (title) => {
        let authorName = "";
        switch (author_short) {
            case "1":
                authorName = "Pháp sư Ấn Quang";
                break;
            case "2":
                authorName = "Pháp sư Tịnh Không";
                break;
            case "3":
                authorName = "Pháp sư Tuyên Hoá";
                break;
            case "4":
                authorName = "Hoà thượng Thích Giác Khang";
                break;
            default:
                authorName = "";
        }
        const fileContent = `---
layout: post
author: ${authorName}
title: ${title}
category: khai_thi
author_short: ${author_short}
---`;
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const day = today.getDate();

        const fileName = `${year}-${month}-${day}-${title.toLowerCase().replace(/ /g, '-')}.md`;
        const filePath = `_posts/${fileName}`;
        fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
                console.error('Error creating the file:', err);
            } else {
                console.log(`File "${fileName}" with the specified content has been created successfully.`);
            }
            rl.close();
        });
    });
});
