/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiSingleResultResponse } from './inspection-api-single-result-response';
import type { Pageable } from './pageable';
import type { Sort } from './sort';
/**
 * Representation of the 'PageInspectionApiSingleResultResponse' schema.
 */
export type PageInspectionApiSingleResultResponse =
  | {
      content?: InspectionApiSingleResultResponse[];
      empty?: boolean;
      first?: boolean;
      last?: boolean;
      /**
       * Format: "int32".
       */
      number?: number;
      /**
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
       * Format: "int64".
       */
      totalElements?: number;
      /**
       * Format: "int32".
       */
      totalPages?: number;
    }
  | Record<string, any>;
