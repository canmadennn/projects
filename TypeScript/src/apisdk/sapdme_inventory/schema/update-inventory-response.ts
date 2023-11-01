/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InventoryAssemblyDataDto } from './inventory-assembly-data-dto';
import type { GetInventoryResponseItemQuantity } from './get-inventory-response-item-quantity';
/**
 * Representation of the 'UpdateInventoryResponse' schema.
 */
export type UpdateInventoryResponse =
  | {
      assemblyData?: InventoryAssemblyDataDto[];
      /**
       * The batch number of the updated stock
       */
      batchNumber?: string;
      /**
       * The comments added to the updated stock
       * Max Length: 1000.
       */
      comments?: string;
      /**
       * The creation date time of the original stock in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-06-22T04:24:000Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The handling unit number of the innermost package
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the updated stock in SAP Digital Manufacturing
       */
      inventoryId?: string;
      /**
       * The material of the updated stock
       */
      material?: string;
      /**
       * The material version of the updated stock
       */
      materialVersion?: string;
      /**
       * The date time when the updated stock was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-06-22T04:24:000Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The origin of the updated stock. For this API call, the returned origin should always be 'DMC'.
       */
      origin?: 'DMC';
      /**
       * The production supply area where the updated stock is stored
       */
      productionSupplyArea?: string;
      quantityOnHand?: GetInventoryResponseItemQuantity;
      /**
       * The operation for which the updated stock is reserved
       */
      reservedOperation?: string;
      /**
       * The order number for which the updated stock is reserved
       */
      reservedOrder?: string;
      /**
       * The serial number of the updated stock. It's only supported when the on-hand quantity of the updated stock is '1' in base unit of measure.
       */
      serialNumber?: string;
      /**
       * The status of the updated stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The storage bin where the updated stock is stored at the production supply area
       */
      storageBin?: string;
      /**
       * The storage location of the updated stock
       */
      storageLocation?: string;
      /**
       * The warehouse from which the updated stock is staged in the integrated EWM system
       */
      warehouse?: string;
    }
  | Record<string, any>;
