function toggleDraggable(square) {
    square.classList.toggle('draggable');
    square.classList.toggle('not-draggable');
    if (square.classList.contains('draggable')) {
      square.style.border = 'none';
    } else {
      square.style.border = '3px dashed black';
    }
  }

  document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function() {
      toggleDraggable(this);
    });
  });

  let clicked = null;

  document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('draggable')) {
      clicked = event.target;
    }
  });

  document.addEventListener('mousemove', function(event) {
    if (clicked) {
      clicked.style.left = event.pageX - 50 + 'px';
      clicked.style.top = event.pageY - 50 + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    clicked = null;
  });
