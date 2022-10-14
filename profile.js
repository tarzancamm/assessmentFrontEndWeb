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
    alert("My favorite ritual is putting on a baker's hat, smearing pig blood over my body and then dancing around the fire with my friends while we chant to the pig Gods. Going to the gym is a close second.")
})
