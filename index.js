
// '2000-01-01'
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let ageInYears = today.getFullYear() - birthDate.getFullYear();
  let ageInMonths = today.getMonth() - birthDate.getMonth();
  let ageInDays = today.getDate() - birthDate.getDate();

  if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
      ageInYears--;
      ageInMonths = (ageInMonths + 12) % 12;
  }

  if (ageInDays < 0) {
      const monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageInDays += monthDays;
      ageInMonths--;
      if (ageInMonths < 0) {
          ageInMonths = 11;
          ageInYears--;
      }
  }

  return {
      years: ageInYears,
      months: ageInMonths,
      days: ageInDays
  };
}
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click" , ()=> {
  const day= document.getElementById("day");
  const month =document.getElementById("month");
  const year = document.getElementById("year");
  // Check if the inputs are not numbers
  if(isNaN(day.value) || isNaN(month.value) || isNaN(year.value)) {
    alert("Please enter a valid number for day, month and year.");
    return;
  }

  // Check if the month is not between 1 and 12
  if(month.value < 1 || month.value > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }

  // Check if the day is not between 1 and 31
  if(day.value < 1 || day.value > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return;
  }
  const birthDateString = year.value + "-" + month.value + "-" + day.value;
  let age = calculateAge(birthDateString);
  console.log(`Age is ${age.years} years, ${age.months} months, and ${age.days} days`);
  const hy = document.getElementById("hy");
  const hm = document.getElementById("hm");
  const hd = document.getElementById("hd");
  hy.innerHTML =`${age.years} years`;
  hm.innerHTML = `${age.months} months`;
  hd.innerHTML =`${age.days} days`;

} )

