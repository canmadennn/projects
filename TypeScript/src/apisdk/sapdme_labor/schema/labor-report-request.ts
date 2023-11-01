/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LaborReportRequest' schema.
 */
export type LaborReportRequest =
  | {
      /**
       * The horizon end date till when shift plans needs to be fetched. Format(YYYYMMDD).
       */
      endDate: string;
      /**
       * The plant for which the request is executed.
       */
      plant: string;
      /**
       * The horizon start date from when the shift plans needs to be fetched. Format(YYYYMMDD).
       */
      startDate: string;
      /**
       * The email ID of the supervisor who wants to see the shift plans for the labors assigned.
       */
      user?: string;
    }
  | Record<string, any>;
