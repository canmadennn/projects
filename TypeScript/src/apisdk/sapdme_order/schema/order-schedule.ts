/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents the order schedules.
 */
export type OrderSchedule =
  | {
      /**
       * Dispatched
       */
      dispatched?: boolean;
      /**
       * Earliest Processing Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      earliestProcessingStartDate?: string;
      /**
       * Earliest Setup Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      earliestSetupStartDate?: string;
      /**
       * Earliest Tear Down End Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      earliestTeardownEndDate?: string;
      /**
       * Earliest Tear Down Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      earliestTeardownStartDate?: string;
      /**
       * End Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      endDate?: string;
      /**
       * Fix Indicator
       */
      fixIndicator?: boolean;
      /**
       * Include Shift Breaks
       */
      includeShiftBreaks?: boolean;
      /**
       * Latest Processing Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      latestProcessingStartDate?: string;
      /**
       * Latest Setup Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      latestSetupStartDate?: string;
      /**
       * Latest Tear Down End Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      latestTeardownEndDate?: string;
      /**
       * Latest Tear Down Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      latestTeardownStartDate?: string;
      /**
       * Operation Split Id
       * Format: "int32".
       */
      opSplitId?: number;
      /**
       * Operation name
       */
      operation?: string;
      /**
       * Plan Processing Time
       */
      planProcessingTime?: number;
      /**
       * Plan Setup Time
       */
      planSetupTime?: number;
      /**
       * Plan Tear Down Time
       */
      planTeardownTime?: number;
      /**
       * Processing Time Unit of Measure
       */
      processingTimeUom?: string;
      /**
       * Resource name
       */
      resource?: string;
      /**
       * Operation Sequence
       * Format: "int64".
       */
      sequence?: number;
      /**
       * Setup Time Unit of Measure
       */
      setupTimeUom?: string;
      /**
       * Start Date
       * @example "2022-04-23T09:53:03.000Z"
       * Format: "date-time".
       */
      startDate?: string;
      /**
       * Tear Down Time Unit of Measure
       */
      teardownTimeUom?: string;
    }
  | Record<string, any>;
