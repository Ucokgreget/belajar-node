const {readFile, writeFile} = require('fs').promises

const start = async () =>{

    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-async-pattern.txt', `Hi ini diluar nalar bjir:  ${first}, ${second}`)
        console.log(first, second);

    }
    catch(error){
        console.log(error);
    }
    
}

start()


//const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err, result) =>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(result)
//             }
//         })
//     })
// }