/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object of start operation activity.
 */
export type StartOperationActivityPublicApiResponse =
  | {
      /**
       * Plant where the operation activity has been started.
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
       * Operation activity that is started.
       */
      operationActivity?: string;
      /**
       * Work center where the operation activity is started.
       */
      workCenter?: string;
      /**
       * Requested start time of the operation activity in UTC.
       * @example "2022-04-23T09:53:03Z"
       * Format: "date-time".
       */
      actualStartDateTime?: string;
    }
  | Record<string, any>;
