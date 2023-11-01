/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { GetBatchesResponse } from './get-batches-response';
/**
 * Representation of the 'PageGetBatchesResponse' schema.
 */
export type PageGetBatchesResponse =
  | {
      /**
       * The list of batches
       */
      content?: GetBatchesResponse[];
      /**
       * The current page number. The initial page number starts with '0'.
       * Format: "int32".
       */
      number?: number;
      /**
       * The number of batches on the current page
       * Format: "int32".
       */
      numberOfElements?: number;
      /**
       * The total number of batches that are returned
       * Format: "int64".
       */
      totalElements?: number;
      /**
       * The total number of pages that are returned
       * Format: "int32".
       */
      totalPages?: number;
    }
  | Record<string, any>;
