function add(a,b) {
    return a+b;
}
module.exports.add = add;

function compare(arr1,arr2){
 if (arr1.length != arr2.length){
   return false;
 }
 for (let i=0;i<arr1.length;i++){
   if(arr1[i] != arr2[i]){
     return false;
   }
 }
 return true;
}
module.exports.compare = compare;

function largest(arr1){
  let largest = 0;
  for (let i=0;i<arr1.length;i++){
    if (arr1[i]>largest){
      largest = arr1[i];
    }
  }
  return largest;
}
module.exports.largest = largest;