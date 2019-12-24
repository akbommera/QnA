import { Request, Response } from "express";
import Evaluation from "../../entity/evaluations";
import Login from "../../entity/login";

exports.get = async function (req: Request, res: Response) {
    try {
        if (Object.keys(req.query).length > 0) {
            let result: any;
            console.log(req.query);
            if (req.query.login_id && req.query.login_type && req.query.login_type === 'user') {
                const com: any = await Login.find({ admin_id: req.query.admin_id, company_name: { $ne: null } });
                const login: any = await Login.find({ admin_id: req.query.admin_id, uid: req.query.login_id });
                result = await Evaluation.find({ admin_id: req.query.admin_id, login_uid: req.query.login_id });
                if (result[0]) {
                    return res.status(200).send([{
                        marks: result[0].marks,
                        out_of: result[0].out_of,
                        company_name: com[0].company_name,
                        first_name: login[0].first_name,
                        last_name: login[0].last_name
                    }]);
                } else {
                    return res.status(200).send([]);
                }

            } else {
                const login: any = await Login.find({ admin_id: req.query.admin_id });
                result = await Evaluation.find({ admin_id: req.query.admin_id });
                const list = [];
                for (let i = 0; i < login.length; i++) {
                    for (let j = 0; j < result.length; j++) {
                        if (login[i].uid === result[j].login_uid) {
                            list.push({
                                marks: result[j] ? result[j].marks : undefined,
                                out_of: result[j] ? result[j].out_of : undefined,
                                first_name: login[i].first_name,
                                last_name: login[i].last_name
                            });
                        }
                    }
                }
                return res.status(200).send(list);
            }
        } else {
            return res.status(400).send('Bad Request');
        }
    } catch (error) {
        console.log('ERROR: getEvaluation', error);
        return res.status(500).send('Internal Server Error');
    }
}
