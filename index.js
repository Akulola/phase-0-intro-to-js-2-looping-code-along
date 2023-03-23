function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
  }
const names = ['Ada', 'Brendan', 'Ali'];
const eventName = 'birthday';
const messages = writeCards(names, eventName);
console.log(messages);

function countDown(StartingNum) {
   let i = StartingNum;
   while (i>=0) {
    console.log(i);
    i--;
   }
}