function parseURL(url) {
    let urlObj = new URL(url);
    return {
        protocol: urlObj.protocol,
        host: urlObj.hostname,
        path: urlObj.pathname,
        query: urlObj.search
    };
}

console.log(parseURL("https://example.com/page?name=riya"));