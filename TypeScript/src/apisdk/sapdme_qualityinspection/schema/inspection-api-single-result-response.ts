/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object represents a response to retrieve inspection single results for an inspection characteristic.
 */
export type InspectionApiSingleResultResponse =
  | {
      /**
       * The attribute code of the single result for quantitative characteristic
       */
      characteristicAttributeCode?: string;
      /**
       * The attribute code group of the single result for quantitative characteristic
       */
      characteristicAttributeCodeGrp?: string;
      /**
       * The formatted measured value of the single result for qualitative characteristic
       */
      inspResultFrmtdMeasuredValue?: string;
      /**
       * The inspection single result value number
       */
      inspResultValueInternalId?: string;
      /**
       * The inspection characteristic number
       */
      inspectionCharacteristic?: string;
      /**
       * The inspection lot number
       */
      inspectionLot?: string;
      /**
       * The comment text of the single result
       */
      inspectionResultText?: string;
      /**
       * The valuation result of the single result
       */
      inspectionValuationResult?: string;
      /**
       * The plant for which the inspection results are retrieved
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The SFC for which which the inspection results are retrieved
       */
      sfc: string;
    }
  | Record<string, any>;
