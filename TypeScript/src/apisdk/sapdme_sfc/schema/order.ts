/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFC order details.
 */
export type Order =
  | {
      /**
       * The SFC order.
       */
      order?: string;
      /**
       * The order planned completion date and time.
       */
      orderPlannedCompleteDateTime?: string;
      /**
       * The order planned start date and time.
       */
      orderPlannedStartDateTime?: string;
      /**
       * The order status.
       */
      orderStatus?: string;
      /**
       * The order type.
       */
      orderType?: string;
      /**
       * The batch number for this order.
       */
      batchNumber?: string;
    }
  | Record<string, any>;
