/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BreakStartTime } from './break-start-time';
import type { BreakEndTime } from './break-end-time';
/**
 * Representation of the 'BreaksDetails' schema.
 */
export type BreaksDetails =
  | {
      startDateTime?: BreakStartTime;
      endDateTime?: BreakEndTime;
    }
  | Record<string, any>;
