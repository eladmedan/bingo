document.addEventListener("DOMContentLoaded", () => {
  const win = document.getElementById("output");

  // Select all checkboxes
  const checkboxes = document.querySelectorAll(".box");
  console.log(checkboxes);
  let i = 0;
  // Add event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.id = i;
    i++;
    checkbox.addEventListener("change", (event) => {
      // const cell = event.target.closest(".cell"); // Find the closest .cell container
      const cell = event.target.closest(".cell"); // Find the closest .cell container

      if (checkbox.checked) {
        cell.style.backgroundColor = "blue"; // Change background color when checked
      } else {
        cell.style.backgroundColor = "white"; // Revert background color when unchecked
      }
      console.log(checkbox);
      //every possible bingo combo
      if (
        (checkboxes[0].checked && //columns
          checkboxes[3].checked &&
          checkboxes[6].checked) ||
        (checkboxes[1].checked &&
          checkboxes[4].checked &&
          checkboxes[7].checked) ||
        (checkboxes[2].checked &&
          checkboxes[5].checked &&
          checkboxes[8].checked) ||
        (checkboxes[0].checked && //rows
          checkboxes[1].checked &&
          checkboxes[2].checked) ||
        (checkboxes[3].checked &&
          checkboxes[4].checked &&
          checkboxes[5].checked) ||
        (checkboxes[6].checked &&
          checkboxes[7].checked &&
          checkboxes[8].checked) ||
        (checkboxes[0].checked && //diagonals
          checkboxes[4].checked &&
          checkboxes[8].checked) ||
        (checkboxes[2].checked &&
          checkboxes[4].checked &&
          checkboxes[6].checked)
      ) {
        console.log("BINGO");
        document.body.style.backgroundColor = "blue";
        title = document.getElementById("heading");
        heart = document.getElementById("heart");
        console.log(title);
        title.style.color = "white";
        title.textContent = "ניצחון!";
        heart.textContent = "🤍";
      } else {
        document.body.style.backgroundColor = "";
        title.style.color = "";
        title.textContent = "בינגו אהבות";
        heart.textContent = "💙";
      }
    });
  });
});
