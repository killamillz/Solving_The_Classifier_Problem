








function classifier (object){

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
    nums = x.map(function(str) {
      return parseInt(str); });
      nums.sort((a,b) => a - b)
      return nums
  }

  let solution = {};

input.forEach(function (element) {
  element.age = 2019 - new Date (element.dob) .getFullYear()
})
input.sort((p1, p2) => (p1.age - p2.age))

let members = []
if (members.length === 0){
  members.push([input[0]]);
}

for (let i = 1; i < input.length; i++){
  let bigArr = members[members.length-1]
  let y = bigArr[bigArr.length-1]
  if(bigArr.length < 3 && Math.abs(y.age - input[i].age) < 5 ){
    bigArr.push(input[i])
}else{

    members.push([input[i]])

  }

  solution.noOfGroups= members.length
    for ( let i = 0; i < members.length; i++){
      solution[`group${i+1}`] = {
        members:members[i],
        oldest: forOld(members[i]),
        sum: allSum(members[i]),
        regNo: reg(members[i])
      }
    }
}

return solution
}







export default classifier;



