var arry1=[1,2,3,4,5];
var arry2=[1,2,5,6,7];
for(var i=0; i<arry1.length; i++){
  for(var j=0; j<arry2.length; j++){
    if(arry1[i] == arry2[j]){
      console.log(arry1[i]);
    }
  }
}