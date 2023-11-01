/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Routing' schema.
 */
export type Routing =
  | {
      /**
       * The plant this routing is assigned to.
       */
      plant?: string;
      /**
       * Name of the routing or recipe.
       */
      routing?: string;
      /**
       * Indicates the type of routing or recipe.
       */
      routingType?:
        | 'PRODUCTION'
        | 'NC'
        | 'SPECIAL'
        | 'DISPOSITION_FUNCTION'
        | 'SFC_SPECIFIC'
        | 'SHOPORDER_SPECIFIC'
        | 'CONFIGURABLE'
        | 'PRODUCTION_RECIPE'
        | 'SHOPORDER_SPECIFIC_RECIPE';
      /**
       * The routing version.
       */
      version?: string;
    }
  | Record<string, any>;
