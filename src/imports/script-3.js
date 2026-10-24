const LastUpdate = document.getElementById('last-update')
const YearOnly = document.getElementById('year-only')
const SliderCardsWrap = [...document.querySelectorAll('.slider-cards-wrap')];

const prevBtn = [...document.querySelectorAll('.prev-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];

SliderCardsWrap.forEach((item, i) => {
  let SliderDimentions = item.getBoundingClientRect()
  let SliderWidth = SliderDimentions.width

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= SliderWidth;
  })

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += SliderWidth;
  })
});

const currentDate = new Date();
const dateISOString = currentDate.toISOString();
const dateWithoutTime = dateISOString.split('T')[0];

YearOnly.innerHTML = dateWithoutTime.split('-')[0]
LastUpdate.innerHTML = dateWithoutTime;