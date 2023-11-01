/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ShiftDefinitionBreak } from './shift-definition-break';
import type { ShiftDefinitionOverride } from './shift-definition-override';
/**
 * The shift definition.
 */
export type ShiftDefinition =
  | {
      /**
       * The time when shift begins.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      beginTime: string;
      /**
       * The earliest time users can clock in.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      clockInStart?: string;
      /**
       * The latest time users can clock in.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      clockInEnd?: string;
      /**
       * The earliest time users can clock out.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      clockOutStart?: string;
      /**
       * The latest time users can clock out.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      clockOutEnd?: string;
      /**
       * The time when shift ends.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      endTime: string;
      /**
       * Specifies the day the system logs the shift time to when the shift spans midnight.
       */
      laborAssignment: 'ACTUAL_DAY' | 'SHIFT_START_DAY' | 'SHIFT_END_DAY';
      /**
       * Specifies shift breaks.
       */
      shiftDefinitionBreaks?: ShiftDefinitionBreak[];
      /**
       * Shift valid date from.
       */
      validFrom: string;
      /**
       * Shift valid date to.
       */
      validTo?: string;
      mondayOverride?: ShiftDefinitionOverride;
      tuesdayOverride?: ShiftDefinitionOverride;
      wednesdayOverride?: ShiftDefinitionOverride;
      thursdayOverride?: ShiftDefinitionOverride;
      fridayOverride?: ShiftDefinitionOverride;
      saturdayOverride?: ShiftDefinitionOverride;
      sundayOverride?: ShiftDefinitionOverride;
    }
  | Record<string, any>;
