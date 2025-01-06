document.addEventListener("DOMContentLoaded", () => {
  // Select all checkboxes
  const checkboxes = document.querySelectorAll(".box");
  // console.log(checkboxes[1]);
  // Add event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // const cell = event.target.closest(".cell"); // Find the closest .cell container
      const cell = event.target.closest(".cell"); // Find the closest .cell container

      if (checkbox.checked) {
        cell.style.backgroundColor = "blue"; // Change background color when checked
      } else {
        cell.style.backgroundColor = ""; // Revert background color when unchecked
      }
    });
  });
});
