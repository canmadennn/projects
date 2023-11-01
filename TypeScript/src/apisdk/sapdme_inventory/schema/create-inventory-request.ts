/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InventoryAssemblyData } from './inventory-assembly-data';
import type { GetInventoryResponseItemQuantity } from './get-inventory-response-item-quantity';
/**
 * Representation of the 'CreateInventoryRequest' schema.
 */
export type CreateInventoryRequest =
  | {
      assemblyData?: InventoryAssemblyData[];
      /**
       * The batch number of the stock
       * Max Length: 10.
       */
      batchNumber?: string;
      /**
       * The comments you want to add to the stock
       * Max Length: 1000.
       */
      comments?: string;
      /**
       * The handling unit number of the innermost package. This property only applies to stocks with DMC or EWM origin, and it is mandatory when stock origin is EWM.
       * Max Length: 20.
       */
      handlingUnit?: string;
      /**
       * The inventory ID of the stock
       * Max Length: 128.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      inventoryId?: string;
      /**
       * The material of the stock. Note the material origin of the material you specify here. To create stocks with ERP or EWM origins, you can only use ERP materials. To create stocks with DMC origin, use DMC materials.
       * Max Length: 40.
       */
      material: string;
      /**
       * The material version of the stock
       * Max Length: 20.
       */
      materialVersion: string;
      /**
       * The origin of the stock. Stocks of different origins are consumed differently in the system. There are 3 possible origins: 'DMC', 'ERP' and 'EWM'. To create a stock with 'ERP' or 'EWM' origin, you need to firstly enable External Inventory Management in the Manage Business Settings app.
       */
      origin: 'DMC' | 'ERP' | 'EWM';
      /**
       * The plant where the stock resides
       * Max Length: 6.
       */
      plant: string;
      /**
       * The production supply area of the stock. You can only specify here one production supply area that exists in SAP Digital Manufacturing. This property only applies to stocks with DMC or EWM origin, and it is mandatory when the stock origin is EWM.
       * Max Length: 10.
       */
      productionSupplyArea?: string;
      quantity: GetInventoryResponseItemQuantity;
      /**
       * The operation for which the stock is reserved. This property only applies to stocks with DMC or ERP origin.
       * Max Length: 412.
       */
      reservedOperation?: string;
      /**
       * The order number for which the stock is reserved. This property only applies to stocks with DMC or ERP origin.
       * Max Length: 36.
       */
      reservedOrder?: string;
      /**
       * The serial number of the stock. You can only specify serial number when the quantity of the stock is 1.
       * Max Length: 18.
       */
      serialNumber?: string;
      /**
       * The status of the stock. There are 3 possible statuses: 'AVAILABLE', 'HOLD' and 'QUARANTINE'.
       */
      status: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
      /**
       * The storage bin where the stock is stored at the production supply area. This property only applies to stocks with DMC or EWM origin, and it is mandatory when the stock origin is EWM.
       * Max Length: 18.
       */
      storageBin?: string;
      /**
       * The storage location of the stock
       * Max Length: 4.
       */
      storageLocation: string;
      /**
       * The warehouse from which the stock is staged in the integrated EWM system. This property only applies to stock with EWM origin, and it is mandatory.
       * Max Length: 3.
       */
      warehouse?: string;
    }
  | Record<string, any>;
