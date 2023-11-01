/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataCollectionGroupAttachedPoint } from './data-collection-group-attached-point';
import type { Timestamp } from './timestamp';
import type { DataCollectionGroupCustomData } from './data-collection-group-custom-data';
import type { DataCollectionParameter } from './data-collection-parameter';
/**
 * Object represents the Data Collection Groups Response
 */
export type DataCollectionGroupResponse =
  | {
      /**
       * Allow Multiple Collection
       */
      allowMultipleCollection?: boolean;
      /**
       * Data Collection Attached Points
       */
      attachedPoints?: DataCollectionGroupAttachedPoint[];
      createdDateTime?: Timestamp;
      /**
       * Current Version
       */
      currentVersion?: boolean;
      /**
       * Data Collection Custom Values
       */
      customValues?: DataCollectionGroupCustomData[];
      /**
       * Data Collection Parameters
       */
      dcParameters?: DataCollectionParameter[];
      /**
       * Description
       */
      description?: string;
      /**
       * Data Collection Group
       */
      group?: string;
      modifiedDateTime?: Timestamp;
      /**
       * Pass Fail Group
       */
      passFailGroup?: boolean;
      /**
       * Pass Fail Number
       * Format: "int32".
       */
      passFailNumber?: number;
      /**
       * Plant
       */
      plant?: string;
      /**
       * Status
       */
      status?: string;
      /**
       * Version
       */
      version?: string;
    }
  | Record<string, any>;
