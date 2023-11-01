/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to start an operation activity.
 */
export type StartOperationActivityPublicApiRequest =
  | {
      /**
       * Plant where the operation activity has to be started.
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
       * Operation activity to be started.
       */
      operationActivity: string;
      /**
       * Work center to start the operation activity on.
       */
      workCenter: string;
      /**
       * Start date and time of the operation activity in UTC. If not provided, start would be real time.
       * @example "2022-04-23T09:53:03Z"
       * Format: "date-time".
       */
      actualStartDateTime?: string;
    }
  | Record<string, any>;
