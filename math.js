const MathFunctions={
    add:(...x)=>x.reduce((a,b)=>a+b),
    subract:(...x)=>x.reduce((a,b)=>a-b),
    multiply:(...x)=>x.reduce((a,b)=>a*b),
    divide:(...x)=>x.reduce((a,b)=>a/b),
    power:(...x)=>x.reduce((base,exponent)=>base**exponent),
    sqrt:(a)=>a**(1/2),
    cbrt:(a)=>a**(1/3),
    fullDivide:(a,b)=>{
    var reminder = a%b;
    return {reminder: reminder,quotient: (a-reminder)/b}
    },
    isOdd:(x)=>x%2==1,
    isEven:(x)=>x%2==0,
    nthRoot:(n,x,returnArray=false)=>{
        var negative=false;
    if(x<0){
        x=-x;
        negative=true;
    }
    var ans=x**(1/n);
    if(!returnArray){
        return ans;
    }
    else if(returnArray&&!negative){
        return[ans,-ans,Math.round(x**(1/n))]
    }
    else if(returnArray&&negative){
        return[ans,-ans,Math.round(x**(1/n)),
        `Really negative numbers dont have root.
This program turn negative numbers into possitive number then find the root`]
    }
    },
    isPrime:(x)=>{
        var factors=[];
        for(let a=0;a<=x;a++){
            if(x%a==0){
                factors.push(a);
            }
            
        }
        return factors.length==2;
    },
    isComposite:(x)=>{
        var factors=[];
        for(let a=0;a<=x;a++){
            if(x%a==0){
                factors.push(a);
            }
            
        }
        return factors.length>2;
    },
    isPrimeNorComposite:(x)=>{
        var factors=[];
        for(let a=0;a<=x;a++){
            if(x%a==0){
                factors.push(a);
            }
            
        }
        return factors.length<2;
    },
    factors:(x)=>{
        var factors=[];
        for(let a=0;a<=x;a++){
            if(x%a==0){
                factors.push(a);
            }
            
        }
        return factors;   
    },
    HCF:(...x)=>{
        var hcf=(a,b)=>{
            var ret;
            var min = (a<b)?a:b;
            for(let c = 0;c <= min;c++){
                if(a%c==0&&b%c==0){
                    ret = c;
                } 
            }
            return ret;
        }
        return x.reduce(hcf);
    },
    LCM:(...x)=>{
        var lcm=(a,b)=>{
            let ret;
            let max=(a>b)?a:b;
            let c = max;
            while(true){
                if(c%a==0&&c%b==0){
                    ret = c;
                    break;
                }
                c++;
            }
            return ret;
        }
        return x.reduce(lcm);

    },
    getInteger:(x)=>{
        if(x!=Math.floor(x)){
            let string = String(x);
            let integerString = string.slice(0,string.indexOf('.'));
            return Number(integerString);
        }
        else if(x==Math.floor(x)){
            return x;
        }
    },
    getDecimal:(x,returnDecimalPart=false)=>{
        if(x!=Math.floor(x)){
            let string = String(x);
            let decimalString = string.split('.')[1];
            return returnDecimalPart?Number(decimalString):Number(decimalString)/10**decimalString.length;
        }
        else if(x==Math.floor(x)){
            return 0;
        }
    },
    min:(...x)=>x.sort((a,b)=>(a<b)?-1:(a>b)?1:0)[0],
    max:(...x)=>x.sort((a,b)=>(a<b)?-1:(a>b)?1:0)[x.length-1],
    additiveInverseOf:(x)=>-x,
    multiplicativeInverseOf:(x)=>1/x,
    sigh:(x)=>{
        let ret;
        if(x>0){
            ret='+';
        }
        else if(x==0){
            ret='+/-';
        }
        else if(x<0){
            ret='-';
        }
        return ret;
    },
    callBackSigh:(x,whenPositive=()=>{},whenNegative=()=>{},whenPositiveNorNegative=()=>{})=>{
        let xSigh=MathFunctions.sigh(x);

        switch(xSigh){
            case '+':whenPositive();
            break;
            
            case '+/-':whenPositiveNorNegative();
            break;

            case '-':whenNegative();
            break;
        }
    },
    isPositive:(x)=>x>0,
    isNegative:(x)=>x<0,
    isPositiveNorNegative:(x)=>x==0,
    square:(x)=>x**2,
    cube:(x)=>x**3,
    isInteger:(x)=>x==MathFunctions.getInteger(x),
    isFloatingPointNumber:(x)=>x!=MathFunctions.getInteger(x),

}

function m_f(func){
    return MathFunctions[func]
}
