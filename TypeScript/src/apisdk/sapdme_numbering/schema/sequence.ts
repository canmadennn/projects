/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for sequence.
 */
export type Sequence =
  | {
      /**
       * Base value
       */
      base?: number;
      /**
       * Length
       */
      length?: number;
      /**
       * Minimum value
       */
      minimumValue?: string;
      /**
       * Maximum value
       */
      maximumValue?: string;
      /**
       * Current value
       */
      currentValue?: string;
      /**
       * Increment
       */
      increment?: string;
    }
  | Record<string, any>;
