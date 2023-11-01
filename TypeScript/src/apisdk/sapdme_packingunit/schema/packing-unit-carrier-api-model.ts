/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PackingUnitContentApiModel } from './packing-unit-content-api-model';
import type { MaterialIdApiModel } from './material-id-api-model';
import type { CarrierIdApiModel } from './carrier-id-api-model';
/**
 * Object represents the Packing Unit with Carrier information
 */
export type PackingUnitCarrierApiModel =
  | {
      /**
       * The content of the packing unit. Can be SFC, Packing Unit
       */
      content?: PackingUnitContentApiModel[];
      material: MaterialIdApiModel;
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
      carrier?: CarrierIdApiModel;
    }
  | Record<string, any>;
