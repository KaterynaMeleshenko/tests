const apiKey = "AIzaSyBjdYyvNvSYSFxTul2zXxRx_X72fRtR67w";
let pageToken = "";
const englishTitleOnly = /^[a-zA-Z0-9$@$!%*?&#|^-_. +]+$/;
const inappropriateWord = "basics";
const earliestDate = "2020-10-09";
const appropriateWord = "javascript";

let stack = [];


function getVideos() {

  document.body.insertAdjacentHTML('beforeend', `<div id="videos"></div>`);
  const mainInfo = document.getElementById('videos');

	axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${appropriateWord}&type=video&regionCode=UK&maxResults=50&order=date&key=${apiKey}&pageToken=${pageToken}`)
	  .then(res => {
	    const videosData = res.data.items;
	   	let number = 1;

	   	videosData.forEach(video => {
	   	  if ( stack.length < 15 && 
               video.snippet.publishTime > earliestDate && 
               !(video.snippet.title).match(inappropriateWord ) && 
               (video.snippet.title).match(englishTitleOnly) ) {
                   
	   	    const title = video.snippet.title;
	   	 	const date = video.snippet.publishTime.replace("T", " ").replace("Z", "").split(' ').join(' ');
                
            mainInfo.insertAdjacentHTML('beforeend', `<div class="video-info">Video #${number}. <b>Title</b>: 
              ${title} (<b>date of publication:</b> ${date})</div>`)

	   	 	stack.push(title);
	   	 	number += 1
	   	  } 
	   	})
	  })
}

getVideos();