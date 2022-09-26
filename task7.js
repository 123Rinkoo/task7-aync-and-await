// ASYNC AND AWAIT
// asyn ek inbuilt function hai jo  ek promise return karta hai, is function ke ander hota hai await vo kehta hai ki mai abhi kuch aur kar rha hun tum tab tak aage ke kaam kar lo, phir mere pass aana...

console.log('promise 1: shows ticket');//1
console.log('promise 2: shows ticket');//2

let premovie= async ()=>{
    const promisewifebrings=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');    
        }, 2000);
    })

    let ticket= await promisewifebrings; //ye bolega wait karne ko, ki jab mera resolve aayega tab kaam krunga 

    console.log(`wife: i have the ${ticket}`);//5
    console.log("husband: let's go get in");//6
    console.log("wife: no i am hungry");//7



    const getpopcorn =new Promise((resolve,reject)=> resolve('popcorn'));

    let popcorn=await getpopcorn;
    console.log(`husband: i got some ${popcorn}`)//8
    console.log('husband: we should go in')//9
    console.log('wife: i need butter on my ');//10


    const addbutter=new Promise((resolve,reject)=>resolve('butter'));

    let butter=await addbutter;
    console.log(`${butter} has been added`);//11


    const getcoldrink= new Promise((resolve,reject)=>resolve('coldrink'))

    let thanda=await getcoldrink;
    console.log(`hello, here is your ${thanda}`)


    return ticket;
}
premovie().then((m)=>console.log(`person3: shows ${m}`))//12
console.log('promise 4: shows ticket');//3
console.log('promise 5: shows ticket');//4

// ....................................................................................
// how to use promise.all here
console.log('promise 1: shows ticket');//1
console.log('promise 2: shows ticket');//2

let premovie1= async ()=>{
    const promisewifebrings=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');    
            let error=true;
            if(!error)
            reject("sad face ticket not get")
        }, 2000);
    })
    //.........................................................
    // inme aise error catch ki jati hai

     // let ticket= await promisewifebrings; 
    let ticket
    try{
        ticket= await promisewifebrings;
    }
    catch(e){
        ticket="sad face"
    }
    //.........................................................

    const getpopcorn =new Promise((resolve,reject)=> resolve('popcorn'));

    const addbutter=new Promise((resolve,reject)=>resolve('butter'));
    
    const getcoldrink= new Promise((resolve,reject)=>resolve('coldrink'))

    let [popcorn, butter,coldrink]=await Promise.all([getpopcorn,addbutter,getcoldrink])
    console.log(`${popcorn}, ${butter}, ${coldrink}`)//agar biwi bhi kuch laane gyi aur husband bhi kuch laane gya to jab saare promise solve to ye hoga...

    return ticket;
}
premovie().then((m)=>console.log(`person3: shows ${m}`))//12
console.log('promise 4: shows ticket');//3
console.log('promise 5: shows ticket');//4
//...................................................................................................................
// hum aise bhi likh skte hain

let variable= await new Promise((resolve,reject)=>{
        resolve('hello')
})
console.log(variable); //agar hum await ni lagate aise case mai to ye pending print karta, isliye wait karana padhega taaki complete ho ske.

//...................................................................................................................

let arrq = [{ user: 'beena', designation: 'accountant' }, { user: 'hina', designation: 'designer' }];
console.log('Dont worry you have your array, i am before promise',arr);
let creativity = async (post) => {
    const createpost = new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push(post);
            resolve(`post whose user name is ${post.user} is added`);
        }, 2000);
    })


    let created = await createpost;
    console.log(`${created}`)
    console.log(arr);

    let deletepost =await new Promise((resolve, reject) => {
        let deleted = arr.shift();
        resolve(deleted.user);
    })
    let deleted = await deletepost;
    console.log(`${deleted} is deleted`)

    return created;

}
creativity({ user: 'rinkoo', designation: 'engineer' }).then((created) => console.log(`${created} was added`));

console.log('i am after promise')
console.log('before editing array is:',arr)

//...................................................................................................................
//agar hume a,b,c,d,e line wise print karana hai even if there is also asynchronous function.
// AWAIT SIRF PROMISE KE SAATH WORK KARTA HAI, SETTIMEOUT AND ALL KE SAATH WORK NI KARTA.
console.log('a');
console.log('b')
console.log('c')
let bro= async()=>{
    const d= await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d');
        }, 3000);
    })
    console.log(d);

    const e=await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('e');
        }, 1000);
    })
    console.log(e);
}
bro();