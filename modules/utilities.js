const formatNumbers = (number) => {
    let intNum = String(Math.floor(number));
    let newNum = "";
    for (let i=intNum.length-3; i>0; i-=3) {
        newNum = intNum.slice(0,i) + "," + intNum.slice(i);
        intNum = newNum;
    }
    let decimal = String(number).split(",");
    if(decimal[1]===true) {
        return newNum + "," + decimal[1];
    } else {
        return number;
    }
};

export default formatNumbers;