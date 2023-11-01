/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { FindOrderResponse } from './find-order-response';
import type { Pageable } from './pageable';
import type { Sort } from './sort';
/**
 * Representation of the 'PageFindOrderResponse' schema.
 */
export type PageFindOrderResponse =
  | {
      content?: FindOrderResponse[];
      /**
       * Returns true if the result is empty
       */
      empty?: boolean;
      /**
       * If the value is 'true'. It indicates that the current page is the first page.
       */
      first?: boolean;
      /**
       * If the value is 'true'. It indicates that the current page is the last page.
       */
      last?: boolean;
      /**
       * The page number
       * Format: "int32".
       */
      number?: number;
      /**
       * The number of orders in the current page
       * Format: "int32".
       */
      numberOfElements?: number;
      pageable?: Pageable;
      /**
       * Format: "int32".
       */
      size?: number;
      sort?: Sort;
      /**
       * The total number of orders that are retrieved
       * Format: "int64".
       */
      totalElements?: number;
      /**
       * The total number of pages returned
       * Format: "int32".
       */
      totalPages?: number;
    }
  | Record<string, any>;
