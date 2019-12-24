import { Request, Response } from "express";
import Login from "../../entity/login";

exports.post = async function (req: Request, res: Response) {
    try {
        if (req.body) {
            const uuid = require('uuid');
            req.body['uid'] = uuid();
            if(req.body['company_name'] && req.body['company_name'].length > 0) {
                req.body['login_type'] = 'admin'
                const words = req.body['company_name'].split(' ');
                req.body['admin_id'] = '';
                words.forEach((element: any) => {
                req.body['admin_id'] += element.slice(0, 1);
                });
            } else {
                req.body['login_type'] = 'user';
            }
            const newLogin = new Login(req.body);
            const result = await newLogin.save();
            return res.status(200).send(result);
        }
    } catch (error) {
        console.log('ERROR: SaveNewLogin', error);
        return res.status(500).send('Internal Server Error');
    }
}
