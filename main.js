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
            
            if (min <= 9){
                min = "0" + min
            }

            if (seg <=9){
                seg = "0" + seg
            }

            timer.innerText = min + ":" + seg

        }
    })
    
    // -----------------------------------------------------
    
    const dragbars = container.querySelectorAll(".dragbar")
    
    dragbars.forEach(dragbar => {
        const dragabble = dragbar.querySelector(".draggable")
        if (dragbar.classList.contains("volume")) {
            dragabble.style.setProperty("--percent", `100%`)
          }
  
          dragbar.addEventListener("mousedown", ev => {
            dragbar.classList.add("dragging")
          })
          
          dragbar.addEventListener("mouseup", ev => {
            dragbar.classList.remove("dragging")
          })
  
          dragbar.addEventListener("mouseout", ev => {
            dragbar.classList.remove("dragging")
          })
  
          dragbar.addEventListener("mousemove", ev => {
            if (ev.target != dragbar || !dragbar.classList.contains("dragging")) 
              return
            const width = Math.floor(dragbar.getBoundingClientRect().width)
            const index= (ev.offsetX / width)
            const percent = index * 100
            dragabble.style.setProperty("--percent", `${percent}%`)

            if (dragbar.classList.contains("timeline")) {
                video.currentTime = video.duration * index
                return
            }

            if (dragbar.classList.contains("volume")) {
                video.volume = index
                return
            }
        })
    })
})