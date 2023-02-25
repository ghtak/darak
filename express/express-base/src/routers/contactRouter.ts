import express, { Request, Response } from 'express'
import { STATUS_CODES } from 'http';

export default function ContactRouter() {
    const router = express.Router();
    router.get('/', async (req: Request, res: Response) => {
        res.status(200).send(
            {
                message: ""
            }
        )
    });

    router.post('/', async (req: Request, res: Response) => {
        res.status(200).send(
            {
                message: ""
            }
        )
    })
    return router;
}