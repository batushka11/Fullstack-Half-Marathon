document.querySelectorAll("#characters li").forEach((li) => {
    let at = li.className;
    if(at !== "good" && at !== "evil" && at !== "unknown" && at === ""){
        li.className = "unknown";
    }
    let data = li.getAttribute("data-element");
    if(data === null){
        li.setAttribute("data-element", "none");
    }

    data = li.getAttribute("data-element");
    const box = document.createElement("div");

    let elements = data.split(' ');
    for(let element of elements){
        const circle = document.createElement("div");

        circle.classList.add("elem", element);
        if(element === "none"){
            const line = document.createElement("div");
            line.className = "line";
            circle.append(line);
        }
        box.append(circle);
    }
    li.append(box);
});