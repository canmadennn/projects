/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Resource } from './resource';
import type { Shift } from './shift';
import type { ShiftStartDateTime } from './shift-start-date-time';
import type { ShiftEndDateTime } from './shift-end-date-time';
import type { Breaks } from './breaks';
import type { Downtimes } from './downtimes';
/**
 * Representation of the 'AvailabilityLossesItem' schema.
 */
export type AvailabilityLossesItem =
  | {
      resource?: Resource;
      shifts?:
        | {
            shift?: Shift;
            shiftStartDateTime?: ShiftStartDateTime;
            shiftEndDateTime?: ShiftEndDateTime;
            breaks?: Breaks;
            downtimes?: Downtimes;
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
