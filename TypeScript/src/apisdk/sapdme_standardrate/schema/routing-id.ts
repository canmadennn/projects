/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This business object defines key fields of the routing or recipe object.
 */
export type RoutingId =
  | {
      /**
       * The reference of the standard rate.
       */
      ref?: string;
      /**
       * The plant the routing or recipe belongs to.
       */
      plant?: string;
      /**
       * The name of the routing or recipe.
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
       * The version of the routing.
       */
      version?: string;
    }
  | Record<string, any>;
