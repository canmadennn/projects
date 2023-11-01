/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
import type { Routing } from './routing';
/**
 * This object represents the searched orders.
 */
export type GetFindOrderResponse =
  | {
      /**
       * Plant
       */
      plant?: string;
      /**
       * The order found from search.
       */
      order?: string;
      /**
       * The status of the searched order.
       */
      status?: string;
      /**
       * Release status of the searched order.
       */
      releaseStatus?: string;
      /**
       * Execution status of the searched order.
       */
      executionStatus?: string;
      /**
       * The order type of the searched order.
       */
      orderType?: string;
      material?: Material;
      routing?: Routing;
      /**
       * The ordered quantity of the searched order.
       */
      orderedQuantity?: number;
      /**
       * The production quantity of the searched order.
       */
      productionQuantity?: number;
      /**
       * The released quantity of the searched order.
       */
      releasedQuantity?: number;
      /**
       * The build quantity of the searched order.
       */
      buildQuantity?: number;
      /**
       * The done quantity of the searched order.
       */
      doneQuantity?: number;
      /**
       * The ERP unit of measure of the searched order.
       */
      erpUnitOfMeasure?: string;
      /**
       * The planned completion date/time of the searched order.
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      plannedCompletionDate?: string;
      /**
       * The planned start date/time of the searched order.
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      plannedStartDate?: string;
      /**
       * The priority of the searched order.
       */
      priority?: number;
      /**
       * The scheduled completion date/time of the searched order.
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      scheduledCompletionDate?: string;
      /**
       * The scheduled start date/time of the searched order.
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      scheduledStartDate?: string;
    }
  | Record<string, any>;
