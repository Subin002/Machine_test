let n=[];
for(let i=2; i<=30; i++){
    if(i%2==0){
        n.push(i)
    }
}

let str='';
let count =0;
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str+=n[count++];
        str+=' ';
    }
    str+='\n'
}
count =n.length-1;
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        str+=n[count--]-1;
        str+=' ';
    }
    str+='\n'
}
console.log(str);