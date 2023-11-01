/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiOperationResponse } from './inspection-api-operation-response';
/**
 * This object represents a response to reading an inspection lot.
 */
export type InspectionLotResponse =
  | {
      /**
       * Indicates if the inspection point function is activated for the inspection lot. If set to 'true', it means that inspection points are enabled for the inspection lot.
       */
      inspLotHasSubsets?: boolean;
      /**
       * The identifier of Inspection Point Field Combination as maintained in the integrated ERP system
       */
      inspSubsetFieldCombination?: string;
      /**
       * The inspection lot number
       */
      inspectionLot?: string;
      /**
       * The list of inspection operations under the inspection lot
       */
      inspectionOperations?: InspectionApiOperationResponse[];
    }
  | Record<string, any>;
