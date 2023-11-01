/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Sort } from './sort';
/**
 * Representation of the 'Pageable' schema.
 */
export type Pageable =
  | {
      /**
       * Returns the orders according to the pageNumber and pageSize you set
       * Format: "int64".
       */
      offset?: number;
      /**
       * Indicates the page where orders are retrieved
       * Format: "int32".
       */
      pageNumber?: number;
      /**
       * Specify the number of records on one page.
       * Format: "int32".
       */
      pageSize?: number;
      /**
       * Set it to 'true' if you want the orders to be retrieved based on the properties you set in Pageable. If set to 'false', all orders are retrieved.
       */
      paged?: boolean;
      sort?: Sort;
      /**
       * Indicates if the orders are retrieved based on the properties you set in Pageable, or they are all retrieved. The value of this field is automatically filled.
       */
      unpaged?: boolean;
    }
  | Record<string, any>;
