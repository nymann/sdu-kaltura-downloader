document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function(){
            chrome.runtime.getBackgroundPage(function (bagroundPage) {
            m3u8_files = bagroundPage.m3u8_files;
            download();
        });
    });
})

function download() {
    if (m3u8_files.length === 0) {
        return;
    }
    var url_to_dl = m3u8_files.pop();
    chrome.downloads.download({
        url: url_to_dl
    });
}