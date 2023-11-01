/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { AdditionalParameter } from './additional-parameter';
/**
 * Representation of the 'EwmGoodsReceiptsRequestItem' schema.
 */
export type EwmGoodsReceiptsRequestItem =
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
       * The packaging material name of the product
       * Max Length: 40.
       */
      packingMaterial: string;
      /**
       * The handling unit number of the product
       * Max Length: 20.
       */
      handlingUnit?: string;
      quantity: Quantity;
      /**
       * Specify whether you want to enable tolerance check for goods receipt posting. Set it to 'true' and the tolerance check is enabled. Set it to 'false' and the tolerance check is turned off. The default value is 'false'. /nPlease note that if tolerance is enabled in ERP side, and the value is set to 'false', you can post goods receipts successfully in SAP Digital Manufacturing, but the postings that exceeds the tolerance might fail in the integrated ERP system.
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
       * The production date time of the product in UTC. Format (ISO-8601): YYYY-MM-DD HH:MM:SS
       * @example "2022-09-23 00:00:00"
       * Format: "date-time".
       */
      manufacturingDateTime?: string;
      /**
       * The additional custom parameters you want to add to the goods receipt posting
       * Max Length: 100.
       */
      additionalParameters?: AdditionalParameter[];
    }
  | Record<string, any>;
