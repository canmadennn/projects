/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'UnitOfMeasure' schema.
 */
export type UnitOfMeasure =
  | {
      /**
       * The SAP commercial unit of measure that's visible on the user interface
       * Max Length: 3.
       */
      commercialUnitOfMeasure?: string;
      /**
       * The SAP internal unit of measure
       * Max Length: 3.
       */
      internalUnitOfMeasure?: string;
      /**
       * The ISO unit of measure
       * Max Length: 3.
       */
      isoUnitOfMeasure?: string;
    }
  | Record<string, any>;
