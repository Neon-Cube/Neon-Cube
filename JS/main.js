const IsSideReady = false;

loopify("Music/main.ogg", ready);
function ready(err, loop) {
    if (err) {
        console.warn(err);
    }
    loop.play();
};

if (!IsSideReady) {
    document.getElementById("sidebar").setAttribute("style", "width: 100%;");
    document.getElementById("logo").setAttribute("style", "width: 25%; margin: 5% auto;");
    document.getElementById("name").setAttribute("style", "margin: -8% auto");

    let message = document.createElement("span");
    message.innerHTML = "Coming Back Up Soon";
    message.setAttribute("style", "font-size: 50px;")

    let exclamation = document.createElement("span");
    exclamation.innerHTML = "!";
    exclamation.setAttribute("style", "color: #BF616A; font-size: 50px;");

    message.appendChild(exclamation);

    document.getElementById("name").appendChild(document.createElement("br"));
    document.getElementById("name").appendChild(message);
}

