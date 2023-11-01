/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PostedGoodsReceipt } from './posted-goods-receipt';
/**
 * Representation of the 'PagePostedGoodsReceipt' schema.
 */
export type PagePostedGoodsReceipt =
  | {
      /**
       * The list of goods receipts
       */
      content?: PostedGoodsReceipt[];
      /**
       * The current page number
       * Format: "int32".
       */
      number?: number;
      /**
       * The number of goods receipt postings on the current page
       * Format: "int32".
       */
      numberOfElements?: number;
      /**
       * The total number of goods receipt postings that are returned
       * Format: "int64".
       */
      totalElements?: number;
      /**
       * The total number of pages that are returned
       * Format: "int32".
       */
      totalPages?: number;
    }
  | Record<string, any>;
