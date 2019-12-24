import { Request, Response } from "express";
import QuestionList from "../../entity/questionList";

exports.post = async function (req: Request, res: Response) {
    try {
        const quesList = new QuestionList(req.body);
        const uuid = require('uuid');
        quesList.uid = uuid();
        const result = await quesList.save();
        return res.send(result);
    } catch (error) {
        console.log('ERROR: saveQuestions', error);
        return res.status(500).send('Internal Server Error');
    }
}
