/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Resource } from './resource';
import type { Shift } from './shift';
import type { ShiftStartDateTime } from './shift-start-date-time';
import type { ShiftEndDateTime } from './shift-end-date-time';
import type { QualityLoss } from './quality-loss';
/**
 * Representation of the 'QualityLossesItem' schema.
 */
export type QualityLossesItem =
  | {
      resource?: Resource;
      shifts?:
        | {
            shift?: Shift;
            shiftStartDateTime?: ShiftStartDateTime;
            shiftEndDateTime?: ShiftEndDateTime;
            qualityLosses?: QualityLoss[];
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
