const fs = require('fs');
const path = require('path');
const {v4:uuid} = require('uuid');

const dirCodes = path.join(__dirname,'codes');
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true}); //happening synchornously 
}

const generateFile = (format,content) => {
    const jobId = 'temp';
    const filename = `${jobId}.${format}`;    

    const filePath = path.join(dirCodes,filename);
     fs.writeFileSync(filePath,content);
    return filePath;
};

module.exports ={
    generateFile,
}