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
       * Returns the materials according to the pageNumber and pageSize you set
       * Format: "int64".
       */
      offset?: number;
      /**
       * Indicates the page from which the materials are retrieved.
       * Format: "int32".
       */
      pageNumber?: number;
      /**
       * Specifies the number of records on one page.
       * Format: "int32".
       */
      pageSize?: number;
      /**
       * If set to 'true', retrieves the materials based on the properties you set in Pageable. If set to 'false', all materials are retrieved.
       */
      paged?: boolean;
      sort?: Sort;
      /**
       * Indicates if the materials are retrieved based on the properties you set in Pageable, or they are all retrieved. The value of this field is automatically filled.
       */
      unpaged?: boolean;
    }
  | Record<string, any>;
