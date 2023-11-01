/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Time record response
 */
export type TimeRecordApiResponse =
  | {
      /**
       * The ID of the time record
       */
      id?: string;
      /**
       * The activity type of the time record
       */
      type?: 'ATTENDANCE' | 'DIRECT_LABOR';
      /**
       * The ID of the user
       */
      userId?: string;
      /**
       * The name of the plant
       */
      plant?: string;
      /**
       * The start date and time of the event
       * Format: "date-time".
       */
      startTime?: string;
      /**
       * The end date and time of the event
       * Format: "date-time".
       */
      endTime?: string;
      /**
       * The name of the resource
       */
      resource?: string;
      /**
       * The name of the work center
       */
      workCenter?: string;
      /**
       * The name of the operation activity
       */
      operation?: string;
      /**
       * The version of the operation activity
       */
      operationVersion?: string;
      /**
       * The ID of the routing step
       */
      stepId?: string;
      /**
       * The number of the order
       */
      shopOrder?: string;
      /**
       * The number of the SFC
       */
      sfc?: string;
      /**
       * The status of the time record
       */
      status?: 'NEW' | 'CHANGED' | 'DELETED' | 'APPROVED';
      /**
       * The name of the routing
       */
      routing?: string;
      /**
       * The version of the routing
       */
      routingVersion?: string;
      /**
       * The type of the routing
       */
      routingType?:
        | 'PRODUCTION'
        | 'NC'
        | 'SPECIAL'
        | 'DISPOSITION_FUNCTION'
        | 'SFC_SPECIFIC'
        | 'SHOPORDER_SPECIFIC'
        | 'CONFIGURABLE'
        | 'PRODUCTION_RECIPE'
        | 'SHOPORDER_SPECIFIC_RECIPE';
      /**
       * The standard value against which labor is tracked
       */
      standardValue?: string;
      /**
       * The activity against which labor is tracked
       */
      activity?: string;
      /**
       * The duration of the effective labor time in ISO 8601 format
       */
      effectiveLaborTime?: string;
      /**
       * The changed duration of the labor time in ISO 8601 format as entered by a production supervisor
       */
      adjustedLaborTime?: string;
      /**
       * The duration of the time record in ISO 8601 format
       */
      duration?: string;
      /**
       * The total number of users tracking labor
       * Format: "int32".
       * Default: 1.
       */
      numberOfOperators?: number;
    }
  | Record<string, any>;
