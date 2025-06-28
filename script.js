document.addEventListener("DOMContentLoaded", () => {
    const links = [
        "https://downloadwella.com/egb7ar1z2zux/Squid.Game.S03E01.(NKIRI.COM).mkv.html",
        "https://downloadwella.com/h9fpz3tlbqjm/Squid.Game.S03E02.(NKIRI.COM).mkv.html",
        "https://downloadwella.com/qetsvo8aeb6z/Squid.Game.S03E03.(NKIRI.COM).mkv.html",
        "https://downloadwella.com/9nu8sr6p9ucn/Squid.Game.S03E04.(NKIRI.COM).mkv.html",
        "https://downloadwella.com/03w63b70dsgr/Squid.Game.S03E05.(NKIRI.COM).mkv.html",
        "https://downloadwella.com/cjtgiexknnyx/Squid.Game.S03E06.(NKIRI.COM).mkv.html",
    ];

    const movieLinksContainer = document.getElementById("movie-links");
    const downloadForm = document.getElementById("downloadForm");
    const formIdInput = document.getElementById("formId");

    links.forEach((link, index) => {
        const episodeNumber = index + 1;
        const movieName = `Squid Game S03E0${
            episodeNumber < 10 ? "0" + episodeNumber : episodeNumber
        }`; // Format episode number

        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");

        const movieNameSpan = document.createElement("span");
        movieNameSpan.classList.add("movie-name");
        movieNameSpan.textContent = movieName;

        const downloadButton = document.createElement("button");
        downloadButton.classList.add("download-btn");
        downloadButton.textContent = "Download";
        downloadButton.addEventListener("click", () => {
            // Extract the 'id' from the link
            const urlParts = link.split("/");
            const idWithHtml = urlParts[urlParts.length - 2]; // Get 'h9fpz3tlbqjm'
            const id = idWithHtml.split(".")[0]; // Remove '.html' if present

            if (id) {
                // Set the action of the hidden form to the current link
                downloadForm.action = link;
                // Set the 'id' input field
                formIdInput.value = id;
                // Submit the form. This will trigger the POST request and the subsequent redirect/download.
                downloadForm.submit();
            } else {
                alert("Could not extract download ID from link: " + link);
            }
        });

        movieItem.appendChild(movieNameSpan);
        movieItem.appendChild(downloadButton);
        movieLinksContainer.appendChild(movieItem);
    });
});

// Helper to parse URL if needed (though we're extracting 'id' more simply here)
function getUrlParameter(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
