let hours = prompt("Введіть кількість годин:");

if (hours !== "" && !isNaN(hours)) {
  let seconds = hours * 3600;
  alert("У " + hours + " годинах " + seconds + " секунд.");
} else {
  alert("Будь ласка, введіть годину.");
}
