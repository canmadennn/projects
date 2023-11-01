/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'IndirectLaborEditRequest' schema.
 */
export type IndirectLaborEditRequest =
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
       * The indirect labor activity
       */
      activity: string;
      /**
       * The adjusted labor time that replaces the recorded duration. Please follow the time designator as per https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example "For example provide a string as PT1H33M15S for a duration of 1 Hour and 33 minutes and 15 seconds"
       */
      adjustedLaborTime?: string;
      /**
       * A short note or comment about updating the event
       */
      note?: string;
    }
  | Record<string, any>;
