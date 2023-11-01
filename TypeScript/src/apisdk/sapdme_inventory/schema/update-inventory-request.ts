/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { GetInventoryResponseItemQuantity } from './get-inventory-response-item-quantity';
import type { InventoryAssemblyData } from './inventory-assembly-data';
/**
 * Representation of the 'UpdateInventoryRequest' schema.
 */
export type UpdateInventoryRequest =
  | {
      quantityToReceive?: GetInventoryResponseItemQuantity;
      /**
       * The operation for which the stock is reserved
       * Max Length: 390.
       */
      reservedOperation?: string;
      /**
       * The order for which the stock is reserved
       * Max Length: 36.
       */
      reservedOrder?: string;
      /**
       * The serial number of the stock. It is only supported when the stock on-hand quantity is '1' in base unit of measure.
       * Max Length: 18.
       */
      serialNumber?: string;
      /**
       * The status of the stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The comments of the stock
       * Max Length: 4000.
       */
      comments?: string;
      /**
       * The assembly data of the stock. Only the assembly data field value can be updated with this API. Adding or changing assembly data field name is not supported. You can also remove a particular data field value, by passing the field name without filling the field value
       */
      assemblyData?: InventoryAssemblyData[];
      /**
       * The date time when the stock was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. Filling this field can help avoid unexpected data modification when concurrent operations are executed attempting to change the same data entry. To retrieve 'lastModifiedDateTime', you can use the corresponding GET API and extract the value of 'lastModifiedDateTime' from the response body.
       * @example "2021-07-29T03:53:33.123Z"
       * Format: "date-time".
       */
      lastModifiedDateTime: string;
    }
  | Record<string, any>;
