const mongoose=require("mongoose")

const UploadRecord=new mongoose.Schema({
    pathii:{type: String, requied: true },

    patha:{type: String, requied: true },
    captiona:{type: String, requied: true },
    pathb:{type: String, requied: true },
    captionb:{type: String, requied: true },

    pathc:{type: String, requied: true },
    captionc:{type: String, requied: true },

    pathd:{type: String, requied: true },
    captiond:{type: String, requied: true },

    pathe:{type: String, requied: true },
    captione:{type: String, requied: true },

    pathf:{type: String, requied: true },
    captionf:{type: String, requied: true },

    pathg:{type: String, requied: true },
    captiong:{type: String, requied: true },

    pathh:{type: String, requied: true },
    captionh:{type: String, requied: true },

    pathi:{type: String, requied: true },
    captioni:{type: String, requied: true },

    pathj:{type: String, requied: true },
    captionj:{type: String, requied: true },

    pathk:{type: String, requied: true },
    captionk:{type: String, requied: true },

    pathl:{type: String, requied: true },
    captionl:{type: String, requied: true },

    pathm:{type: String, requied: true },
    captionm:{type: String, requied: true },

    pathn:{type: String, requied: true },
    captionn:{type: String, requied: true },

    patho:{type: String, requied: true },
    captiono:{type: String, requied: true },





    pathafid:{type: String, requied: true },






    img: { data: Buffer, contentType: String }
})
const  UploadRecordss=mongoose.model("UploadRecord",UploadRecord)

module.exports=UploadRecordss;