/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InventoryAssemblyDataDto } from './inventory-assembly-data-dto';
import type { GetInventoryResponseItemQuantity } from './get-inventory-response-item-quantity';
/**
 * Representation of the 'CreateBulkInventoriesResponseItem' schema.
 */
export type CreateBulkInventoriesResponseItem =
  | {
      assemblyData?: InventoryAssemblyDataDto[];
      /**
       * The batch number of the stock
       */
      batchNumber?: string;
      /**
       * The comments added to the stock
       * Max Length: 1000.
       */
      comments?: string;
      /**
       * The creation date time of the stock in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-06-22T04:24:000Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The handling unit number of the innermost package
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the stock in SAP Digital Manufacturing
       */
      inventoryId?: string;
      /**
       * The material of the stock
       */
      material?: string;
      /**
       * The material version of the stock
       */
      materialVersion?: string;
      /**
       * The modification date time of the stock in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-06-22T04:24:000Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The production supply area where the stock is stored
       */
      productionSupplyArea?: string;
      quantityOnHand?: GetInventoryResponseItemQuantity;
      /**
       * The operation for which the stock is reserved
       */
      reservedOperation?: string;
      /**
       * The order number for which the stock is reserved
       */
      reservedOrder?: string;
      /**
       * The serial number of the stock
       */
      serialNumber?: string;
      /**
       * The status of the stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The storage bin where the stock is stored at the production supply area
       */
      storageBin?: string;
      /**
       * The storage location of the stock
       */
      storageLocation?: string;
      /**
       * The warehouse from which the stock is staged in the integrated EWM system
       */
      warehouse?: string;
    }
  | Record<string, any>;
