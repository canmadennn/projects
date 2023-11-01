/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a routing.
 */
export type Routing =
  | {
      /**
       * The name of the routing object
       */
      routing?: string;
      /**
       * The internal type of the routing object. Deprecated. Use type field instead.
       * @deprecated
       */
      routingType?: string;
      /**
       * The type of the routing object
       */
      type?: string;
      /**
       * The version of the routing object
       */
      version?: string;
    }
  | Record<string, any>;
