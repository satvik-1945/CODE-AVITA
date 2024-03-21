const express = require('express');
const {generateFile} = require('./generateFile');
const {executeCpp} = require('./executeCpp'); 
const app = express();
const cors = require('cors');

//middlewares
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res){
    res.send("elcome to CODE AVITA the online Judge");
});

app.post("/run",async(req,res)=>{
    // console.log(req.body);

    const {language="cpp",code} = req.body
    if(code === undefined){
        return res.status(404).json({success:false,error:"empty code body!"})
    }
    try{
        
        const filePath = await generateFile(language,code);
        const output = await executeCpp(filePath);
        
        res.json({filePath,output});
    }catch(error){
        return res.status(500).json({success:false,error: error.message});
    }

    // ---------------------------------------------------------------------
    
    // console.log(filePath);
    // const output = await executeCpp(filePath);
    
    // const code = req.body.code;
    // res.json(req.body);
});

app.listen(5000,function(){
    console.log("server listening on 5000")
})