const mainButton = document.getElementById('button');

let spanId = [];
let activeId = [];
let clickTimes = 0;

mainButton.addEventListener('click', () => {
  renderText();
});


function renderText() {
  const dataToRender = document.getElementById('input').value;
  const text = dataToRender.split('');
  const placeToRender = document.getElementById('content');
  let id = 0;
   
  text.forEach(sign => {
    placeToRender.insertAdjacentHTML('beforeend', `<span class="sign" id="id${id}">${sign}</span>`)
    spanId.push(id);
    id += 1;
  });
  setOnClick();
  stopMoving();
  moveRight();
}


function setOnClick() {

  spanId.forEach(id => {
    document.querySelector(`#id${id}`).onclick = function() {
      activeId = [`id${id}`];
        
      const item = document.getElementById(`id${id}`);
    
      content.onmousemove = function (e) {
        item.style.position = 'fixed';
        item.style.left = e.clientX  + 'px';
        item.style.top = e.clientY  + 'px';
      }
    } 
  })
}


function stopMoving() {
  content.onclick = function (e) {
    if (activeId.length === 1 && clickTimes <= 1) {
      clickTimes += 1;
    } else {
      clickTimes = 0;
    } 

    if (activeId.length > 0 && clickTimes >= 2) { 
      content.onmousemove = null;

      const item = document.getElementById(activeId);
      item.style.left = e.clientX + 'px';
      item.style.top = e.clientY + 'px';
      clickTimes = 0;
      activeId = [];
    }
  }
}


// Non-operating function :(

function moveRight() {
  spanId.forEach(id => {
    document.querySelector(`#id${id}`).onmouseover = function(e) {
      if (activeId.length > 0 && `id${id}`!== activeId[0]) {
        const item = e.target;
        const currPosition = item.style.left;
        item.style.position = 'fixed';
        item.style.left = currPosition + 20 + 'px';
      } 
    }
  })
}