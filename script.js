const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function handleClickBtn() {
  const value = input.value.trim();
  const isValid = checkValidation(value);

  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  if (isValid) {
    results.style.color = "green";
    results.textContent = `Valid US number: ${value}`;
    return;
  }
  results.style.color = "red";
  results.textContent = `Invalid US number: ${value}`;
}

function handleClearBtn() {
  results.innerHTML = "";
}

function checkValidation(number) {
  const regex1 = /^1\s\d{3}-\d{3}-\d{4}$/;
  const regex2 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
  const regex3 = /^\d{10}$/;
  const regex4 = /^\d{3}-\d{3}-\d{4}$/;
  const regex5 = /^\(\d{3}\)\d{3}-\d{4}$/;
  const regex6 = /^1\(\d{3}\)\d{3}-\d{4}$/;
  const regex7 = /^1\s\d{3}\s\d{3}\s\d{4}$/;

  if (
    regex1.test(number) ||
    regex2.test(number) ||
    regex3.test(number) ||
    regex4.test(number) ||
    regex5.test(number) ||
    regex6.test(number) ||
    regex7.test(number)
  ) {
    return true;
  } else {
    return false;
  }
}

checkBtn.addEventListener("click", handleClickBtn);
clearBtn.addEventListener("click", handleClearBtn);
