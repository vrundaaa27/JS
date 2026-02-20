let val = [250, 645, 300, 900, 50];

let index = 0;

for(let items of val){
    console.log(`The value at ${index} = ${val[index]}`);
    let offer = val[index]/10;
    let discount = val[index]-offer;
    console.log(`The value of items at ${index} after applying offer is ${discount}`);
    index++;
}

for( let i = 0; i < val.length; i++){
    console.log(`Value of items at ${i} = ${val[i]}`);
    let offer = val[i]/10;
    let discount = val[i] - offer;
    console.log(`The value of items at ${i} after applying offer is ${discount}`);
}