/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleInput = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleInput.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  billTotal = Number(billTotalInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)

  tip = Number(tipInput.value)
  
  billAmountPerPerson = ((1 + tip / 100) * billTotal) / numberOfPeople

  // update the perPersonTotal on DOM & show it to user

  perPersonTotal.textContent = `₹${billAmountPerPerson.toFixed(2).toLocaleString('en-IN')}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people

  numberOfPeople++

  console.log()

  // update the DOM with the new number of people

  numberOfPeopleInput.textContent = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return

  if (numberOfPeople <= 1) {
    return
  } else {

    // decrement the amount of people

    numberOfPeople--

    // update the DOM with the new number of people

    numberOfPeopleInput.textContent = numberOfPeople

    // calculate the bill based on the new number of people

    calculateBill()

  }

}
