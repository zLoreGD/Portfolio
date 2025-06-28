
  const buttons = document.querySelectorAll('.play');
  let currentAudio = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const audioId = button.getAttribute('data-audio');
      const audio = document.getElementById(audioId);

      // If clicking the same button and audio is playing → pause it
      if (audio === currentAudio && !audio.paused) {
        audio.pause();
        button.textContent = 'Play';
        currentAudio = null;
      } else {
        // Pause any currently playing audio
        if (currentAudio && !currentAudio.paused) {
          currentAudio.pause();
          document.querySelector(`button[data-audio="${currentAudio.id}"]`).textContent = 'Play';
        }

        // Play new audio
        audio.play();
        button.textContent = 'Pause';
        currentAudio = audio;
      }
    });
  });

