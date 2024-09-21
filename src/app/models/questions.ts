import mongoose, {Schema} from "mongoose";

const questionSchema =new Schema(
    {
        title:String,
        description :String,
        link :String,
        options:String,
        options1:String,
        options2:String,
        options3:String,
        options4:String,
        correctoption:String
    
    },
    {
        timestamps:true,
    }
);
const question =mongoose.models.Topic || mongoose.model("Topic",questionSchema) 

export default question;