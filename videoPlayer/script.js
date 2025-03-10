const playPauseBtn = document.querySelector(".play-pause-btn")    //play-pause-btn  we have this class in <button class="play-pause-btn"> index.html                               

const video = document.querySelector("video")



const videoContainer = document.querySelector(".video-container")
//

/// Play and Pause 
playPauseBtn.addEventListener("click", playVideo)     //why we used this :---> when we click on button only then video will be played/paused
video.addEventListener("click", playVideo)            //why we used this :---> when we click on screen the video will be played/paused


function playVideo() {
  video.paused ? video.play() : video.pause()
}

video.addEventListener("play", () => {        //we have one of the event listner type [play] :---> video.addEventListener("play")
  videoContainer.classList.remove("paused")    //if we have the play class then remove the paused class
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")        //if we have the paused class then add the paused class
})



//HANDLE VIA KEYS

document.addEventListener("keydown", e => {                      //eventListner :---> keydown, e:---> event

// const tagName = document.activeElement.tagName.toLowerCase()    // activeElement is whatever we are currently tabbed onto , we will convert it to lowercase because we get all in uppercase                                     

//   if (tagName === "input") return                                  //we want to immediately exit 

  switch (e.key.toLowerCase()) 
  {
    // case " ":
    //   if (tagName === "button") return                    //trying using spacebar (play/pause)
  
  
    case "k":
      playVideo()
      break
  
    case "f":
      toggleFullScreenMode()
      break

    case "t":
      toggleTheaterMode()
      break

    // case "i":
    //   toggleMiniPlayerMode()
    //   break

    case "m":
      toggleMute()
      break

    case "arrowleft":
        case "j":
          skip(-5)
          break
    
    case "arrowright":
        case "l":
          skip(5)
          break

    // case "c":
    //   toggleCaptions()
    //   break
  }
})



/*************************************************************************************************************************/
/* THEATER MODE, FULL SCREEN MODE */
/*************************************************************************************************************************/

const theaterBtn = document.querySelector(".theater-btn")

const fullScreenBtn = document.querySelector(".full-screen-btn")

//const miniPlayerBtn = document.querySelector(".mini-player-btn")


// fullscreen, mini , theater mode

theaterBtn.addEventListener("click", toggleTheaterMode)                //toggleTheaterMode,toggleFullScreenMode,toggleMiniPlayerMode,toggleCaptions,toggleMute are in-built functions
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
//miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
  videoContainer.classList.toggle("theater")
}





function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})



// function toggleMiniPlayerMode() {
//   if (videoContainer.classList.contains("mini-player")) {
//     document.exitPictureInPicture()
//   } else {
//     video.requestPictureInPicture() //built in function requestPicinPic
//   }
// }

// video.addEventListener("enterpictureinpicture", () => {
//   videoContainer.classList.add("mini-player")
// })

// video.addEventListener("leavepictureinpicture", () => {
//   videoContainer.classList.remove("mini-player")
// })








/*************************************************************************************************************************/
/* MUTE AND VOLUME SLIDER */
/*************************************************************************************************************************/

const muteBtn = document.querySelector(".mute-btn")
const volumeSlider = document.querySelector(".volume-slider")


muteBtn.addEventListener("click", toggleMute)


volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  video.muted = e.target.value === 0
})


function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})





/*************************************************************************************************************************/
/* SPEED BUTTON */
/*************************************************************************************************************************/


const speedBtn = document.querySelector(".speed-btn")

speedBtn.addEventListener("click", speedButton)

function speedButton() {
  let newPlaybackRate = video.playbackRate + 0.25
  if (newPlaybackRate > 2) newPlaybackRate = 0.25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}x` //we put x in the end because it should show as 1x,1.25x as we change speed if we write abc it will show 1x,1.25abc,2abc
 
}



/*************************************************************************************************************************/
/* SKIP BUTTON */
/*************************************************************************************************************************/



function skip(duration) {
    video.currentTime += duration
  }



















// const captionsBtn = document.querySelector(".captions-btn")
// 
// const currentTimeElem = document.querySelector(".current-time")
// const totalTimeElem = document.querySelector(".total-time")
// const previewImg = document.querySelector(".preview-img")
// const thumbnailImg = document.querySelector(".thumbnail-img")
// 
// 
// const timelineContainer = document.querySelector(".timeline-container")
// 

// 
// // Timeline
// timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
// timelineContainer.addEventListener("mousedown", toggleScrubbing)
// document.addEventListener("mouseup", e => {
//   if (isScrubbing) toggleScrubbing(e)
// })
// document.addEventListener("mousemove", e => {
//   if (isScrubbing) handleTimelineUpdate(e)
// })

// let isScrubbing = false
// let wasPaused
// function toggleScrubbing(e) {
//   const rect = timelineContainer.getBoundingClientRect()
//   const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
//   isScrubbing = (e.buttons & 1) === 1
//   videoContainer.classList.toggle("scrubbing", isScrubbing)
//   if (isScrubbing) {
//     wasPaused = video.paused
//     video.pause()
//   } else {
//     video.currentTime = percent * video.duration
//     if (!wasPaused) video.play()
//   }

//   handleTimelineUpdate(e)
// }

// function handleTimelineUpdate(e) {
//   const rect = timelineContainer.getBoundingClientRect()
//   const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
//   const previewImgNumber = Math.max(
//     1,
//     Math.floor((percent * video.duration) / 10)
//   )
//   const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
//   previewImg.src = previewImgSrc
//   timelineContainer.style.setProperty("--preview-position", percent)

//   if (isScrubbing) {
//     e.preventDefault()
//     thumbnailImg.src = previewImgSrc
//     timelineContainer.style.setProperty("--progress-position", percent)
//   }
// }


// 

// // Captions
// const captions = video.textTracks[0]
// captions.mode = "hidden"

// captionsBtn.addEventListener("click", toggleCaptions)

// function toggleCaptions() {
//   const isHidden = captions.mode === "hidden"
//   captions.mode = isHidden ? "showing" : "hidden"
//   videoContainer.classList.toggle("captions", isHidden)
// }

// // Duration
// video.addEventListener("loadeddata", () => {
//   totalTimeElem.textContent = formatDuration(video.duration)
// })

// video.addEventListener("timeupdate", () => {
//   currentTimeElem.textContent = formatDuration(video.currentTime)
//   const percent = video.currentTime / video.duration
//   timelineContainer.style.setProperty("--progress-position", percent)
// })

// const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
//   minimumIntegerDigits: 2,
// })
// function formatDuration(time) {
//   const seconds = Math.floor(time % 60)
//   const minutes = Math.floor(time / 60) % 60
//   const hours = Math.floor(time / 3600)
//   if (hours === 0) {
//     return `${minutes}:${leadingZeroFormatter.format(seconds)}`
//   } else {
//     return `${hours}:${leadingZeroFormatter.format(
//       minutes
//     )}:${leadingZeroFormatter.format(seconds)}`
//   }
// }





