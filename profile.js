const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')


colorBtn.addEventListener('click', () => {
    alert('My favorite color is teal.')
})

placeBtn.addEventListener('click', () => {
    alert('My favorite place is home. Anywhere in Europe is a close second.')
})

ritualBtn.addEventListener('click', () => {
    alert("My favorite ritual is going to the gym.")
})
