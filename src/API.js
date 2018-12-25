const Employee = [
    {name:'pham lap', edu:'IT'},
    {name:'tran phong', edu:'Tester'},
    {name:'nguyen lan', edu:'Designer'},
];
export default ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve(Employee);
        }, 3000);
    })
}