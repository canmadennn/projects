/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Shift } from './shift';
import type { ShiftStartDateTime } from './shift-start-date-time';
import type { ShiftEndDateTime } from './shift-end-date-time';
import type { SpeedLosses } from './speed-losses';
/**
 * Representation of the 'SpeedLossesItem' schema.
 */
export type SpeedLossesItem =
  | {
      shift?: Shift;
      shiftStartDateTime?: ShiftStartDateTime;
      shiftEndDateTime?: ShiftEndDateTime;
      speedLosses?: SpeedLosses;
    }
  | Record<string, any>;
