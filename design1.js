document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "Radiant_Sin_Katee_Robert.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "Radiant_Sin_Katee_Robert.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "Radiant Sin",
            author: "Katee Robert",
            image: "https://tse1.mm.bing.net/th?id=OIP.JeLEIRLZX8K94mDD8sBzlwAAAA&pid=Api&P=0&h=220.jpg",
            page: "design.html"
        };

        if (!likedBooks.some(b => b.title === book.title)) {
            likedBooks.push(book);
            localStorage.setItem("library", JSON.stringify(likedBooks));
            alert("Book added to your library! 📚");
        } else {
            alert("This book is already in your library.");
        }
    });
});