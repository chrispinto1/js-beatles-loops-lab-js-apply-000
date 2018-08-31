// add solution here
theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length; i++){
     arr.push(musicians[i] + " plays " + instruments[i])
  }
  console.log(arr);
  return arr;
}
<<<<<<< HEAD

var facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
]

=======
>>>>>>> 3ae6c638b5b019c45d22ed1c9abc9ed4da8bebab
johnLennonFacts(facts);

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
<<<<<<< HEAD
    facts[i] = facts[i] + "!!!";
    i++;
=======
    facts.push(" ! ! !");
>>>>>>> 3ae6c638b5b019c45d22ed1c9abc9ed4da8bebab
  }
  return facts
}

function iLoveTheBeatles(num){
  var stuff =[];
  do{
    stuff.push("I love the Beatles!");
    num++;
  }
  while(num < 15);
  
  return stuff
}