/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { EwmGoodsReceiptsResponseItem } from './ewm-goods-receipts-response-item';
/**
 * Representation of the 'PostEwmGoodsReceiptResponse' schema.
 */
export type PostEwmGoodsReceiptResponse =
  | {
      /**
       * The response details of the goods receipt posting
       */
      lineItems?: EwmGoodsReceiptsResponseItem[];
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
      /**
       * The warehouse number where the goods receipt is performed
       */
      warehouse?: string;
    }
  | Record<string, any>;
