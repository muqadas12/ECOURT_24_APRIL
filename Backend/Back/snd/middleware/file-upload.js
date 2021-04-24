const multer=require("multer");
//const uuid=require('uuid')

const MIME_TYPE_MAP={
    
    'file/pdf':'pdf'
}
const fileUpload=multer({
    limits:50000,
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads/images')

        },
        filename:(req,file,cb)=>{
            const ext=MIME_TYPE_MAP[file.mimetype];
            cb(null,+'.'+ext);

        }
    }),
    fileFilter:(req,file,cb)=>{
        const isValid=!!MIME_TYPE_MAP[file.mimetype];
        let error=isValid ? null: new Error('Invalid type');
        cb(error,isValid);
    }


});

module.exports=fileUpload;