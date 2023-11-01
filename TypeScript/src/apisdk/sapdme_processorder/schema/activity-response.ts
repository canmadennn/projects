/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for activity.
 */
export type ActivityResponse =
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
       * ID of the user who posted the activity confirmation.
       */
      postedBy?: string;
      /**
       * Activity confirmation posting date and time.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      postingDateTime?: string;
    }
  | Record<string, any>;
