/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Indirect Labor Request
 */
export type IndirectLaborApiRequest =
  | {
      /**
       * The ID of the user tracking labor
       */
      userId: string;
      /**
       * The plant of the user
       */
      plant: string;
      /**
       * The date and time of the event
       * Format: "date-time".
       */
      time?: string;
      /**
       * The indirect labor activity
       */
      activity?: string;
    }
  | Record<string, any>;
