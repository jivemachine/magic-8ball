userName = '';
userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');
const userQuestion = 'Will I become a billionaire?';
console.log(userName + 'asked: ' + userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  case 1:
  eightBall = 'It id decidedly so';
  case 2:
  eightBall = 'Reply hazy, try again.';
  case 3:
  eightBall = 'Cannot predict right now';
  case 4:
  eightBall = 'Don\'t Count on it';
  case 5:
  eightBall = 'My sources say thats gunna be a no, bud.';
  case 6:
  eightBall = 'Outlook, not good';
  case 7:
  eightBall = 'Yes.';
}
console.log(`The eight ball has answered: ${eightBall}`);
