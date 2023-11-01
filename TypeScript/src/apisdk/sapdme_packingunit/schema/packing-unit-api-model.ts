/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PackingUnitContentApiModel } from './packing-unit-content-api-model';
import type { MaterialIdApiModel } from './material-id-api-model';
/**
 * Object represents the Packing Unit
 */
export type PackingUnitApiModel =
  | {
      /**
       * The content of the packing unit. Can be SFC, Packing Unit
       */
      content?: PackingUnitContentApiModel[];
      material: MaterialIdApiModel;
      /**
       * The time when the packing unit is modified.
       * @example "2021-09-08T13:50:45.751+00:00"
       * Format: "date-time".
       */
      modifiedDateTime: string;
      /**
       * The unique number of the packing unit.
       */
      number: string;
      /**
       * The plant where the packing unit is used.
       */
      plant: string;
      /**
       * The status of the packing unit. There are 3 possible statuses: OPEN, CLOSED and UNLOADED.
       */
      status?: 'OPEN' | 'CLOSED' | 'UNLOADED';
      /**
       * The list of statuses of SFCs (Shop Floor Controls) that can be packed. These statuses include NEW, IN_QUEUE, ACTIVE, DONE, HOLD.
       */
      allowedSfcStatuses?: 'NEW' | 'IN_QUEUE' | 'ACTIVE' | 'DONE' | 'HOLD'[];
      /**
       * Allows SFCs at different operations to be packed into the same packing unit.
       */
      allowMixedOperations?: boolean;
      /**
       * Allows SFCs from different orders to be packed into the same packing unit.
       */
      allowMixedOrders?: boolean;
      /**
       * Allows you to pack conformant SFCs to a nonconformant packing unit.
       */
      allowAddConformantSfcToNonConformantPackingUnit?: boolean;
    }
  | Record<string, any>;
