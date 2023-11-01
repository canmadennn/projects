/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiResultHistoryResponse } from './inspection-api-result-history-response';
import type { Sort } from './sort';
import type { Pageable } from './pageable';
/**
 * Representation of the 'PageInspectionApiResultHistoryResponse' schema.
 */
export type PageInspectionApiResultHistoryResponse =
  | {
      /**
       * Format: "int32".
       */
      totalPages?: number;
      /**
       * Format: "int64".
       */
      totalElements?: number;
      /**
       * Format: "int32".
       */
      number?: number;
      /**
       * Format: "int32".
       */
      size?: number;
      /**
       * Format: "int32".
       */
      numberOfElements?: number;
      content?: InspectionApiResultHistoryResponse[];
      sort?: Sort;
      first?: boolean;
      last?: boolean;
      pageable?: Pageable;
      empty?: boolean;
    }
  | Record<string, any>;
