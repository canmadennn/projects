/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PostCreateBulkInventoriesItem } from './post-create-bulk-inventories-item';
/**
 * Representation of the 'CreateBulkInventoriesRequest' schema.
 */
export type CreateBulkInventoriesRequest =
  | {
      /**
       * The plant where the stock resides
       * Max Length: 6.
       */
      plant: string;
      /**
       * The origin of the stock. Stocks of different origins are consumed differently in the system. There are 3 possible origins: 'DMC', 'ERP' and 'EWM'. To create a stock with 'ERP' or 'EWM' origin, you need to firstly enable External Inventory Management in the Manage Business Settings app.
       */
      origin: 'DMC' | 'ERP' | 'EWM';
      lineItems: PostCreateBulkInventoriesItem[];
    }
  | Record<string, any>;
