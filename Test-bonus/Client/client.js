function getVideos() {

    document.body.insertAdjacentHTML('beforeend', `<div id="videos"></div>`);
    const mainInfo = document.getElementById('videos');
  
      axios.get(`http://localhost:3000/`)
        .then(res => {
          const videosData = res.data;
          let number = 1;
  
          videosData.forEach(video => {
          const title = video.title; 
          const date = video.date;   

          mainInfo.insertAdjacentHTML('beforeend', `<div class="video-info">Video #${number}. <b>Title</b>: 
            ${title} (<b>date of publication:</b> ${date})</div>`)
  
          number += 1
          })
        })
        .catch(error => {
          console.log("error", error)
        })
}
  
getVideos();