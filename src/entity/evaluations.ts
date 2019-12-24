import mongoose from "../db";

export interface IEvaluations extends mongoose.Document {
    login_uid: string;
    admin_id: string;
    user_name: string;
    list: { question: string, options: string[], answer: string }[];
    marks: number;
    out_of: number;
}

export const EvaluationsSchema = new mongoose.Schema({
    login_uid: { type: String, required: true },
    admin_id: { type: String, required: true },
    user_name: { type: String, required: true },
    marks: { type: Number, required: true },
    out_of: { type: Number, required: true },
    list: { type: [{ question: String, options: [String], answer: String }], _id: false }
});

const Evaluation = mongoose.model<IEvaluations>("lib_Evaluation", EvaluationsSchema);
// const Book = mongoose.model<IBook>("Book", BookSchema);
// export default Book;
export default Evaluation;