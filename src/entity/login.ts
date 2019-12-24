import mongoose from "../db";

export interface ILogin extends mongoose.Document {
    uid: string;
    first_name: string;
    last_name: string;
    user_name: string;
    email_id: string;
    phone_no: number;
    admin_id: string;
    login_type: string;
    password: string;
}

export const LoginSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    first_name: { type: String},
    last_name: { type: String},
    user_name: { type: String, required: true },
    email_id: { type: String, required: true },
    phone_no: { type: Number, required: true },
    admin_id: { type: String },
    company_name: { type: String },
    login_type: { type: String, required: true },
    password: { type: String, required: true }
});

const Login = mongoose.model<ILogin>("lib_login", LoginSchema);
// const Book = mongoose.model<IBook>("Book", BookSchema);
// export default Book;
export default Login;