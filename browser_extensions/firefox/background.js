m3u8_files = [];

function logRequest(requestDetails) {
    var url = requestDetails.url;
    if (url.includes("a.m3u8")) {
        console.log("Logged something from SDU BB Vod downloader.");
        console.log(requestDetails.url);
        console.log("-----------------------");
        if (m3u8_files.includes(url)) {
            return;
        }
        m3u8_files.push(url);
    }
}

function download() {
    if (m3u8_files.length === 0) {
        return;
    }
    var url_to_dl = m3u8_files.pop();
    browser.tabs.create({
        url: url_to_dl,
    });
}

console.log("SDU BB Vod downloader is running.");
browser.webRequest.onBeforeRequest.addListener(logRequest, {
    urls: ["<all_urls>"],
});

browser.browserAction.onClicked.addListener(download);
