/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InventoryAssemblyDataDto } from './inventory-assembly-data-dto';
import type { Quantity } from './quantity';
/**
 * Representation of the 'TransferInventoryResponse' schema.
 */
export type TransferInventoryResponse =
  | {
      /**
       * The assembly data of the new stock
       */
      assemblyData?: InventoryAssemblyDataDto[];
      /**
       * The batch number of the new stock
       */
      batchNumber?: string;
      /**
       * The comments of the new stock
       */
      comments?: string;
      /**
       * The creation date time of the new stock in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2021-07-29T03:53:33.123Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The handling unit number of the innermost package
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the new stock
       */
      inventoryId?: string;
      /**
       * The material of the new stock
       */
      material?: string;
      /**
       * The material version of the new stock
       */
      materialVersion?: string;
      /**
       * The date time when the stock was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2021-07-29T03:53:33.123Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The origin of the new stock. It should always be DMC.
       */
      origin?: string;
      /**
       * The production supply area of the new stock
       */
      productionSupplyArea?: string;
      quantityOnHand?: Quantity;
      /**
       * The operation for which the new stock is reserved
       */
      reservedOperation?: string;
      /**
       * The order for which the new stock is reserved
       */
      reservedOrder?: string;
      /**
       * The serial number of the new stock
       */
      serialNumber?: string;
      /**
       * The status of the new stock
       */
      status?: string;
      /**
       * The storage bin of the new stock
       */
      storageBin?: string;
      /**
       * The storage location of the new stock
       */
      storageLocation?: string;
    }
  | Record<string, any>;
