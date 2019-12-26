import * as mongoose from "mongoose";

const uri: string = "mongodb+srv://admin:nab24259495@akbcluster007-opgas.mongodb.net/qna?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!");
    }
});
export default mongoose;