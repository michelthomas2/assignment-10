let bigImage = document.querySelector('#waterfall');

// click event

bigImage.onclick = () => {
   if ( bigImage.getAttribute('src') ===
   'images/waterfallbw.jpg' )
   {
        bigImage.setAttribute('src',
        'images/waterfall.jpg');
   } else {
        bigImage.setAttribute('src',
        'images/waterfallbw.jpg');
   }
}

let buns = document.querySelector('#bunny');

buns.onmouseover = () => {
  if (buns.getAttribute('src') === 'images/bunny.jpg')
  {
    buns.setAttribute('src', 'images/topo.jpg');
  } else if (buns.getAttribute('src') === 'images/topo.jpg') {
    buns.setAttribute('src',
    'images/dog.JPG');
  } else {
    buns.setAttribute('src', 'images/bunny.jpg');
  }
}

// click event
