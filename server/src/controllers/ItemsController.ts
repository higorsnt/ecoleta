import { Request, Response } from 'express';
import ip from 'ip';

import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response): Promise<void> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${ip.address()}:3333/uploads/${item.image}`,
      };
    });

    response.json(serializedItems);
  }
}

export default ItemsController;
