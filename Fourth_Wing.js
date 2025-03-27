document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "Fourth_Wing_Rebecca_Yarros.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "Fourth_Wing_Rebecca_Yarros.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "Fourth Wing",
            author: "Rebecca Yarros",
            image: "https://th.bing.com/th/id/OIP.YcWyHu73fadW20v7gn6V1wAAAA?rs=1&pid=ImgDetMain.jpg",
            page: "fourth_wing.html"
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