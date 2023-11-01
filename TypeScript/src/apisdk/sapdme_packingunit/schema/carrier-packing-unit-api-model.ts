/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcContentModel } from './sfc-content-model';
/**
 * Object represents the packing unit with carrier information
 */
export type CarrierPackingUnitApiModel =
  | {
      /**
       * The list of orders and shop floor controls (SFCs)
       */
      sfcsContent?: SfcContentModel[];
      /**
       * The content of the packing unit
       */
      packingUnitContent?: string[];
      /**
       * The unique number of the packing unit
       */
      packingUnitNumber: string;
      /**
       * The plant for which the request is executed
       */
      plant: string;
      /**
       * The unique number of the carrier
       */
      carrierNumber: string;
      /**
       * The type of the packing unit. There are 2 possible types: CONFORMANT and NONCONFORMANT.
       */
      packingType: 'CONFORMANT' | 'NONCONFORMANT';
      /**
       * The type of the current location for the packing unit. There are 3 possible current location types: RESOURCE, WORK_CENTER and STORAGE_LOCATION.
       */
      currentLocationType: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The location where the packing unit is located currently.
       */
      currentLocation: string;
      /**
       * The status of the packing unit. There are 3 possible statuses: OPEN, CLOSED and UNLOADED.
       */
      status: 'OPEN' | 'CLOSED' | 'UNLOADED';
      /**
       * The time when the packing unit was last modified.
       * @example "2023-01-06T02:24:58.872Z"
       * Format: "date-time".
       */
      modifiedDateTime: string;
    }
  | Record<string, any>;
