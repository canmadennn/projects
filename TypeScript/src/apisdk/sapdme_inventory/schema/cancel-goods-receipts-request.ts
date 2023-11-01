/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CancelGoodsReceiptsRequest' schema.
 */
export type CancelGoodsReceiptsRequest =
  | {
      /**
       * The plant for which the goods receipt cancellation is performed
       */
      plant: string;
      /**
       * A list of transaction IDs against which the cancellation is performed. You can enter a maximum of 10 transaction IDs with one call. /nA transaction ID refers to the ID of a goods receipt transaction. It corresponds to the 'txnId' field in goods receipt posting response in the Manage Cancellations app. If you use goods receipt public API, the transaction ID is directly returned in the response.
       */
      transactionIds: string[];
    }
  | Record<string, any>;
