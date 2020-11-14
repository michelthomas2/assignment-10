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
  if (buns.getAttribute('src') === 'images/bunny.JPG')
  {
    buns.setAttribute('src', 'images/topo.JPG');
  } else if (buns.getAttribute('src') === 'images/topo.JPG') {
    buns.setAttribute('src',
    'images/dog.JPG');
  } else {
    buns.setAttribute('src', 'images/bunny.JPG');
  }
}

// click event
