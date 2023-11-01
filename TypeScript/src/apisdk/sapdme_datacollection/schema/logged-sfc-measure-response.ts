/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ParametricData } from './parametric-data';
/**
 * Response object to list previously collected data for SFC(s).
 */
export type LoggedSfcMeasureResponse =
  | {
      /**
       * number of pages containing Setpoint Group(s) data.
       * Format: "int32".
       */
      numberOfPages?: number;
      /**
       * Total count of Setpoint Group records regardless of paging.
       * Format: "int64".
       */
      count?: number;
      /**
       * the current page number.
       * Format: "int32".
       */
      currentPage?: number;
      /**
       * The Data Collection parameters holding the collected values.
       */
      data?: ParametricData[];
    }
  | Record<string, any>;
