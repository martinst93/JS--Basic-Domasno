function result() {
    let array = [5,3,7,5,2,1,9];
    let sum;

    let min = array.length;
    let max = 0;

    // let max = Math.max.apply(null,array);
    // let min = Math.min.apply(null,array);


    for( let i = 0 ; i < array.length ; i++ ){
        
        if (array[i] > max){
            max = array[i];
            
        }
        if ( array[i] < min ){
            min = array[i];
            
        }
        if( array[i] = (sum = max + min)){
           
        }
        
    }
    console.log(`Max number is ${max}`);
    console.log(`Min number is ${min}`);
    console.log(`Result = ${sum}`);
}

result();