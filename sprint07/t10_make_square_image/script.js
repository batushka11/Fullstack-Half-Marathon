document.querySelector("#enter").addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value !== undefined) {
        fetch("/method?url=" + input.value)
            .then((res) => res.json())
            .then(function(data) {
                const imgContainer = document.querySelector("#img-container");
                const imgUrls = data.img;
                const orderedUrls = [imgUrls[0], imgUrls[2], imgUrls[1], imgUrls[3]];
                imgContainer.innerHTML = "";
                orderedUrls.forEach(url => {
                    const img = document.createElement("img");
                    img.src = url;
                    imgContainer.appendChild(img);
                });
            });
    }
});