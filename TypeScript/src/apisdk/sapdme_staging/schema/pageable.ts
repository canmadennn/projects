/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Pageable' schema.
 */
export type Pageable =
  | {
      /**
       * Indicates the page where staging requests are retrieved
       * Format: "int32".
       */
      page?: number;
      /**
       * Specifies the number of records on one page
       * Format: "int32".
       */
      size?: number;
      /**
       * Defines how the records are sorted
       */
      sort?: string;
    }
  | Record<string, any>;
