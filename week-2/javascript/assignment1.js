function max(numbers){
    let tmp,big;
    for (let i = 0; i < numbers.length; i++){
        if( i == 0){
            tmp = numbers[0];
            big = numbers[0];
        }else{
            tmp = numbers[i];
            if (tmp > big){
                big = numbers[i]
            }
        }
    }
    return(big);
    // your code here, for-loop method preferred
    }