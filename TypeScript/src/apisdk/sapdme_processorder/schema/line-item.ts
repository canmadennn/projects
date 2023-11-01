/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MaterialId } from './material-id';
import type { Quantity } from './quantity';
import type { StorageLocationId } from './storage-location-id';
/**
 * Representation of the 'LineItem' schema.
 */
export type LineItem =
  | {
      bomComponentRef?: string;
      materialId?: MaterialId;
      description?: string;
      materialType?:
        | 'CONFIGURABLE'
        | 'FINISHED'
        | 'GENERAL'
        | 'NONSTOCK'
        | 'NONVALUATED'
        | 'OPERATING_SUPPLIES'
        | 'PACKAGING'
        | 'RETURNABLE_PACKAGING'
        | 'SEMIFINISHED_PRODUCT'
        | 'SERVICE'
        | 'SERVICES'
        | 'SOFTWARE_NONVALUATED'
        | 'SPARE_PARTS'
        | 'TRADING_GOODS'
        | 'RAW'
        | 'CUSTOM'
        | 'PIPELINE'
        | 'PRT';
      plannedBatchNumber?: string;
      consumedQuantity?: Quantity;
      targetQuantity?: Quantity;
      storageLocation?: StorageLocationId;
      backflushEnabled?: boolean;
      /**
       * Format: "int32".
       */
      assembledAndCanceledComponentsCount?: number;
      batchManaged?: 'NONE' | 'DAILY' | 'ORDER' | 'SHIFT';
      toleranceUnder?: number;
      toleranceOver?: number;
      recipeComponentToleranceUnder?: number;
      recipeComponentToleranceOver?: number;
      isBomComponent?: boolean;
      componentType?: string;
      totalQtyBaseUom?: Quantity;
      totalQtyEntryUom?: Quantity;
      consumedQtyEntryUom?: Quantity;
    }
  | Record<string, any>;
