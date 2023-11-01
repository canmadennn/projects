/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Timestamp } from './timestamp';
/**
 * Response object to list previously collected paramter data.
 */
export type ParameterState =
  | {
      /**
       * Measure or paramter name.
       */
      measureName?: string;
      /**
       * The Unit of measure.
       */
      unitOfMeasure?: string;
      /**
       * The data collection group the measure/parameter belongs to , if any.
       */
      measureGroup?: string;
      /**
       * the actual typed in value as a string.
       */
      actual?: string;
      /**
       * The actual number value collected for a numeric measure/parameter only.
       */
      actualNumber?: number;
      /**
       * The status (pass, fail, etc.) of the measure taken for the parameter.
       */
      measureStatus?: string;
      dateCreated?: Timestamp;
    }
  | Record<string, any>;
