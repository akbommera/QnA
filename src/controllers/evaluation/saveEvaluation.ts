import { Request, Response } from "express";
import Evaluation from "../../entity/evaluations";

exports.post = async function (req: Request, res: Response) {
    try {
        if (req.body) {
            const newLogin = new Evaluation(req.body);
            const result = await newLogin.save();
            // console.log(req.body);
            // const result = req.body;
            return res.status(200).send(result);
        }
    } catch (error) {
        console.log('ERROR: SaveEvaluations', error);
        return res.status(500).send('Internal Server Error');
    }
}
