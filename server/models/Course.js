const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema(
    {
        courseName:{
            type:String,
            required:true,
            trim:true
        },
        courseDescription:{
            type:String,
        },
        instructor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        whatWillYouLearn:{
            type:String
        },
        courseContent:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Section",
                required:true
            }
        ],
        ratingAndReviews:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"ratingAndReview"
            }
        ],
        price:{
            type:Number
        }, 
        thumbnail:{
            type:String
        },  
        tags:{
            type:[String] 
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
        studentsEnrolled:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
            }
        ],
        instructions:{
            type: [String]
        },
        status:{
            type: String,
            enum: ["Draft", "Published"]
        }
    }
);

module.exports=mongoose.model("Course",courseSchema);