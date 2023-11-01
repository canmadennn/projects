/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'UpdateBatchRequest' schema.
 */
export type UpdateBatchRequest =
  | {
      /**
       * The production date of the batch. It indicates when the material is manufactured. Format (ISO-8601): yyyy-MM-dd
       * @example "2021-07-29"
       * Format: "date".
       */
      productionDate?: string;
      /**
       * The shelf-life expiration or the best-before date of the batch. Format (ISO-8601): yyyy-MM-dd
       * @example "2021-07-29"
       * Format: "date".
       */
      shelfLifeExpirationDate?: string;
      /**
       * The time when the batch was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2021-07-29T03:53:33.123Z"
       * Format: "date-time".
       */
      lastModifiedDateTime: string;
    }
  | Record<string, any>;
