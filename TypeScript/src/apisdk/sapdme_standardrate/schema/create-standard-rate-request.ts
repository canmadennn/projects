/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to create the standard rate.
 */
export type CreateStandardRateRequest =
  | {
      /**
       * The plant the standard rate belongs to.
       * Max Length: 6.
       * Min Length: 1.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The name of the resource.
       * Max Length: 36.
       */
      resource?: string;
      /**
       * The name of the workcenter.
       * Max Length: 36.
       */
      workcenter?: string;
      /**
       * The name of the material.
       * Max Length: 128.
       */
      material?: string;
      /**
       * The version of the material.
       * Max Length: 20.
       */
      materialVersion?: string;
      /**
       * The name of the routing.
       * Max Length: 128.
       */
      routing?: string;
      /**
       * The version of the routing.
       * Max Length: 20.
       */
      routingVersion?: string;
      /**
       * The type of the routing.
       */
      routingType?:
        | 'PRODUCTION'
        | 'NC'
        | 'SPECIAL'
        | 'DISPOSITION'
        | 'SFC'
        | 'SHOP_ORDER'
        | 'CONFIGURABLE'
        | 'PRODUCTION_RECIPE'
        | 'SHOPORDER_SPECIFIC_RECIPE';
      /**
       * The name of the operation activity.
       * Max Length: 36.
       */
      operation?: string;
      /**
       * The version of the operation activity.
       * Max Length: 20.
       */
      operationVersion?: string;
      /**
       * The standard rate quantity.
       */
      quantity: number;
      /**
       * The standard rate pace.
       */
      pace?: number;
      /**
       * The number represents the length of a time slot in time units - 10 SECONDS, 10 MINUTES, and so on.
       */
      time: number;
      /**
       * The standard rate time units.
       */
      timeUnitsType: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
    }
  | Record<string, any>;
