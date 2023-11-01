/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ShopOrderScheduleRequest' schema.
 */
export type ShopOrderScheduleRequest =
  | {
      /**
       * The horizon end date and time till when shop order schedules needs to be fetched in UTC. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      endDateTime: string;
      /**
       * The plant for which the request is executed.
       */
      plant: string;
      /**
       * The horizon start date and time from when the shop order schedules needs to be fetched in UTC. Format(YYYY-MM-DDThh:mm:ssZ).
       */
      startDateTime: string;
      /**
       * The ID of the user for which shop order schedules needs to be fetched.
       */
      user: string;
    }
  | Record<string, any>;
