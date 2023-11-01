/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { GoodsReceiptSummaryItem } from './goods-receipt-summary-item';
/**
 * Representation of the 'Sfc' schema.
 */
export type Sfc =
  | {
      /**
       * The list of goods receipts for a specific Shop Floor Control
       */
      items?: GoodsReceiptSummaryItem[];
      /**
       * The SFC number of the product.
       */
      sfc?: string;
    }
  | Record<string, any>;
