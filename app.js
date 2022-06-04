document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.querySelector('#num1')
  const num2 = document.querySelector('#num2')
  const addBtn = document.querySelector('#add')
  const subBtn = document.querySelector('#sub')
  const multBtn = document.querySelector('#mult')
  const divideBtn = document.querySelector('#divide')
  const output = document.querySelector('#output')

  function getInputValues() {
    const value1 = +num1.value
    const value2 = parseInt(num2.value)

    return [value1, value2]
  }

  function addHandler() {
    const values = getInputValues()

    const result = values[0] + values[1]

    displayResult(result)
  }

  function subHandler() {
    const values = getInputValues()

    const result = values[0] - values[1]

    displayResult(result)
  }

  function multHandler() {
    const values = getInputValues()

    const result = values[0] * values[1]

    displayResult(result)
  }

  function divideHandler() {
    const values = getInputValues()

    const result = values[0] / values[1]

    displayResult(result)
  }

  function displayResult(result) {
    output.closest('.information').style.display = 'block'
    output.innerHTML = `Результат = ${result}`
    console.trace()
  }

  addBtn.addEventListener('click', addHandler)
  subBtn.addEventListener('click', subHandler)
  multBtn.addEventListener('click', multHandler)
  divideBtn.addEventListener('click', divideHandler)
})
