/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The order object assigned to the resource.
 */
export type ResourceSetupOrder =
  | {
      /**
       * The order name.
       */
      order?: string;
      /**
       * The build quantity for the order.
       */
      buildQuantity?: number;
      /**
       * The released quantity for the order.
       */
      releasedQuantity?: number;
      /**
       * The order status: RELEASABLE, HOLD, DONE, CLOSED, DISCARDED
       */
      status?: string;
    }
  | Record<string, any>;
