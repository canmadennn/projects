/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CancelPostingsResponseItem' schema.
 */
export type CancelPostingsResponseItem =
  | {
      error?: boolean;
      /**
       * The error code of goods receipt cancellation at line item level
       */
      errorCode?: string;
      /**
       * The error message details
       */
      errorMessage?: string;
      /**
       * Indicates whether the goods receipt cancellation failed or not. 'true' indicates that the cancellation failed. 'false' indicates that the cancellation succeeded.
       */
      hasError?: boolean;
      /**
       * The transaction ID against which the cancellation is performed. It refers to the ID of a goods receipt transaction.
       */
      transactionId?: string;
    }
  | Record<string, any>;
