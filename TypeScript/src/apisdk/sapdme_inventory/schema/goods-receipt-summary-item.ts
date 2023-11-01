/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
/**
 * Representation of the 'GoodsReceiptSummaryItem' schema.
 */
export type GoodsReceiptSummaryItem =
  | {
      /**
       * The batch number of the product.
       */
      batchNumber?: string;
      /**
       * The type of the component.
       */
      componentType?: 'BY_PRODUCT' | 'CO_PRODUCT' | 'NORMAL';
      /**
       * The handling unit number of the product.
       */
      handlingUnit?: string;
      /**
       * Indicates whether the storage location is managed by EWM.
       */
      isEWMManagedStorageLocation?: boolean;
      /**
       * Indicates whether the storage location is managed by IM.
       */
      isIMManagedStorageLocation?: boolean;
      /**
       * The material name of the product.
       */
      material?: string;
      quantityInBaseUnit?: Quantity;
      quantityInProductionUnit?: Quantity;
      /**
       * The storage location of product.
       */
      storageLocation?: string;
      targetQuantityInProductionUnit?: Quantity;
    }
  | Record<string, any>;
