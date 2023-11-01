/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Pageable } from './pageable';
import type { Sort } from './sort';
import type { QuantityConfirmationPostingHistoryResponse } from './quantity-confirmation-posting-history-response';
/**
 * Representation of the 'PageQuantityConfirmationPostingHistoryResponse' schema.
 */
export type PageQuantityConfirmationPostingHistoryResponse =
  | {
      /**
       * Format: "int32".
       */
      totalPages?: number;
      /**
       * Format: "int64".
       */
      totalElements?: number;
      pageable?: Pageable;
      /**
       * Format: "int32".
       */
      numberOfElements?: number;
      sort?: Sort;
      first?: boolean;
      last?: boolean;
      /**
       * Format: "int32".
       */
      size?: number;
      content?: QuantityConfirmationPostingHistoryResponse[];
      /**
       * Format: "int32".
       */
      number?: number;
      empty?: boolean;
    }
  | Record<string, any>;
