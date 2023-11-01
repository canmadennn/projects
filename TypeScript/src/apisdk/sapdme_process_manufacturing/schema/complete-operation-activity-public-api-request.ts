/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to complete an operation activity.
 */
export type CompleteOperationActivityPublicApiRequest =
  | {
      /**
       * Plant where the operation activity has to be completed.
       */
      plant: string;
      /**
       * Order of the operation activity.
       */
      order: string;
      /**
       * SFC of the order.
       */
      sfc: string;
      /**
       * Operation activity to be completed.
       */
      operationActivity: string;
      /**
       * Work center to complete the operation activity on.
       */
      workCenter: string;
      /**
       * Completion date and time of the operation activity in UTC. If not provided, complete would be real time.
       * @example "2022-04-23T09:53:03Z"
       * Format: "date-time".
       */
      actualCompleteDateTime?: string;
      /**
       * Send final confirmation when completing the operation activity.
       */
      finalConfirmation?: boolean;
    }
  | Record<string, any>;
