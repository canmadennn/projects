/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Resource } from './resource';
import type { Shift } from './shift';
import type { ShiftStartDateTime } from './shift-start-date-time';
import type { ShiftEndDateTime } from './shift-end-date-time';
import type { TimeElementsByTimeElementTypeShiftItem } from './time-elements-by-time-element-type-shift-item';
/**
 * Representation of the 'TimeElementsByTimeElementTypeItem' schema.
 */
export type TimeElementsByTimeElementTypeItem =
  | {
      resource?: Resource;
      shifts?:
        | {
            shift?: Shift;
            shiftStartDateTime?: ShiftStartDateTime;
            shiftEndDateTime?: ShiftEndDateTime;
            timeElements?: TimeElementsByTimeElementTypeShiftItem[];
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
