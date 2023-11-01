/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BasicRouter' schema.
 */
export type BasicRouter =
  | {
      /**
       * The plant of the routing.
       */
      plant?: string;
      /**
       * The name of the routing.
       */
      routing?: string;
      /**
       * The routing type of the routing.
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
