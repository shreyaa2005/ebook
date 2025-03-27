document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "The_Score_Elle_Kennedy.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "The_Score_Elle_Kennedy.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "The Score",
            author: "Elle Kennedy",
            image: "https://images.squarespace-cdn.com/content/v1/5f15d73f54cb7b786d0b4036/1700593583921-RBA10VR5VHJM68MBA7C1/The+Score+ILLUSTRATED.jpg",
            page: "The_Score.html"
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