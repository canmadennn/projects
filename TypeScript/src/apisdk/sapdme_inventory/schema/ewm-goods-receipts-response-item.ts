/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
/**
 * Representation of the 'EwmGoodsReceiptsResponseItem' schema.
 */
export type EwmGoodsReceiptsResponseItem =
  | {
      /**
       * The warning message appears only when the batch characteristics are not set properly for the product.
       */
      batchCharacteristicWarningMessage?: string;
      /**
       * The batch number of the product
       */
      batchNumber?: string;
      /**
       * The error code of the goods receipt posting at line item level
       */
      errorCode?: string;
      /**
       * The error message details
       */
      errorMessage?: string;
      /**
       * Indicates whether the goods receipt posting failed or not. 'true' indicates that the posting failed. 'false' indicates that the posting succeeded.
       */
      hasError?: boolean;
      /**
       * The inventory ID of the product
       */
      inventoryId?: string;
      /**
       * The material name of product
       */
      material?: string;
      /**
       * The material version of product
       */
      materialVersion?: string;
      /**
       * The packing material name of product
       */
      packingMaterial?: string;
      /**
       * The handling unit number of product
       */
      handlingUnit?: string;
      /**
       * A list of serial numbers of the products
       */
      serialNumbers?: string[];
      totalQuantityInBaseUnit?: Quantity;
      /**
       * The ID of the goods receipt transaction. It's the ID against which goods receipt cancellation can be performed.
       */
      transactionId?: string;
    }
  | Record<string, any>;
