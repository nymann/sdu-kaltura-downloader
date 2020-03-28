m3u8_files = [];

console.log("SDU BB Vod downloader is running.");
chrome.tabs.query({active: true}, function(tabs){
chrome.webRequest.onBeforeRequest.addListener(function(details){
        var url = details.url;
    if (url.includes("a.m3u8")){
        console.log("Logged something from SDU BB Vod downloader.");
        console.log(details.url);
        console.log("-----------------------");
        if (m3u8_files.includes(url)) {
            return;
        }
        m3u8_files.push(url);
    }
},
{urls: ["<all_urls>"]});
})