/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { EwmGoodsReceiptsRequestItem } from './ewm-goods-receipts-request-item';
import type { AdditionalParameter } from './additional-parameter';
/**
 * Representation of the 'PostEwmGoodsReceiptRequest' schema.
 */
export type PostEwmGoodsReceiptRequest =
  | {
      /**
       * The request details of the goods receipt posting
       */
      lineItems: EwmGoodsReceiptsRequestItem[];
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
      /**
       * The warehouse number where the goods receipt is performed
       * Max Length: 3.
       */
      warehouse?: string;
      /**
       * The additional parameter of the product
       */
      additionalParameters?: AdditionalParameter[];
    }
  | Record<string, any>;
