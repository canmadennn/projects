/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InventoryAssemblyData } from './inventory-assembly-data';
import type { Quantity } from './quantity';
/**
 * Representation of the 'TransferInventoryRequest' schema.
 */
export type TransferInventoryRequest =
  | {
      assemblyData?: InventoryAssemblyData[];
      /**
       * The comments you want to add to the new stock
       * Max Length: 1000.
       */
      comments?: string;
      /**
       * The inventory ID of the original stock to which stock transfer is performed
       * Max Length: 128.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      inventoryId: string;
      /**
       * The date time when the stock was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. Filling this field can help avoid unexpected data modification when concurrent operations are executed attempting to change the same data entry. To retrieve 'lastModifiedDateTime', you can use the corresponding GET API and extract the value of 'lastModifiedDateTime' from the response body.
       * @example "2021-07-29T03:53:33.123Z"
       * Format: "date-time".
       */
      lastModifiedDateTime: string;
      /**
       * The plant of the stock
       * Max Length: 6.
       */
      plant: string;
      quantity: Quantity;
      /**
       * The operation for which the new stock is reserved
       * Max Length: 412.
       */
      reservedOperation?: string;
      /**
       * The order for which the new stock is reserved
       * Max Length: 36.
       */
      reservedOrder?: string;
      /**
       * The serial number of the new stock. It is only supported when the stock on-hand quantity is '1' in base unit of measure.
       * Max Length: 18.
       */
      serialNumber?: string;
      /**
       * The status of the new stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The destination storage location to which the stock is transferred. It is the storage location of the new stock.
       * Max Length: 4.
       */
      storageLocation: string;
    }
  | Record<string, any>;
