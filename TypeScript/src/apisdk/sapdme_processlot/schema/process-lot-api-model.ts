/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ProcessLotMemberApiModel } from './process-lot-member-api-model';
/**
 * The object that represents the Process Lot.
 */
export type ProcessLotApiModel =
  | {
      /**
       * The Plant where the Process Lot is used.
       */
      plant?: string;
      /**
       * The Process Lot Number for the Plant.
       */
      number?: string;
      /**
       * The Members of the Process Lot.
       */
      members?: ProcessLotMemberApiModel[];
      /**
       * The time when the Process Lot was updated.
       * @example "2021-09-08T13:50:45.751+00:00"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
