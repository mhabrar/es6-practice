const Num =[1,-2,3,4,-5,6,-7,8,9,];
for(let i = 0; i<Num.length; i++){
   
    if (Num[i]>6){
        break;
    }
    // console.log(Num[i]);
}
for(let i = 0; i<Num.length; i++){
    if(Num[i]<0){
       // continue;
    }
    console.log(Num[i]);
}