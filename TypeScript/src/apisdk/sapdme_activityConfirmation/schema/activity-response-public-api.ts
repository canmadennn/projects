/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for activity.
 */
export type ActivityResponsePublicApi =
  | {
      /**
       * Activity ID.
       */
      activityId?: string;
      /**
       * Quantity confirmed.
       */
      quantity?: number;
      /**
       * Unit of measure of the confirmed quantity.
       */
      unitOfMeasure?: string;
      /**
       * ISO code of the unit of measure of the quantity.
       */
      isoUnitOfMeasure?: string;
      /**
       * ID of the user who posted the activity confirmation.
       */
      postedBy?: string;
      /**
       * The posting date time (in UTC) when the activity confirmation is performed.
       * @example "2022-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      postingDateTime?: string;
    }
  | Record<string, any>;
