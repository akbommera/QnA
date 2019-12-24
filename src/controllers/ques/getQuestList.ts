import { Request, Response } from "express";
import * as mongo from 'mongoose';
import QuestionList, { IQuestion } from "../../entity/questionList";

exports.get = async function (req: Request, res: Response) {
    try {
        if (req.query) {
            let result = await QuestionList.find({ admin_id: req.query.admin});
            return res.status(200).send(result);
        }  else {
            return res.status(400).send('Bad Request');
        }
    } catch (error) {
        console.log('ERROR: getQuestList', error);
        return res.status(500).send('Internal Server Error');
    }
}
