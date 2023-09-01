

number = 682;
count = 0;
while(true){
    if(number%2 == 0){
        number /= 2;
    }
    else{
        number = (number*3 + 1)/2;
    }
    count++;
    
    if(number == 1){
        console.log(count);
        break;
    }
}