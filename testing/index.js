


// This is currently the onclick event handler
// ** There should also be an event handler on the select, so that the calculation
// is triggered when either the buttons or the select menu are changed. I'll let you
// figure out how to do this.
function updateProgram(buttonID){
  // Change the class of the button so it becomes active.
  let selectedProgramButton = document.getElementById(buttonID)
  let selectedIntensitySelect = document.getElementById('intensity')

  let allButtons = document.querySelectorAll('button')
  for(button of allButtons){
    // Remove all the classes from all buttons. This will also have the side
    // effect of removing any other classes, but I'm assuming there won't be any other.
    button.classList = ''
  }

  selectedProgramButton.classList.toggle('selected')

  // Show the price in the price div.
  let priceDiv = document.getElementById('program-details')
  let selectedProgram = buttonID
  // Get the value of the selected <option>
  let selectedIntesity = selectedIntensitySelect.options[selectedIntensitySelect.selectedIndex].value
  // alert(selectedIntesity)
  let programDetails = calculateProgramDetails(selectedProgram, selectedIntesity)
  // programDetails is an object with attributes price and numberOfSessions.
  // (see function documentation below)
  let price = programDetails.price
  let numberOfSessions = programDetails.numberOfSessions

  // Inject the retrieved price and number of sessions into the program details div.
  // A more elegant way to do this would be to use a template literal as follows:
  // priceDiv.innerHTML = `The price is EUR ${price}. The number of sessions is ${numberOfSessions}.`
  priceDiv.innerHTML = 'The price is EUR ' + price + '. The number of sessions is ' + numberOfSessions + '.'
}


/* Given a program and intensity, generate a program configuration

Args:
  program: string - One of 'meditation', 'psychology', or 'mentoring'.
  intesity: string - One of 'low', 'medium', or 'high'.

Returns:
  object with two attributes, price and numberOfSessions.

*/
function calculateProgramDetails(program, intesity){

  // An object with attributes 'meditation', 'psychology' and 'mentoring'
  // Each of these are objects themselves with attributes 'light', 'medium', and 'high',
  // which are in turn objects containing the price and number of sessions for that configuration
  // To get the price for light meditation, you'd do programs.meditation.light.price
  // See comment below on how to do this with square bracket notation, which
  // you will need to access attributes that are not predetermined when you write the code,
  // such as in this case i.e. you don't know which program and intensity the
  // client will choose when you're programming and would have to use the arguments
  // above as placeholders. You cannot do this with dot notation, but can with square bracket notation.
  // i.e. programs.meditation is equivalent to programs['meditation']
  // programs.meditation.light is equivalent to programs['meditation']['light'] and so on.
  // Note that the attribute names in the square brackets are strings, which means
  // you can substitute them for variables that would evaluate to strings
  // (the arguments above for example), so to get the price for the selected program and intensity
  // you would do programs[program][intesity]['price'], where program and intensity
  // are just placeholders that would evaluate to the supplied program and intensity.
  let programs = {
    'meditation': {
      'light': {
        'price': 12,
        'numberOfSessions': 5
      },
      'medium': {
        'price': 10,
        'numberOfSessions': 5
      },
      'high': {
        'price': 8,
        'numberOfSessions': 5
      }
    },
    'psychology': {
      'light': {
        'price': 120,
        'numberOfSessions': 5
      },
      'medium': {
        'price': 100,
        'numberOfSessions': 5
      },
      'high': {
        'price': 200,
        'numberOfSessions': 5
      }
    },
    'mentoring': {
      'light': {
        'price': 30,
        'numberOfSessions': 5
      },
      'medium': {
        'price': 20,
        'numberOfSessions': 5
      },
      'high': {
        'price': 10,
        'numberOfSessions': 5
      }
    },
  }

  /*
  How to access information in objects:
  programs.mentoring.medium.price // programs['mentoring']['medium']['price'] -> programs[program][intesity]['price']
  */
  let programDetails = {
    'price': programs[program][intesity]['price'],
    'numberOfSessions': programs[program][intesity]['numberOfSessions']
  }

  return programDetails
}


/* Does the same thing as the one above, but in a more naïve manner.

*/
function calculateProgramDetailsTHENAIVEWAY(program, intesity){

    let price = 0
    let numberOfSessions = 0

    if (program === 'meditation'){

      if (intesity === 'light'){
        price = 12
        numberOfSessions = 5
      }
      else if (intesity === 'medium'){
        price = 10
        numberOfSessions = 5
      }
      else if (intesity === 'high'){
        price = 8
        numberOfSessions = 5
      }

    }

    else if (program === 'psychology'){
      if (intesity === 'light'){
        price = 50
        numberOfSessions = 5
      }
      else if (intesity === 'medium'){
        price = 30
        numberOfSessions = 5
      }
      else if (intesity === 'high'){
        price = 20
        numberOfSessions = 5
      }
    }

    else if (program === 'mentoring'){
      if (intesity === 'light'){
        price = 100
        numberOfSessions = 5
      }
      else if (intesity === 'medium'){
        price = 140
        numberOfSessions = 5
      }
      else if (intesity === 'high'){
        price = 800
        numberOfSessions = 5
      }
    }

    // Create an object with the configuration information i.e. price and
    // number of sessions, and then return it.
    let programDetails = {
      'price': price,
      'numberOfSessions': numberOfSessions
    }


    return programDetails

    // Return an object with price and numberOfSessions as attributes
    // When you read the return value you should be able to access the price using the .price attribute
    // and likewise for numberOfSessions. Example:
    // let programDetails = calculateProgramDetails('psychology', 'light')
    // programDetails is an object {'price': 50, 'numberOfSessions': 5} based on the rules above.
    // price = programDetails.price
    // numberOfSessions = programDetails.numberOfSessions
}
