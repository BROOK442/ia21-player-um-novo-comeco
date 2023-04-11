const containers = document.querySelectorAll("div.ia21-player")

containers.forEach(container => { 
    const btPlayPause = container.querySelector("button.play-pause")
    const video = container.querySelector("video")
    const timeline = container.querySelector(".dragbar.timeline")
    const timelineDrag = timeline.querySelector(".draggable")
    const timer = container.querySelector(".timer")
    btPlayPause.addEventListener("click", () => video.play())
    
    video.currentTime = 55

    video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100
        timelineDrag.style.setProperty("--percent", `${percent}%`) 
        const min = Math.floor(video.currentTime / 60)
        const seg = Math.floor(video.currentTime % 60)
        console.log(seg)
        timer.innerText = Math.floor(video.currentTime)
    })
})
