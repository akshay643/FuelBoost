// form toggle

let constactForm = document.getElementById('checkout-section')

let product = document.getElementsByClassName('mw-product')

let productName = document.getElementById('product_name') //order summary name

let productPrice = document.getElementById('product_price')

let discount = document.getElementById('discount-amount')
let totalPrice = document.getElementById('total')

for (let i = 0; i < product.length; i++) {
  product[i].addEventListener('click', function () {
    if (i == 0) {
      product[i].style.border = '10px solid green'
      constactForm.style.display = 'block'
      productName.innerHTML = 'One MiracleWatts'
      productPrice.innerHTML = '$59'
      discount.innerHTML = '$59'
      totalPrice.innerHTML = '$59'
    }
    if (i == 1) {
      product[i].style.border = '10px solid green'
      constactForm.style.display = 'block'
      productName.innerHTML = 'Two MiracleWatts'
      productPrice.innerHTML = '$99'
      discount.innerHTML = '$99'
      totalPrice.innerHTML = '$99'
    }
    if (i == 2) {
      product[i].style.border = '10px solid green'

      constactForm.style.display = 'block'
      productName.innerHTML = 'Three MiracleWatts'
      productPrice.innerHTML = '$135'
      discount.innerHTML = '$159'
      totalPrice.innerHTML = '$135'
    }
  })
}

// pay with card

let card = document.getElementById('credit-card-section')

let secondForm = document.getElementById('contact-form')

card.addEventListener('click', function () {
  secondForm.style.display = 'block'
})

// validation Part

let emailError = document.getElementById('Email-error')
let email = document.getElementById('email')
let firstError = document.getElementById('First-error')
let firstName = document.getElementById('first_name')

let LastError = document.getElementById('Last-error')
let lastName = document.getElementById('last_name')

let address1error = document.getElementById('Address-error')
let address = document.getElementById('address_1')

let cityError = document.getElementById('City-error')
let city = document.getElementById('city')

let stateError = document.getElementById('State-error')
let state = document.getElementById('state')

let zipError = document.getElementById('Zip-error')
let zip = document.getElementById('zip_code')

function validation() {
  if (email.value === '') {
    emailError.textContent = 'please enter your email'
    email.style.backgroundColor = '#ff2b2b17'
    email.style.border = '2px solid #d91313'
  } else {
    emailError.textContent = ''
    email.style.backgroundColor = ''
    email.style.border = ''
  }

  if (!firstName.value) {
    firstError.textContent = 'Please Enter your first Name'
    firstName.style.backgroundColor = '#ff2b2b17'
    firstName.style.border = '2px solid #d91313'
  } else {
    firstError.textContent = ''
    firstName.style.backgroundColor = ''
    firstName.style.border = ''
  }

  if (!lastName.value) {
    LastError.textContent = 'please enter your last name'
    lastName.style.backgroundColor = '#ff2b2b17'
    lastName.style.border = '2px solid #d91313'
  } else {
    LastError.textContent = ''
    lastName.style.backgroundColor = ''
    lastName.style.border = ''
  }

  if (!address.value) {
    address1error.textContent = 'please enter your address'
    address.style.backgroundColor = '#ff2b2b17'
    address.style.border = '2px solid #d91313'
  } else {
    address1error.textContent = ''
    address.style.backgroundColor = ''
    address.style.border = ''
  }

  if (!city.value) {
    cityError.textContent = 'please enter valuid City '
    city.style.backgroundColor = '#ff2b2b17'
    city.style.border = '2px solid #d91313'
  } else {
    cityError.textContent = ' '
    city.style.backgroundColor = ''
    city.style.border = ''
  }

  if (!state.value) {
    stateError.textContent = 'please select State'
    state.style.backgroundColor = '#ff2b2b17'
    state.style.border = '2px solid #d91313'
  } else {
    stateError.textContent = ''
    state.style.backgroundColor = ''
    state.style.border = ''
  }

  if (!zip.value) {
    zipError.textContent = 'please enter valid Zip'
    zip.style.backgroundColor = '#ff2b2b17'
    zip.style.border = '2px solid #d91313'
  } else {
    zipError.textContent = ''
    zip.style.backgroundColor = ''
    zip.style.border = ''
  }
}

// faqs

let faqs = document.getElementById('faqs-container')

let faqbutton = document.getElementById('faqs')

faqbutton.addEventListener('click', function () {
  faqs.style.display = 'block'
})
