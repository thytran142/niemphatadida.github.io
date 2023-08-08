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
    '4: Hoà thượng Thích Giác Khang: ' +
    '5. An Sĩ Toàn Thư (sách)' +
    '6. Viên Liễu Phàm - Trích từ sách Liễu Phàm Tứ Huấn',


    (author_short) => {
    rl.question('Enter the title: ', (title) => {
        let authorName = "";
        let quote = null;
        let translateBy = null;
        let giaochanh = null;
        switch (author_short) {
            case "1":
                authorName = "Pháp sư Ấn Quang";
                quote = "Trích từ Ấn Quang Pháp Sư Văn Sao Tam Biên";
                translateBy = " Bửu Quang tự đệ tử Như Hoà";
                giaochanh = "Minh Tiến và Huệ Trang, theo bản in của Cổ Tấn Báo Ân Niệm Phật Đường, năm 2002.";
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
            case "5":
                authorName = "An Sĩ Toàn Thư (sách)";
                break;
            case "6":
                authorName = "Viên Liễu Phàm";
                quote = "Trích từ sách Liễu Phàm Tứ Huấn";
                translateBy = "Tuệ Châu - Bùi Dư Long";
                giaochanh = "Ấn Quang Đại Sư";
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
quote: ${quote}
translateBy: ${translateBy}
giaochanh: ${giaochanh}
---`;
        const today = new Date();
        let month = today.getMonth() + 1;
        const year = today.getFullYear();
        let day = today.getDate();
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
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
