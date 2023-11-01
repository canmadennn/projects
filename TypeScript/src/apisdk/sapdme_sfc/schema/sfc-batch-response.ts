/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for SFC default Batch Number/ID update.
 */
export type SfcBatchResponse =
  | {
      /**
       * The plant for the SFC.
       */
      plant?: string;
      /**
       * The updated SFC.
       */
      sfc?: string;
      /**
       * The Batch Number/ID SFC has been updated with.
       */
      batchNumber?: string;
    }
  | Record<string, any>;
