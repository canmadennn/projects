/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ShiftDefinition } from './shift-definition';
import type { ShiftOverride } from './shift-override';
import type { DayClassId } from './day-class-id';
import type { CustomValue } from './custom-value';
/**
 * The shift.
 */
export type Shift =
  | {
      /**
       * The shift category.
       */
      category: 'NONE' | 'RESOURCE' | 'USER' | 'WORKCENTER';
      /**
       * The shift value.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      shift: string;
      /**
       * The shift description.
       */
      description?: string;
      /**
       * The plant where a shift is defined.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The date and time when the shift was created (Plant time zone).
       */
      createdOn?: string;
      /**
       * The date and time when the the shift was updated (Plant time zone).
       */
      modifiedOn?: string;
      /**
       * Indicates if the shift came from ERP.
       */
      isErp?: boolean;
      /**
       * The Shift intervals created for this shift
       */
      intervals?: ShiftDefinition[];
      /**
       * The Shift overrides created for this shift
       */
      overrides?: ShiftOverride[];
      mondayDayClass?: DayClassId;
      /**
       * Indicates if monday is a production day or not
       */
      mondayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      tuesdayDayClass?: DayClassId;
      /**
       * Indicates if tuesday is a production day or not
       */
      tuesdayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      wednesdayDayClass?: DayClassId;
      /**
       * Indicates if wednesday is a production day or not
       */
      wednesdayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      thursdayDayClass?: DayClassId;
      /**
       * Indicates if thursday is a production day or not
       */
      thursdayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      fridayDayClass?: DayClassId;
      /**
       * Indicates if friday is a production day or not
       */
      fridayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      saturdayDayClass?: DayClassId;
      /**
       * Indicates if saturday is a production day or not
       */
      saturdayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      sundayDayClass?: DayClassId;
      /**
       * Indicates if sundayDay is a production day or not
       */
      sundayDayType?: 'NONPRODUCTION' | 'PRODUCTION';
      /**
       * The shift custom values.
       */
      customValues?: CustomValue[];
    }
  | Record<string, any>;
