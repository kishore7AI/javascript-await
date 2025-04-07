const data= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const ans="kishore";
        if(ans){
            resolve(ans);
        }else{
            reject('no data');
        }
    },3000);
});
function getuserDetails(name){
    const userDetails= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let userDetails=[{name:"kishore",age:"30"}]
            const user= userDetails.find((user)=>user.name==name)
            if(user){
                resolve(user)
            }else{
                reject('nothing')
            }
        },3000);
    });
    return userDetails;
}
async function process(){
try{
const name = await data;
const userDetail=await getuserDetails(name);
console.log(userDetail);
console.log('Test')
}catch(error){
console.log(error.message);
}finally{
console.log('finally')
}
}
process();
console.log('Last')
