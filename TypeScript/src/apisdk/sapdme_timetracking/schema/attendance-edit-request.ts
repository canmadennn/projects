/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Attendance edit request
 */
export type AttendanceEditRequest =
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
       * A short note or comment about updating the event
       */
      note?: string;
    }
  | Record<string, any>;
