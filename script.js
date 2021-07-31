var max = [33,55,44,99,23,78];
var findmax = max[0];
for (var i=0; i<max.length; i++){
     if (findmax < max[i]){
         findmax = max[i];
     }

}
console.log(findmax);