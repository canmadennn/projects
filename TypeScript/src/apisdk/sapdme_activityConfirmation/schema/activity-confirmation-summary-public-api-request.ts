/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to retrieve posting.
 */
export type ActivityConfirmationSummaryPublicAPIRequest =
  | {
      /**
       * Plant where activity confirmation has to be performed.
       */
      plant: string;
      /**
       * Shop order for which activity confirmation has to be performed.
       */
      shopOrder: string;
      /**
       * Sfc of the order for which activity confirmation has to be performed. If the shop order has only one Sfc, this attribute is optional. Else, provide the Sfc.
       */
      sfc: string;
      /**
       * Operation activity at which activity confirmation has to be performed.
       */
      operationActivity: string;
      /**
       * Step Identifier at which activity confirmation has to be performed.
       */
      stepId: string;
      /**
       * Work center at which activity confirmation has to be performed.
       */
      workCenter: string;
    }
  | Record<string, any>;
