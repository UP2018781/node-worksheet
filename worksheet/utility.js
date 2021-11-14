function add(a,b) {
    return a+b;
}
module.exports.add = add;

function compare(arr1,arr2){
  if (arr1 == arr2){
    console.log(arr1,arr2);
    return true;
  } else {
    return false;
  };
}
module.exports.compare = compare;
