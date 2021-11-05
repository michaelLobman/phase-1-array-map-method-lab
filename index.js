const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){ 
 const thisIsIt = tutorials.map(element => {
    const splitArrays = element.split(" ");
    const capitalizeLetters = splitArrays.map(element => {
      const firstLetters = element[0].toUpperCase();
      return firstLetters + element.substring(1)
  }); 
  return capitalizeLetters.join(' ');
  });
return thisIsIt;
};



const soClose = tutorials.map(element => {
  const splitArrays = element.split(" ");
  const capitalizeLetters = splitArrays.map(element => {
    const firstLetters = element[0].toUpperCase();
    return firstLetters + element.substring(1)
    //return firstLetters;
    //return Object.assign({}, splitArrays, element[0].toUpperCase());
    //return Object.assign({}, element, element[0].toUpperCase());
  });
  //const combineWords = capitalize.join(" ");
  //return capitalizeLetters;
  return capitalizeLetters.join(' ');
 }); 

/*closest I've come...
const titledCase = tutorials.map(element => {
  const splitArrays = element.split(" ");
  const firstLetters = splitArrays.map(element => {
    return Object.assign({}, element, element[0].toUpperCase());
  });
  return firstLetters.join();
 }); 
});

const titledCase = tutorials.map(element => {
  const splitArrays = element.split(" ");
  const capitalize = splitArrays.map(element => {
    const firstLetters = element[0].toUpperCase();
    return Object.assign({}, splitArrays, firstLetters.substring(1));
  });
  return capitalize;;
 }); 

 const titledCase = tutorials.map(element => {
  const splitArrays = element.split(" ");
  const capitalize = splitArrays.map(element => {
    return Object.assign({}, element, element[0].toUpperCase());
    //return Object.assign({}, element, element[0].toUpperCase());
  });
  //const combineWords = capitalize.join(" ");
  return capitalize[0].join();
 }); 

*/
// const titledCase = tutorials.map((element) => {
//  const splitElement = element.split(" ");
//  const capitalizeFirst = splitElement.charAt(0).toUpperCase();
// });

// return splitElement.charAt(0).toUpperCase();
// let splitElement = element.split(" ");


//   return element.charAt(0);

// const titledCase = tutorials.map()

// hello[0].toUpperCase() + hello.substring(1)

// function testing(element) {
//  const splitArray = element.split(" ");

//}

const sampleArray = ['hello world', 'i michael', 'will absolutely', 'succeed in this'];

const splitting = sampleArray.map(element =>
{
  const split = element.split(" ");
  split.map(element => {
    const letters = element.split("");
    const firstLetter = letters[0];
    return firstLetter;
  })
  return split;
});



const array = ['i', 'will', 'figure', 'this', 'out'];



const firstLetter = array.map(element => {
  return element.charAt(0).toUpperCase();
});





const testingFunctions = sampleArray.map(element => {
  const splitArray = element.split(' ');
  splitArray.map(element => {
    return element.charAt(0).toUpperCase();
  });

  return
})




//    return element.charAt(0).toUpperCase(0);


/*
const students = ['harry', 'ron', 'hermione', 'ginevra'];
// const rollCall = [];

for (const student of students) {
  rollCall.push(student + ' the wizard' );
}


const rollCall = students.map(student => student + " the wizard");

const robots = [
  { name: 'Johnny 5', modes: 5, isActivated: false, },
  { name: 'C3PO', modes: 3, isActivated: false, },
  { name: 'Sonny', modes: 2.5, isActivated: false, },
  { name: 'Baymax', modes: 1.5, isActivated: false, },
];

const activatedRobots = robots.map( robot => {
  return Object.assign({}, robot, { 
    modes: robot.modes * 2,
    isActivated: true,
  })
});
*/