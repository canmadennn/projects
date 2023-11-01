/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SetPointGroup } from './set-point-group';
/**
 * This object is a wrapper for a Setpoint Group that contains paging metadata.
 */
export type SetPointGroupDelegator =
  | {
      /**
       * The total number of Setpoint Group records, regardless of paging.
       * Format: "int64".
       */
      count?: number;
      /**
       * The current page number.
       * Format: "int32".
       */
      currentPage?: number;
      /**
       * The list of Setpoint Group records on a particular page.
       */
      groups?: SetPointGroup[];
      /**
       * The number of pages that contain Setpoint Group data.
       * Format: "int32".
       */
      numberOfPages?: number;
    }
  | Record<string, any>;
