/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
/**
 * Representation of the 'PostedGoodsReceipt' schema.
 */
export type PostedGoodsReceipt =
  | {
      /**
       * The batch number of the product
       */
      batchNumber?: string;
      /**
       * The comments of the goods receipt postings
       */
      comments?: string;
      /**
       * The handling unit number of product. It applies only to goods receipts that are posted to Extended Warehouse Management.
       */
      handlingUnit?: string;
      /**
       * The material name of product
       */
      material?: string;
      /**
       * The material version of product
       */
      materialVersion?: string;
      /**
       * The order number of the goods receipt
       */
      order?: string;
      /**
       * The plant where the goods receipt is posted
       */
      plant?: string;
      /**
       * The user who posted goods receipts
       */
      postedBy?: string;
      /**
       * The posting date of the goods receipt. Format (ISO-8601): YYYY-MM-DD
       * @example "2022-09-23"
       * Format: "date".
       */
      postingDate?: string;
      quantityInBaseUnit?: Quantity;
      quantityInProductionUnit?: Quantity;
      /**
       * The shop floor control number of product
       */
      sfc?: string;
      /**
       * The status of the goods receipt. There are the following possible statuses: /n1) CANCELLATION_FAILED_TO_POST_TO_TARGET_SYS: Cancellation has been triggered for the goods receipt, yet the cancellation to the integrated ERP system failed; /n2) CANCELLATION_POSTED_IN_DMC: Cancellation has been triggered for the goods receipt, and it has been successfully posted in SAP Digital Manufacturing; /n3) CANCELLATION_POSTED_TO_TARGET_SYS: Cancellation has been triggered for the goods receipt, and it has been successfully posted in both SAP Digital Manufacturing and the integrated ERP system; /n4) FAILED_TO_POST_TO_TARGET_SYS: Goods receipt posting to the integrated ERP system failed; /n5) POSTED_IN_DMC: Goods receipt has been successfully posted in SAP Digital Manufacturing; /n6) POSTED_TO_TARGET_SYS: Goods receipt has been successfully posted in both SAP Digital Manufacturing and the integrated ERP system.
       */
      status?:
        | 'CANCELLATION_FAILED_TO_POST_TO_TARGET_SYS'
        | 'CANCELLATION_POSTED_IN_DMC'
        | 'CANCELLATION_POSTED_TO_TARGET_SYS'
        | 'FAILED_TO_POST_TO_TARGET_SYS'
        | 'POSTED_IN_DMC'
        | 'POSTED_TO_TARGET_SYS';
      /**
       * The storage location of product
       */
      storageLocation?: string;
      /**
       * The ID of the goods receipt transaction
       */
      transactionId?: string;
      /**
       * The creation date time of goods receipt in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-06-22T04:24:24.000Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
    }
  | Record<string, any>;
