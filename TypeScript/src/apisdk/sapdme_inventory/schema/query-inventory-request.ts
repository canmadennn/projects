/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AssemblyDataItem } from './assembly-data-item';
import type { InventorySort } from './inventory-sort';
/**
 * Representation of the 'QueryInventoryRequest' schema.
 */
export type QueryInventoryRequest =
  | {
      /**
       * The plant of the stock
       * Max Length: 6.
       */
      plant: string;
      /**
       * The batch number of the stock
       * Max Length: 412.
       */
      batchNumber?: string;
      /**
       * The handling unit number of the innermost package
       * Max Length: 20.
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the stock
       * Max Length: 128.
       */
      inventoryId?: string;
      /**
       * The inventory IDs of the stocks. You can query a maximum of 50 inventory IDs at one time.
       * Max Items: 50.
       */
      inventoryIds?: string[];
      /**
       * The material of the stock
       * Max Length: 40.
       */
      material?: string;
      /**
       * The material version of the stock
       * Max Length: 20.
       */
      materialVersion?: string;
      /**
       * The production supply area of the stock
       * Max Length: 10.
       */
      productionSupplyArea?: string;
      /**
       * The operation for which the stock is reserved
       * Max Length: 412.
       */
      reservedOperation?: string;
      /**
       * The order for which the stock is reserved
       * Max Length: 36.
       */
      reservedOrder?: string;
      /**
       * The serial number of the stock
       * Max Length: 18.
       */
      serialNumber?: string;
      /**
       * Specify if you want to retrieve stocks with zero quantity. A stock with zero quantity includes but is not limited to stock that once exists in the system, but have zero on-hand quantity due to various reasons. There are 3 possible options: 1) 'ALL': all stock lines are displayed, including stocks with or without non-zero quantity; 2) 'NO_ZERO_STOCK' (default): only stocks with non-zero quantity are displayed; 3) 'ZERO_STOCK': only stocks with zero quantity are displayed.
       * Default: "NO_ZERO_STOCK".
       */
      stockRetrieveScope?: 'ALL' | 'NO_ZERO_STOCK' | 'ZERO_STOCK';
      /**
       * The status of the stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The storage location of the inventory
       * Max Length: 4.
       */
      storageLocation?: string;
      /**
       * The storage bin where the stock is stored at the production supply area
       * Max Length: 20.
       */
      storageBin?: string;
      assemblyDataFilter?:
        | {
            /**
             * The query conditions of the stock data type.
             * Max Items: 3.
             */
            conditions: AssemblyDataItem[];
            /**
             * Specify whether conjunction or disjunction is applied to given assembly data items. There are two possible conjunction types: 'AND' and 'OR'. The default type is 'AND'.
             * Default: "AND".
             */
            conjunction?: 'AND' | 'OR';
          }
        | Record<string, any>;
      /**
       * The page number you want to query. Number 0 is the first page.
       * Format: "int32".
       */
      page?: number;
      /**
       * The page size determines how many stocks are displayed in one page. Default page size is 20.
       * Format: "int32".
       * Default: 20.
       */
      size?: number;
      /**
       * The retrieved stocks can be sorted by using one or more of the following fields: 'inventoryId', 'storageLocation', 'productionSupplyArea', 'storageBin', 'handlingUnit', 'batchNumber' and 'serialNumber'.
       */
      sort?: InventorySort[];
    }
  | Record<string, any>;
