document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const material = params.get("material");
  const shape = params.get("shape");
  const stone = params.get("stone");

  if (material && shape && stone) {
    const selectedOptionsDiv = document.getElementById("selected-options");
    selectedOptionsDiv.innerHTML = `
        <p><strong>Material:</strong> ${material}</p>
        <p><strong>Shape:</strong> ${shape}</p>
        <p><strong>Stone:</strong> ${stone}</p>
      `;
  } else {
    alert("There was an error retrieving your selected options.");
  }
});
