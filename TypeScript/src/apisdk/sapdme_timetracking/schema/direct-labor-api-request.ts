/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Direct labor request
 */
export type DirectLaborApiRequest =
  | {
      /**
       * The ID of the user tracking labor
       */
      userId: string;
      /**
       * The plant of the user tracking labor
       */
      plant: string;
      /**
       * The name of the resource
       */
      resource: string;
      /**
       * The name of the work center
       */
      workCenter: string;
      /**
       * The name of the operation activity
       */
      operation: string;
      /**
       * The version of the operation activity
       */
      operationVersion?: string;
      /**
       * The ID of the routing step
       */
      stepId: string;
      /**
       * The number of the order
       */
      shopOrder: string;
      /**
       * The number of the SFC
       */
      sfc: string;
      /**
       * The name of the routing
       */
      routing: string;
      /**
       * The version of the routing
       */
      routingVersion: string;
      /**
       * The type of the routing
       */
      routingType:
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
       * The standard value against which labor is tracked
       */
      standardValue?: string;
      /**
       * The date and time of the event
       * Format: "date-time".
       */
      time?: string;
      /**
       * The total number of users tracking labor
       * Format: "int32".
       * Default: 1.
       */
      numberOfOperators?: number;
    }
  | Record<string, any>;
