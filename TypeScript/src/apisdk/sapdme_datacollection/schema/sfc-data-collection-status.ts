/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SFCDataCollectionStatus' schema.
 */
export type SFCDataCollectionStatus =
  | {
      /**
       * Indicator if the data has been collected
       */
      hasDataCollected?: boolean;
      /**
       * Indicator showing how many parameters within the data collectiion group have been collected.
       * Format: "int32".
       */
      measuredCount?: number;
      /**
       * SFC being processed for this DC Group
       */
      sfc?: string;
      /**
       * Number of times the given SFC has been processed using this data collection group
       */
      timesProcessed?: number;
    }
  | Record<string, any>;
