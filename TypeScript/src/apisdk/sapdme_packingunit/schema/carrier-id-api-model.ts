/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CarrierIdApiModel' schema.
 */
export type CarrierIdApiModel =
  | {
      /**
       * The number of the carrier
       */
      carrierNumber: string;
      /**
       * The type of the packing unit. There are 2 possible types: CONFORMANT and NONCONFORMANT.
       */
      packingType: 'CONFORMANT' | 'NONCONFORMANT';
      /**
       * The type of the source location for the packing unit. There are 3 possible source location types: RESOURCE, WORK_CENTER and STORAGE_LOCATION.
       */
      sourceLocationType: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The source location where the packing unit is transported from
       */
      sourceLocation: string;
    }
  | Record<string, any>;
