/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ProcessLotMemberApiModel } from './process-lot-member-api-model';
/**
 * Representation of the 'UpdateProcessLotRequest' schema.
 */
export type UpdateProcessLotRequest =
  | {
      /**
       * The Plant where the Process Lot is used.
       */
      plant: string;
      /**
       * The Process Lot Number for the Plant.
       */
      number: string;
      /**
       * The Members of the Process Lot.
       */
      members?: ProcessLotMemberApiModel[];
    }
  | Record<string, any>;
