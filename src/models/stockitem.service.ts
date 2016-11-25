import _ from 'lodash';

import { StockItem } from './stockitem';

import { LoggerService } from '../services/logger.service';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockItemService {

  private db: StockItem[] = [
    new StockItem({ id: 0, sku: 'ABC123', name: 'MTG Card Box',     taxable: true,  cost: 1.49, quantity: 3,
                    description: 'It is a card box.' }),
    new StockItem({ id: 1, sku: 'ABC124', name: 'MTG Card Box 2',   taxable: true,  cost: 2.49, quantity: 1,
                    description: 'It is a card box. It is also number 2 in an exclusive collectors set.'  }),
    new StockItem({ id: 2, sku: 'ABC125', name: 'MTG Card Box 3',   taxable: true,  cost: 2.99, quantity: 3,
                    description: 'It is a card box. It also has a really long description for no apparent reason, ' +
                    'but you know, there is nothing wrong with that.'  }),
    new StockItem({ id: 3, sku: 'ABC126', name: 'Card Sleeves',     taxable: true,  cost: 0.99, quantity: 4,
                    description: 'Penny sleeves.'  }),
    new StockItem({ id: 4, sku: 'ABC127', name: 'Apple',            taxable: false, cost: 1.49, quantity: 5,
                    description: 'A fruit.'  }),
    new StockItem({ id: 5, sku: '724328149936', name: 'Tissues',    taxable: false, cost: 4.99, quantity: 1,
                    description: 'You use them to blow your nose, probably.'  })
  ];

  constructor(private http: Http, private logger: LoggerService) {

  }

  search(query: string) {
    return _.filter(this.db, item => _.includes(item.sku.toLowerCase(), query.toLowerCase())
                                  || _.includes(item.description.toLowerCase(), query.toLowerCase())
                                  || _.includes(item.name.toLowerCase(), query.toLowerCase()));
  }

  get(sku: string) {
    return _.find(this.db, { sku: sku });
  }

  add(item: StockItem) {

  }

  update(item: StockItem) {

  }

  remove(item: StockItem) {

  }
}
