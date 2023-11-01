/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PostErpGoodsReceiptResponseItem } from './post-erp-goods-receipt-response-item';
/**
 * Representation of the 'PostErpGoodsReceiptResponse' schema.
 */
export type PostErpGoodsReceiptResponse =
  | {
      /**
       * The response details of the goods receipt posting
       */
      lineItems?: PostErpGoodsReceiptResponseItem[];
      /**
       * The order number for which the goods receipt is performed
       */
      order?: string;
      /**
       * The plant where the goods receipt is posted
       */
      plant?: string;
      /**
       * The user who posted the goods receipt
       */
      postedBy?: string;
    }
  | Record<string, any>;
