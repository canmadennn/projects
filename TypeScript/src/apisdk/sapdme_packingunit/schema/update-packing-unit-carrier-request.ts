/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'UpdatePackingUnitCarrierRequest' schema.
 */
export type UpdatePackingUnitCarrierRequest =
  | {
      /**
       * The plant of the packing unit
       */
      plant: string;
      /**
       * The original carrier number of the packing unit. This is the carrier number that needs to be replaced with a new one.
       */
      oldCarrierNumber: string;
      /**
       * The new carrier number that the packing unit is moved to
       */
      newCarrierNumber: string;
    }
  | Record<string, any>;
