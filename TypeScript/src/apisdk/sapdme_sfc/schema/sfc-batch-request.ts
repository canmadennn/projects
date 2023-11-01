/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object for SFC default Batch Number/ID update.
 */
export type SfcBatchRequest =
  | {
      /**
       * The plant for the selected SFC
       */
      plant: string;
      /**
       * The SFC to be updated.
       */
      sfc: string;
      /**
       * The Batch Number/ID to update the SFC with.
       */
      batchNumber: string;
    }
  | Record<string, any>;
