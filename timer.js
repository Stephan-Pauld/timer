const args = process.argv.slice(2);

let checkArray = function (args) {
  let newArr = [];
  for (const i of args) {
    newArr.push(parseInt(i))
  }
  cleanArray(newArr)
};

let cleanArray = function(arr) {
  for (const i of arr) {
    if ((!i) || (i < 0)){
    } else {
      timer(i);
      console.log('sending time to timer', i);
    }
  }
};

let timer = function(i) {
  setTimeout(() => {
    console.log(i);
  },i * 1000);
};

checkArray(args);





