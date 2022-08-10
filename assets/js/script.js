const rightButton = document.querySelector('.button-arrow.-right');
    const leftButton = document.querySelector('.button-arrow.-left');
    const cards = document.querySelector('.cards');
    let totalPixels = 0;
    let fd=0;

    function moveToRight() {
      // totalPixels -= 20;
      if(fd){
        totalPixels -= 20*12;
      }
      else{
        totalPixels -= 20;
        fd=0;
      }
      cards.style.transform = `translateX(${totalPixels}px)`;
    }

    function moveToLeft() {
      if(fd){
        totalPixels += 20*12;
      }
      else{
        totalPixels += 20;
        fd=0;
      }
      cards.style.transform = `translateX(${totalPixels}px)`;
    }

    rightButton.addEventListener('click', moveToRight);

    leftButton.addEventListener('click', moveToLeft);

    document.addEventListener('keyup', event => {
      const key = event.key;

      if (key === 'ArrowRight') {
        moveToRight();
      }

      if (key === 'ArrowLeft') {
        moveToLeft();
      }
    });