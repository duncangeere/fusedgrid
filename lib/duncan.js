function refreshMe() {

    while (r.stage.children.length > 0) {
        for (let i = 0; i < r.stage.children.length; i++) {
            r.stage.remove(r.stage.children[i])
        }
    }

    graphic();
    r.draw();
}

function downloadMe() {
    download(document.querySelector("svg").outerHTML, "sketch.svg", "image/svg+xml")
}

function toPixels (num) {
	return num * 3.7795;
}