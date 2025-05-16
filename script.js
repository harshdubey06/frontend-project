document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
    const totalSpan = document.getElementById("total");
    const allExpandables = document.querySelectorAll(".expandable");
  
    function updateUI() {
      allExpandables.forEach(el => el.classList.remove("active"));
  
      radios.forEach((radio) => {
        const label = radio.closest(".option-box");
  
        if (radio.checked) {
          totalSpan.textContent = parseFloat(radio.getAttribute("data-price")).toFixed(2);
  
          // Show expandable inside the selected label
          const expandable = label.querySelector(".expandable");
          if (expandable) expandable.classList.add("active");
  
          // Add .popular class to selected box, remove from others
          label.classList.add("popular");
        } else {
          label.classList.remove("popular");
        }
      });
    }
  
    radios.forEach((radio) => {
      radio.addEventListener("change", updateUI);
    });
  
    updateUI(); // initialize on page load
  });
  