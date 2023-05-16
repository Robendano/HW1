const block = document.getElementById('block');

function moveBlock() {
  const startPos = { top: 80, left: 140 };
  const targetPos1 = { top: 200, left: 200 };
  const targetPos2 = { top: 200, left: 80 };

  // Move from startPos to targetPos1
  block.style.transition = 'top 1s, left 1s';
  block.style.top = targetPos1.top + 'px';
  block.style.left = targetPos1.left + 'px';

  setTimeout(() => {
    // Move from targetPos1 to targetPos2
    block.style.top = targetPos2.top + 'px';
    block.style.left = targetPos2.left + 'px';

    setTimeout(() => {
      // Move from targetPos2 to startPos
      block.style.top = startPos.top + 'px';
      block.style.left = startPos.left + 'px';

      // Reset transition and repeat the animation
      setTimeout(() => {
        block.style.transition = '';
        moveBlock();
      }, 1000);
    }, 1000);
  }, 1000);
}

moveBlock();
