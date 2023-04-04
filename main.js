const containers = document.querySelectorAll("div.ia21-player")

containers.forEach(el => {
    const playPause = el.querySelector("button.play-pause")
    const video = el.querySelector("video")
    playPause.onclick = () => video.play()

    playPause.addEventListener("click", () => alert("zzzz"))
})