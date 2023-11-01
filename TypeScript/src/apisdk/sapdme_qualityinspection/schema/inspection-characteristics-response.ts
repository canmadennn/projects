/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiCharacteristicDTO } from './inspection-api-characteristic-dto';
/**
 * This object represents a response to reading all inspection characteristics for an inspection operation.
 */
export type InspectionCharacteristicsResponse =
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
       * The list of inspection characteristics under the inspection operation
       */
      inspectionCharacteristics?: InspectionApiCharacteristicDTO[];
    }
  | Record<string, any>;
