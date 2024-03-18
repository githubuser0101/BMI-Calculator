const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const weight = parseFloat(document.querySelector('#weight').value)
    const height = parseFloat(document.querySelector('#height').value)/100
    const result = document.querySelector('#result')   

    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight"
    } else if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height"
    } else {
        const BMI = (weight / Math.pow(height, 2)).toFixed(1)    
        if (BMI < 18.6) {
            result.innerHTML = `BMI : ${BMI} | Underweight`
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            result.innerHTML = `BMI : ${BMI} | Normal weight`
        } else {
            result.innerHTML = `BMI : ${BMI} | Overweight`
        }
    }
})