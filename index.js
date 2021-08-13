var option =(text)=>{
    let x=document.createElement('option');
    x.value=text;
    x.innerHTML=text;
    document.getElementById('select').appendChild(x);
}

var createElement=(element)=>{
    let x=document.createElement(element);
    document.body.appendChild(x);
    return x;
}

var keys=Object.keys(MathFunctions);

for(let a in keys){
    option(keys[a]);
}

document.getElementById('button').onclick=click;

function click(){
var selectValue=document.getElementById('select').value;

if(MathFunctions[selectValue].length==0){
    let E=createElement('TextArea');
    E.cols=100;
    E.rows=25;
    E.placeholder='split numbers with comma';
    let Button=createElement('button');
    Button.innerHTML='GO';
    let p;
    Button.onclick=()=>{
        let numbers=E.value.split(',');
        p = createElement('p');
        p.innerHTML=`ANSWER:${MathFunctions[selectValue].apply('',numbers.map(Number))}`;
        p.style.color='#ffffff';
    };
    let hide = createElement('button');
    hide.innerHTML='ERASE';
    hide.onclick=()=>{
        E.style.display='none'
        Button.style.display='none';
        if(typeof p!='undefined')p.style.display='none';
        hide.style.display='none';
    }
}
else if(MathFunctions[selectValue].length!=0){
    let inputs = [];
    for(let a = 0;a<MathFunctions[selectValue].length;a++){
        let input=createElement('input');
        input.type='number';
        inputs.push(input);    
    }
    let Button=createElement('button');
    Button.innerHTML='GO';
    let p;
    Button.onclick=()=>{
        p = createElement('p');
        let number = inputs.map((a)=>Number(a.value));
        if(selectValue!='fullDivide'){
        p.innerHTML=selectValue!='callBackSigh'?`ANSWER:${MathFunctions[selectValue].apply('',number)}`:'it actually call functions it actually has 4 parrameters 1 is the number and others are call backs.';
        p.style.color='#ffffff';
        }
        else if(selectValue = 'fullDivide'){
            p.innerHTML=`ANSWER:quotient=${MathFunctions[selectValue].apply('',number).quotient}, reminder=${MathFunctions[selectValue].apply('',number).reminder}`;
            p.style.color='#ffffff';
        }

    };
    let hide = createElement('button');
    hide.innerHTML='ERASE';
    hide.onclick=()=>{
        for(let a in inputs){
            inputs[a].style.display='none';
        }
        Button.style.display='none';
        p.style.display='none';
        hide.style.display='none';
    }
}
}