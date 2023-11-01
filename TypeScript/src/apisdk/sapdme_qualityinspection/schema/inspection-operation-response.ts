/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiCharacteristicResponse } from './inspection-api-characteristic-response';
/**
 * This object represents a response to reading an inspection operation.
 */
export type InspectionOperationResponse =
  | {
      /**
       * The list of inspection characteristics under the inspection operation
       */
      inspectionCharacteristics?: InspectionApiCharacteristicResponse[];
      /**
       * The inspection lot number
       */
      inspectionLot?: string;
      /**
       * The inspection operation/activity number
       */
      inspectionOperation?: string;
    }
  | Record<string, any>;
