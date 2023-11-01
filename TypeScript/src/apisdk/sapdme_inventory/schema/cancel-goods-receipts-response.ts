/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CancelPostingsResponseItem } from './cancel-postings-response-item';
/**
 * Representation of the 'CancelGoodsReceiptsResponse' schema.
 */
export type CancelGoodsReceiptsResponse =
  | {
      /**
       * Cancellation results
       */
      lineItems?: CancelPostingsResponseItem[];
      /**
       * The plant for which goods receipt cancellation is performed
       */
      plant?: string;
    }
  | Record<string, any>;
