import axios from 'axios';
import cheerio from 'cheerio';

async function performWebSearch(query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(searchUrl);
        const urls = extractSearchResultUrls(response.data);
        return urls;
    } catch (error) {
        console.error('Error performing web search:', error);
        return [];
    }
}

function extractSearchResultUrls(html) {
    const $ = cheerio.load(html);
    const urls = [];

    $('a').each((index, element) => {
        const href = $(element).attr('href');
        if (href && href.startsWith('http')) {
            const url = new URL(href);
            urls.push(url.href);
        }
    });

    return urls;
}

export async function main() {
    const query = 'jewelry';
    const searchResults = await performWebSearch(query);
    const topWebsites = searchResults.slice(0, 3);
    console.log('Top search results:', topWebsites);
}
