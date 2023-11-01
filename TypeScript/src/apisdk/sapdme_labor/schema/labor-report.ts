/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LaborReport' schema.
 */
export type LaborReport =
  | {
      /**
       * Specifies the availability of the user.
       */
      availability?: string;
      /**
       * Specifies the duration of the work center assigned.
       */
      duration?: string;
      /**
       * Specifies the end date of the shift.
       */
      endDate?: string;
      /**
       * Specifies the end time of the work center assigned on the shift.
       */
      endTime?: string;
      /**
       * Specifies the labor.
       */
      labor?: string;
      /**
       * Specifies the maximum number of people that can work on work center.
       * Format: "int32".
       */
      maximumResource?: number;
      /**
       * Specifies the minimum number of people that can work on work center.
       * Format: "int32".
       */
      mininumResource?: number;
      /**
       * Specifies the qualification/certification of the user.
       */
      qualification?: string;
      /**
       * Specifies the shift model in which the user is currently in.
       */
      shiftModel?: string;
      /**
       * Specifies the shift overtime.
       */
      shiftOverTime?: boolean;
      /**
       * Specifies the start date of the shift.
       */
      startDate?: string;
      /**
       * Specifies the start time of the work center assigned on the shift.
       */
      startTime?: string;
      /**
       * Specifies the supervisor.
       */
      supervisor?: string;
      /**
       * Specifies the unavailability type.
       */
      unavailabilityType?: string;
      /**
       * Specifies the work center Id.
       */
      workCenter?: string;
      /**
       * Specifies the work center description.
       */
      workCenterDesc?: string;
    }
  | Record<string, any>;
