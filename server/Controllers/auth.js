


exports.createAndUpdateUser = async(req,res)=>{
    //code
    const obj = {
        name:"keng",
        location:[103.24,13.754]
    }
    res.json(obj)           // ถ้าเป็น object ต้องส่งเป็น Jso
}