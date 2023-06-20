const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name of the file (e.g., 2023-06-20-abc.md): ', (fileName) => {
    rl.question('Enter the author name: ', (authorName) => {
        rl.question('Enter the title: ', (title) => {
            const fileContent = `---
layout: post
author: ${authorName}
title: ${title}
---`;

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
});
