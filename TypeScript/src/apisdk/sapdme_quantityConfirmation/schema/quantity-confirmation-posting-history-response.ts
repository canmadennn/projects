/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for quantity confirmation postings
 */
export type QuantityConfirmationPostingHistoryResponse =
  | {
      /**
       * SFC for quantity confirmation postings retrieval
       */
      sfc?: string;
      /**
       * Resource where the quantity confirmation was performed
       */
      resource?: string;
      /**
       * Work center where the quantity confirmation was performed
       */
      workCenter?: string;
      /**
       * Operation activity where the quantity confirmation posting was performed
       */
      operationActivity?: string;
      /**
       * Yield quantity
       */
      yieldQuantity?: number;
      /**
       * Yield quantity internal Unit
       */
      yieldQuantityUnit?: string;
      /**
       * Yield quantity commercial Unit
       */
      yieldQuantityCommercialUnit?: string;
      /**
       * Scrap quantity
       */
      scrapQuantity?: number;
      /**
       * Scrap quantity internal Unit
       */
      scrapQuantityUnit?: string;
      /**
       * Scrap quantity commercial Unit
       */
      scrapQuantityCommercialUnit?: string;
      /**
       * System date time when the the quantity confirmation was performed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * Date time when the quantity confirmation was performed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * Format: "date-time".
       */
      postingDateTime?: string;
      /**
       * ID of the user who performed the quantity confirmation
       */
      userId?: string;
      /**
       * Reason Code Key for scrap
       */
      reasonCodeKey?: string;
      /**
       * Reason Code for scrap
       */
      reasonCodes?: string[];
      /**
       * Description of the reason code
       */
      reasonCodeDescription?: string;
      /**
       * Status of quantity confirmation
       */
      status?: string;
    }
  | Record<string, any>;
