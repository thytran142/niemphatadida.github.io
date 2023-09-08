const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { Builder } = require('xml2js');


const postsDir = '_posts';
const sitemapPath = 'site.xml';

// Function to sanitize title to make it a valid filename
const sanitizeTitle = (title) => {
    return title.replace(/ /g, '-').replace(/\//g, '-');
};

// Read all files in the _posts directory
fs.readdir(postsDir, (err, files) => {
    if (err) {
        return console.error('Could not read the directory:', err);
    }

    const urlset = { url: [] };

    files.forEach((file) => {
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Parse front matter to get the title
        const { data: { title } } = matter(fileContent);

        // Extract the date part from the filename (assumes the date is in YYYY-MM-DD format)
        const datePart = file.split('-').slice(0, 3).join('-');

        // Create new filename
        const newFileName = `${datePart}-${sanitizeTitle(title)}.md`;
        const newFilePath = path.join(postsDir, newFileName);

        // Rename the file
        fs.renameSync(filePath, newFilePath);

        // Update sitemap
        const loc = `https://niemphatadida.com/${newFileName.replace('.md', '.html')}`;
        const lastmod = datePart;
        urlset.url.push({ loc, lastmod });
    });

    // Generate the new sitemap
    const builder = new Builder();
    const sitemapXML = builder.buildObject({ urlset });
    fs.writeFileSync(sitemapPath, sitemapXML);
});
