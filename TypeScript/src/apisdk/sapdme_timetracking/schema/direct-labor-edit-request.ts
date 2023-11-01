/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Direct labor edit request
 */
export type DirectLaborEditRequest =
  | {
      /**
       * The start date and time of the event
       * Format: "date-time".
       */
      startTime: string;
      /**
       * The end date and time of the event
       * Format: "date-time".
       */
      endTime?: string;
      /**
       * The changed duration of the labor time as entered by a production supervisor. Please follow the time designator as per https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example "For example provide a string as PT1H33M15S for a duration of 1 Hour and 33 minutes and 15 seconds"
       */
      adjustedLaborTime?: string;
      /**
       * A short note or comment about updating the event
       */
      note?: string;
    }
  | Record<string, any>;
