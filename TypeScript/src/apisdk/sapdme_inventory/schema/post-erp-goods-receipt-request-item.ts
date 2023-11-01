/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
/**
 * Representation of the 'PostErpGoodsReceiptRequestItem' schema.
 */
export type PostErpGoodsReceiptRequestItem =
  | {
      /**
       * The batch number of the product
       * Max Length: 10.
       */
      batchNumber?: string;
      /**
       * The comments you want to add to the goods receipt posting
       * Max Length: 4000.
       */
      comments?: string;
      /**
       * The material name of the product
       * Max Length: 40.
       */
      material: string;
      /**
       * The material version of the product
       * Max Length: 20.
       */
      materialVersion?: string;
      /**
       * The posting date of the goods receipt. Format (ISO-8601): YYYY-MM-DD
       * @example "2022-09-23"
       * Format: "date".
       */
      postingDate?: string;
      quantity: Quantity;
      /**
       * Specify whether you want to skip tolerance check for goods receipt posting. This field is only applicable when delivery tolerance is enabled in the integrated ERP system. /nSet it to 'true' and the tolerance check is executed, which means you can only post goods receipts within the tolerance limit. Set it to 'false' and the tolerance check is skipped, which means even though the delivery tolerance is enabled in ERP side, you can still post goods receipts in SAP Digital Manufacturing. However, the postings that exceeds the tolerance limit might fail in ERP system. The default value is 'false'.
       */
      requireQuantityToleranceCheck?: boolean;
      /**
       * A list of serial numbers for the products. You can only specify one serial number for each goods receipt.
       */
      serialNumbers?: string[];
      /**
       * The SFC number of the product
       * Max Length: 128.
       */
      sfc: string;
      /**
       * The storage location name of the product
       * Max Length: 4.
       */
      storageLocation?: string;
    }
  | Record<string, any>;
