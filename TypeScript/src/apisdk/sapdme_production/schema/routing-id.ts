/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'RoutingId' schema.
 */
export type RoutingId =
  | {
      /**
       * Name of the new routing.
       */
      routing: string;
      /**
       * The type of the new routing. If the routingType is SHOPORDER_SPECIFIC, while the property 'bom' is not filled, then order-specific Bill of Materials will be assigned to the Shop Floor Control with the assignment of the new routing.
       */
      routingType: 'PRODUCTION' | 'SHOPORDER_SPECIFIC';
      /**
       * The version of the new routing.
       */
      version: string;
    }
  | Record<string, any>;
