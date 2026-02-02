let filters = document.querySelectorAll(".filters button");
let ruleItems = document.querySelectorAll(".rule-item");

function updateButtonStyles(selectedButton) {
  filters.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-light");
  });
  selectedButton?.classList.remove("btn-light");
  selectedButton?.classList.add("btn-primary");
}

//Відслідковуємо натискання на кнопку фільтрації
// отримуємо категорію з атрибуту кнопки, оновлюжмо вигляд кнопок
// та показуємо тільки потрібні рядки правил
filters.forEach((button) => {
  button.addEventListener("click", () => {
    let targetCategory = button.getAttribute("data-category");

    updateButtonStyles(button);

    ruleItems.forEach((row) => {
      if (row.getAttribute("data-category") === targetCategory || targetCategory === "all") {
        row.style.display = "block";
      } else {
        row.style.display = "none";
      }
    });
  });
});
