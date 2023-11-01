/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ProductionContext' schema.
 */
export type ProductionContext =
  | {
      /**
       * Plant name
       */
      plant?: string;
      /**
       * Shop Floor Control identifier.
       */
      sfc?: string;
      /**
       * Material name
       */
      material?: string;
      /**
       * Operation Activity name
       */
      operation?: string;
      /**
       * Resource name
       */
      resource?: string;
      /**
       * Routing name
       */
      routing?: string;
      /**
       * Source of production data (DME/ME).
       */
      source?: string;
      /**
       * Inspection View identifier.
       */
      inspectionViewName?: string;
    }
  | Record<string, any>;
