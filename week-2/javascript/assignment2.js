function calculate(args){
    let result;
    if(args.op==="+"){
    result=args.n1+args.n2;
    }else if(args.op==="-"){
    result=args.n1-args.n2;
    }else{
    result="Not supported";
    }
    return result;
    }


// method 1
const args = {
  op : '+';
  n1 : 3;
  n2 : 4;
}    

//method 2

class Calcuate{
    constructor (op,n1,n2){
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

const args = new Calcuate('+',3,4)


