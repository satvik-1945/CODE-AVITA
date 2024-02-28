const{exec} = require('child_process');
const fs = require('fs');
const path = require('path');
// const {generateFile} = require('./generateFile');
const {v4:uuid} = require('uuid');

const outputPath = path.join(__dirname,'outputs');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true});  
}

const executeCpp = (filepath)=>{
    const jobId = path.basename(filepath).split(".")[0];
    const outPath = path.join(outputPath,`${jobId}.out`); 
    // console.log(jobId);
    // console.log(outPath);
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out `,
        (error,stdout,stderr)=>{
            if(error){
                reject({error,stderr});
            }
            if( stderr){
                reject(stderr);
            }
            resolve(stdout);
        });
        
    });
};
module.exports ={
    executeCpp,
}