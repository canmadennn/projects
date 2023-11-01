/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InspectionApiOperationResponse' schema.
 */
export type InspectionApiOperationResponse =
  | {
      /**
       * The inspection lot number
       */
      inspectionLot?: string;
      /**
       * The inspection operation/activity number
       */
      inspectionOperation?: string;
      /**
       * The plant of the inspection operation
       */
      inspectionOperationPlant?: string;
    }
  | Record<string, any>;
