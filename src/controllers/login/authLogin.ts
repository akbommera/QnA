import { Request, Response } from "express";
import Login from "../../entity/login";

exports.post = async function (req: Request, res: Response) {
    try {
        if (req.body) {
            const newLogin = new Login(req.body);
            const { user_name, email_id, phone_no, password } = req.body;
            const result = await Login.find().and([
                { $or: [{ user_name }] },
                { $or: [{ password }] }
            ]);
            return res.status(200).send(result);
        }
    } catch (error) {
        console.log('ERROR: authLogin', error);
    }
}
