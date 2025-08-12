const lines = [
  "Opportunities don't happen, you create them"
];

const typedText = document.getElementById('typing');
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
     if (charIndex === 0) {

      // Create a new div for the new line
      const newLine = document.createElement('div');
      newLine.classList.add('typed-line');
      typedText.appendChild(newLine);
    }

     const currentLine = typedText.children[lineIndex];

    if (charIndex < lines[lineIndex].length) {
      typedText.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 700); // Pause before next line
    }
  }
}

typeLine();
