const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadItemToList() {
    fetch("news-item.html")
        .then((response) => response.text())
        .then((data) => {
            const listItem = Array.from(
                {
                    length: 4,
                },
                () => data
            ).join("");
            console.log(listItem);
            document.querySelector(".list-item").innerHTML = listItem;
        });
}

function loadItemToHeader() {
    fetch("title.txt").then((res) => res.text()).then(data => {
        const listTitle = data.split("\n") || [];
        const html = document.getElementById("scrollText").innerHTML;
        listTitle.forEach((title, index) => {
            document.getElementById("scrollText").innerHTML += `<div class="scroll-text-item scroll-text${index + 2}">${title}</div>`;
        })
    })
}