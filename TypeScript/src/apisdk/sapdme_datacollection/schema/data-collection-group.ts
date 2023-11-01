/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataCollectionParameter } from './data-collection-parameter';
/**
 * Representation of the 'DataCollectionGroup' schema.
 */
export type DataCollectionGroup =
  | {
      /**
       * Allow Multiple Collection
       */
      allowMultipleCollection?: boolean;
      /**
       * Indicates if data collection group's version is current
       */
      current?: boolean;
      /**
       * The description of the data collection group
       */
      description?: string;
      /**
       * This data collection group's name
       */
      group?: string;
      /**
       * Data Collection Parameters
       */
      parameters?: DataCollectionParameter[];
      /**
       * Indicates if a data collection group is a pass fail group
       */
      passFailGroup?: boolean;
      /**
       * Specifies how many normal parameters of the DC group must have values outside the minimum or maximum limits to fail this DC group
       * Format: "int32".
       */
      passFailNumber?: number;
      /**
       * The plant.
       */
      plant?: string;
      /**
       * This data collection group's status
       */
      status?: 'NEW' | 'RELEASABLE' | 'OBSOLETE' | 'HOLD';
      /**
       * This data collection group's version
       */
      version?: string;
    }
  | Record<string, any>;
