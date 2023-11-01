/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PostErpGoodsReceiptRequestItem } from './post-erp-goods-receipt-request-item';
/**
 * Representation of the 'PostErpGoodsReceiptRequest' schema.
 */
export type PostErpGoodsReceiptRequest =
  | {
      /**
       * The request details of the goods receipt posting
       */
      lineItems: PostErpGoodsReceiptRequestItem[];
      /**
       * The order number for which the goods receipt is performed
       * Max Length: 12.
       */
      order: string;
      /**
       * The plant where the goods receipt is performed
       * Max Length: 6.
       */
      plant: string;
      /**
       * Specify the person who posted the goods receipt. The person must be a registered user. The property value can be the user ID, user name or user email address, etc.
       * Max Length: 412.
       */
      postedBy?: string;
    }
  | Record<string, any>;
