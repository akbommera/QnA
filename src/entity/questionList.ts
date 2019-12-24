import mongoose from "../db";
export interface IQuestion extends mongoose.Document {
    uid: string;
    admin_id: string;
    question_type: string;
    list: { question: string, options: string[], answer: string }[];
}

export const QuestionSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    admin_id: { type: String, required: true },
    question_type: { type: String, required: true },
    list: { type: [{ question: String, options: [String], answer: String }], required: true }
});

const QuestionList = mongoose.model<IQuestion>("lib_question_list", QuestionSchema);

export default QuestionList;