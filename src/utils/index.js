export const multiplication = () =>{
    const equationsArray =[]
    for(let i=0; i<10; i++) {
        const a = Math.floor(Math.random() * Math.floor(12));
        const b = Math.floor(Math.random() * Math.floor(12));
        equationsArray.push({
           key: `${a} * ${b}`,
            value: a*b
        });
    }
    return equationsArray;
}