/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'AlternateUnitOfMeasure' schema.
 */
export type AlternateUnitOfMeasure =
  | {
      /**
       * The denominator parameter value used during calculation.
       * Format: "int32".
       */
      denominator?: number;
      /**
       * The numerator parameter value used during calculation.
       * Format: "int32".
       */
      numerator?: number;
      /**
       * The value of the unit of measure.
       */
      uom?: string;
    }
  | Record<string, any>;
