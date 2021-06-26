import { Request, Response } from 'express';
import { ListSentComplimentsService } from '../services/ListSentComplimentsService';

class ListSentComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listReceivedComplimentsService = new ListSentComplimentsService();

    const compliments = await listReceivedComplimentsService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListSentComplimentsController };