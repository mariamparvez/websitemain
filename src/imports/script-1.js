const LastUpdate = document.getElementById('last-update')
const YearOnly = document.getElementById('year-only')
const ComingSoon = [...document.querySelectorAll('.coming-soon')]

const currentDate = new Date();
const dateISOString = currentDate.toISOString();
const dateWithoutTime = dateISOString.split('T')[0];

function TheComingSoon() {
  alert("Coming Soon")
}


YearOnly.innerHTML = dateWithoutTime.split('-')[0]
LastUpdate.innerHTML = dateWithoutTime;