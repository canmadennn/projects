/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CreateBulkInventoriesResponseItem } from './create-bulk-inventories-response-item';
/**
 * Representation of the 'CreateBulkInventoriesResponse' schema.
 */
export type CreateBulkInventoriesResponse =
  | {
      /**
       * create bulk inventories results
       */
      lineItems?: CreateBulkInventoriesResponseItem[];
      /**
       * The origin of the stock. Stocks of different origins are consumed differently in the system. There are 3 possible origins: 'DMC', 'ERP' and 'EWM'.
       */
      origin?: 'DMC' | 'ERP' | 'EWM';
      /**
       * The plant for which the stock creation is performed
       */
      plant?: string;
    }
  | Record<string, any>;
