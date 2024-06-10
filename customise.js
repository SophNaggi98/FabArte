document.getElementById("submit-button").addEventListener("click", function () {
  const material = document.querySelector('input[name="material"]:checked');
  const shape = document.querySelector('input[name="shape"]:checked');
  const stone = document.querySelector('input[name="stone"]:checked');

  if (material && shape && stone) {
    const queryParams = new URLSearchParams({
      material: material.value,
      shape: shape.value,
      stone: stone.value,
    }).toString();
    window.location.href = `checkout.html?${queryParams}`;
  } else {
    alert("Please select an option for each category.");
  }
});
