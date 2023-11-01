/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { Sfc } from './sfc';
/**
 * Representation of the 'GoodsReceiptSummaryResponse' schema.
 */
export type GoodsReceiptSummaryResponse =
  | {
      /**
       * The order for which the goods receipt is performed
       */
      order?: string;
      quantityInBaseUnit?: Quantity;
      quantityInProductionUnit?: Quantity;
      /**
       * The list of goods receipts at Shop Floor Control level
       */
      sfcs?: Sfc[];
      targetQuantityInProductionUnit?: Quantity;
    }
  | Record<string, any>;
