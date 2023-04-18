const containers = document.querySelectorAll("div.ia21-player")

containers.forEach(container => { 
    const btPlayPause = container.querySelector("button.play-pause")
    const video = container.querySelector("video")
    const timeline = container.querySelector(".dragbar.timeline")
    const timelineDrag = timeline.querySelector(".draggable")
    const timer = container.querySelector(".timer")
    
    btPlayPause.addEventListener("click", () => {
        if (video.paused) {
            video.play()
            btPlayPause.innerText = btPlayPause.dataset.pauseIcon
            return
        }

        video.pause()
        btPlayPause.innerText = btPlayPause.dataset.playIcon
    })

    
    video.currentTime = 58

    video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100
        timelineDrag.style.setProperty("--percent", `${percent}%`) 
        timer.innerText = Math.floor(video.currentTime)

        if (timer.innerText >= 60) {
            min = Math.floor(timer.innerText / 60)
            seg = Math.floor(timer.innerText % 60)
            timer.innerText = min + ":" + seg
        }
    })

    const dragbars = container.querySelectorAll(".dragbar")
            
    dragbars.forEach(dragbar => {
        const dragabble = dragbar.querySelector(".draggable")
        dragbar.addEventListener("click", ev => {
            const width = Math.floor(dragbar.getBoundingClientRect().width)
            const percent = (ev.offsetX / width) * 100
            dragabble.style.setProperty("--percent", `${percent}%`)
        })
    })   
})