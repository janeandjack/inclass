// wo cao ni madfjdfljsdlfjlsdjflsdjflkdsfldskfjdjdljflsdjfljsdlfjlsdjfjsdlfjlsdjfldsflkd

 (() => {
    console.log('inclass file loaded!');

    //remoe the highlight from each element after a keypress
    function removeHighlight(e){
      console.log(e);
      if (e.propertyName !== 'transform'){
        return;
      } else {
        e.target.classList.remove('playing');
      }
    }

    function playSound(e) {
      //debugger;
        console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
        // debugger;

        if (!audio) { return; }

       audio.currentTime = 0;
      audio.play();

        }

    window.addEventListener('keydown', playSound);

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
 })();
