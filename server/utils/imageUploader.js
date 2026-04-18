const cloudinary=require("cloudinary").v2;

exports.uploadImageToCloudinary=async(file,folder,height,quality, resourceType="auto")=>{
    const options={folder};
    if(height){
        options.height=height;   
    }
    if(quality){
        options.quality=quality;
    }
    options.resource_type= resourceType;
    console.log("Cloudinary options:", options);
    console.log("File path:", file.tempFilePath);
    if(options.resource_type === "video") {
        return await cloudinary.uploader.upload_large(file.tempFilePath, options);
    }
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}