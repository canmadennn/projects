/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PackingUnitContentApiModel } from './packing-unit-content-api-model';
import type { MaterialIdApiModel } from './material-id-api-model';
import type { CarrierIdApiModel } from './carrier-id-api-model';
/**
 * Object represents the Packing Unit to be created
 */
export type PackingUnitCreateApiModel =
  | {
      /**
       * The content of the packing unit. Can be SFC, Packing Unit
       */
      content?: PackingUnitContentApiModel[];
      material?: MaterialIdApiModel;
      /**
       * The unique number of the packing unit.
       */
      number?: string;
      /**
       * The plant where the packing unit is used.
       */
      plant: string;
      /**
       * The status of the packing unit. Can be OPEN, CLOSED.
       */
      status?: 'OPEN' | 'CLOSED';
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
      carrier?: CarrierIdApiModel;
    }
  | Record<string, any>;
