/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'DmcStockDto' schema.
 */
export type DmcStockDto =
  | {
      /**
       * The batch number of the stock
       */
      batchNumber?: string;
      /**
       * The handling unit number of the innermost package
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the stock in SAP Digital Manufacturing
       */
      inventoryId?: string;
      /**
       * The material number of the stock
       */
      material?: string;
      /**
       * The production supply area where the stock is stored
       */
      productionSupplyArea?: string;
      /**
       * The PSA bin where the stock is stored
       */
      psaBin?: string;
      /**
       * The available quantity of the stock
       */
      quantityOnHand?: number;
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
       * The status of the stock: Available, Hold, Quarantine
       */
      status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The handling unit of the outermost package
       */
      topHandlingUnit?: string;
      /**
       * The inventory type
       */
      type?: 'ERP' | 'EWM' | 'LOCAL';
      /**
       * The version of the material
       */
      version?: string;
    }
  | Record<string, any>;
