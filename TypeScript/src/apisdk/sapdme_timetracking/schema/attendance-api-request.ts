/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Attendance request
 */
export type AttendanceApiRequest =
  | {
      /**
       * The ID of the user recording attendance
       */
      userId: string;
      /**
       * The plant of the user recording attendance
       */
      plant: string;
      /**
       * The date and time of the event
       * Format: "date-time".
       */
      time?: string;
    }
  | Record<string, any>;
