/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to confirm activities.
 */
export type AutoActivityConfirmationRequest =
  | {
      /**
       * Plant where activity confirmation has to be performed.
       */
      plant: string;
      /**
       * Shop Order for which activity confirmation has to be performed.
       */
      shopOrder: string;
      /**
       * Sfc at which activity confirmation has to be performed.
       */
      sfc: string;
      /**
       * Operation Activity for which activity confirmation has to be performed.
       */
      operationActivity: string;
      /**
       * Operation Activity Version for which activity confirmation has to be performed.
       */
      operationActivityVersion: string;
      /**
       * Step Identifier for which activity confirmation has to be performed.
       */
      stepId: string;
      /**
       * Work center for which activity confirmation has to be performed.
       */
      workCenter: string;
      /**
       * Resource for which activity confirmation has to be performed.
       */
      resource: string;
      /**
       * Routing for which activity confirmation has to be performed.
       */
      routingId: string;
      /**
       * Send final confirmation when posting the activities. The default value is false.
       */
      finalConfirmation?: boolean;
      /**
       * Post activity confirmations to ERP. The default value is false.
       */
      postConfirmationToErp?: boolean;
      /**
       * ID of the user who posted the activity confirmation.
       */
      postedBy: string;
      /**
       * The posting date time (in UTC) when the activity confirmation is performed.
       * @example "2022-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      postingDateTime: string;
    }
  | Record<string, any>;
