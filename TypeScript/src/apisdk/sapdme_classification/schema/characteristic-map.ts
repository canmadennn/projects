/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for characteristic map
 */
export type CharacteristicMap =
  | {
      /**
       * Characteristic internal ID
       */
      charcInternalId?: string;
      /**
       * Position (of type int)
       */
      position?: number;
      /**
       * Deletion indicator
       */
      deletionIndicator?: string;
      /**
       * Validity start date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityStartDate?: string;
      /**
       * Validity end date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityEndDate?: string;
    }
  | Record<string, any>;
