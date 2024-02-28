const{exec} = require('child_process');
const fs = require('fs');
const path = require('path');
// const {generateFile} = require('./generateFile');
const {v4:uuid} = require('uuid');

const outputPath = path.join(__dirname,'outputs');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true});  
}

const executeCpp = (filePath)=>{
    const jobId = path.basename(filePath).split(".")[0];
}