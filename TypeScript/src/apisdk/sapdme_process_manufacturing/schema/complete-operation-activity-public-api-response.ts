/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object of complete operation activity.
 */
export type CompleteOperationActivityPublicApiResponse =
  | {
      /**
       * Plant where the operation activity has been completed.
       */
      plant?: string;
      /**
       * Order of the operation activity.
       */
      order?: string;
      /**
       * SFC of the order.
       */
      sfc?: string;
      /**
       * Operation activity that is completed.
       */
      operationActivity?: string;
      /**
       * Work center where the operation activity is completed.
       */
      workCenter?: string;
      /**
       * Requested completion date and time of the operation activity.
       * @example "2022-04-23T09:53:03Z"
       * Format: "date-time".
       */
      actualCompleteDateTime?: string;
      /**
       * Requested final confirmation flag value.
       */
      finalConfirmation?: boolean;
    }
  | Record<string, any>;
