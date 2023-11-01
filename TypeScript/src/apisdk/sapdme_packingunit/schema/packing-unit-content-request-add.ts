/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PackingUnitContentRequestAdd' schema.
 */
export type PackingUnitContentRequestAdd =
  | {
      /**
       * The SFC number added to the content.
       */
      sfc?: string;
      /**
       * Another packing unit added to the content.
       */
      packingUnitNumber?: string;
      /**
       * The content quantity to be added  to the packing unit. If not specified, then all available quantity is used. For nested packing units in content quantity is not used.
       */
      quantity?: number;
    }
  | Record<string, any>;
