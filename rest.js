const minOfAll=(...num)=>{
    let min;
    let temp;
    for(let i=0; i<num.length; i++){
        for(let j=i+1; j<num.length; j++){
            if(num[i]<num[j]){
                temp=num[i];
                num[i]=num[j];
                num[j]=temp;
            
                
            }

        }
        
    }return num[num.length-1];


}
console.log(minOfAll(1, 3, 5,2,7,8,34));
console.log(minOfAll(90, 34, 12, 5,6, 7, 4, 89));
console.log(minOfAll(45, 23,14, 9, 0, 12,3));