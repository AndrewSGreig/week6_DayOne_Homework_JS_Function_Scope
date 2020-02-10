// // // // // // Episode1
// //  // // // // const scenario = {
// // // // // //   murderer: 'Miss Scarlet',
// // // // // //   room: 'Library',
// // // // // //   weapon: 'Rope'
// // // // // // };
// // // // // //
// // // // // // const declareMurderer = function() {
// // // // // //   return `The murderer is ${scenario.murderer}.`;
// // // // // // }
// // // // // //
// // // // // // const verdict = declareMurderer();
// // // // // // console.log(verdict);
// // // // // // // Expected output: The murderer is Miss Scarlet
// // // // // //
// // // // // //
// // // // // //
// // // // // // Episode2
// // // // // // const murderer = 'Professor Plum';
// // // // // //
// // // // // // const changeMurderer = function() {
// // // // // //   murderer = 'Mrs. Peacock';
// // // // // // }
// // // // // //
// // // // // // const declareMurderer = function() {
// // // // // //   return `The murderer is ${murderer}.`;
// // // // // // }
// // // // // //
// // // // // // changeMurderer();
// // // // // // const verdict = declareMurderer();
// // // // // // console.log(verdict);
// // // // // // // Expected output: declareMurderer has already been defined
// // // // //
// // // // //
// // // // // Episode 3
// // // // // let murderer = 'Professor Plum';
// // // // //
// // // // // const declareMurderer = function() {
// // // // //   let murderer = 'Mrs. Peacock';
// // // // //   return `The murderer is ${murderer}.`;
// // // // // }
// // // // //
// // // // // const firstVerdict = declareMurderer();
// // // // // console.log('First Verdict: ', firstVerdict);
// // // // //
// // // // // const secondVerdict = `The murderer is ${murderer}.`;
// // // // // console.log('Second Verdict: ', secondVerdict);
// // // // //
// // // // // //Expected Output:
// // // // // // First Verdict: The murderer is Mrs. Peacock
// // // // // // Second Verdict: The murderer is Professor Plum
// // // //
// // // //
// // // // Episode 4
// // // // let suspectOne = 'Miss Scarlet';
// // // // let suspectTwo = 'Professor Plum';
// // // // let suspectThree = 'Mrs. Peacock';
// // // //
// // // // const declareAllSuspects = function() {
// // // //   let suspectThree = 'Colonel Mustard';
// // // //   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// // // // }
// // // //
// // // // const suspects = declareAllSuspects();
// // // // console.log(suspects);
// // // // console.log(`Suspect three is ${suspectThree}.`);
// // // //
// // // // // Expected Outcome:
// // // // // The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// // // // // Suspect three is Mrs Peacock.
// // // // //
// // // // //// the scope of the suspect 3 reassignment is just in declareAllSuspects
// // //
// // // Episode 5
// // // const scenario = {
// // //   murderer: 'Miss Scarlet',
// // //   room: 'Kitchen',
// // //   weapon: 'Candle Stick'
// // // };
// // //
// // // const changeWeapon = function(newWeapon) {
// // //   scenario.weapon = newWeapon;
// // // }
// // //
// // // const declareWeapon = function() {
// // //   return `The weapon is the ${scenario.weapon}.`;
// // // }
// // //
// // // changeWeapon('Revolver');
// // // const verdict = declareWeapon();
// // // console.log(verdict);
// // //
// // // //Expected Outcome:
// // // // The weapon is the Revolver
// // // //
// // // //the constant is changed
// //
// //
// // // Episode 6
// // // let murderer = 'Colonel Mustard';
// // //
// // // const changeMurderer = function() {
// // //   murderer = 'Mr. Green';
// // //
// // //   const plotTwist = function() {
// // //     murderer = 'Mrs. White';
// // //   }
// // //
// // //   plotTwist();
// // // }
// // //
// // // const declareMurderer = function () {
// // //   return `The murderer is ${murderer}.`;
// // // }
// // //
// // // changeMurderer();
// // // const verdict = declareMurderer();
// // // console.log(verdict);
// // //
// // // //Expected outcome:
// // // // The murderer is Mrs White
// //
// //
// // // Episode 7
// // let murderer = 'Professor Plum';
// //
// // const changeMurderer = function() {
// //   murderer = 'Mr. Green';
// //
// //   const plotTwist = function() {
// //
// //     let murderer = 'Colonel Mustard';
// //     console.log(`murderer within plotTwist: ${murderer}`)
// //     const unexpectedOutcome = function() {
// //       murderer = 'Miss Scarlet';
// //       console.log(`murderer within unexpectedOutcome: ${murderer}`)
// //     }
// //     unexpectedOutcome();
// //   }
// //
// //   plotTwist();
// // }
// //
// // const declareMurderer = function() {
// //  return `The murderer is ${murderer}.`;
// // }
// //
// // changeMurderer();
// // const verdict = declareMurderer();
// // console.log(verdict);
// // // ExpectedOutcome:
// // //The murderer is Miss Mr Green
//
// step through: steps into plotTwist and updates the murderer, then steps into unexpectedOutcome and again updates, yet the verdict is the original value becuase the changeMurderer and plotTwist are block scoped (CONST)
//
//
// // Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// //Expected outcome
// //the weapon is Candle Stick




// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {

  let murderer = 'Mrs. Peacock';
  console.log(`within IF statement murderer: ${murderer}`)

}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Expected outcome
// The murderer is Professor Plum
//because it's block scoped (LET) then the setting of murderer to mrs peacock is cleared unset outside the if
