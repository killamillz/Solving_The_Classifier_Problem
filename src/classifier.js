


function classifier (object){

  let d = JSON.stringify(object)
  let newArr = JSON.parse(d)

  function forOld (value){
    let x = []
    for (let i = 0; i < value.length; i++)
    x.push(value[i].age)
    let y = Math.max(...x)
    return y
  }

  function allSum(value){
    let x = [];
    let sums = 0;
    for (let i = 0; i < value.length; i++)
    x.push(value[i].age)
    x.map(y => sums += y);
    return sums
  }

  function reg (value){
    let x = []
    for (let i = 0; i < value.length; i++)
    x.push(value[i].regNo)
    let nums = x.map(function(str) {
      return parseInt(str); });
      nums.sort((a,b) => a - b)
      return nums;
  }

  let solution = {};

newArr.forEach(function (element) {
  element.age = 2019 - new Date (element.dob) .getFullYear()
})
newArr.sort((p1, p2) => (p1.age - p2.age))



let members = []
for(let i of newArr){

  if (members.length === 0){
    members.push([i]);
  }
}


for (let i = 1; i < newArr.length; i++){
  let bigArr = members[members.length-1]
  let y = bigArr[bigArr.length-1]


  if(bigArr.length < 3 && Math.abs(y.age - newArr[i].age) <= 5 ){
    bigArr.push(newArr[i])
}else{

    members.push([newArr[i]])

  }


}


solution.noOfGroups= members.length
  for ( let i = 0; i < members.length; i++){
    solution[`group${i+1}`] = {
      members:members[i],
      oldest: forOld(members[i]),
      sum: allSum(members[i]),
      regNos: reg(members[i])
    }
  }

  console.log(solution)
return solution
}







export default classifier;


