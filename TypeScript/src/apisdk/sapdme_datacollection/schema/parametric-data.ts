/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ParameterState } from './parameter-state';
/**
 * Response object to list previously collected parameter measure data.
 */
export type ParametricData =
  | {
      /**
       * The plant the data has been collected at.
       */
      plant?: string;
      /**
       * The SFC the data has been collected for.
       */
      sfc?: string;
      parameters?: ParameterState;
    }
  | Record<string, any>;
