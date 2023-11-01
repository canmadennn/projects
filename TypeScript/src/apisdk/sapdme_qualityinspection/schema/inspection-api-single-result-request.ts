/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InspectionApiSingleResultRequest' schema.
 */
export type InspectionApiSingleResultRequest =
  | {
      /**
       * The attribute code of the single result for qualitative characteristic
       */
      characteristicAttributeCode?: string;
      /**
       * The attribute code group of the single result for qualitative characteristic
       */
      characteristicAttributeCodeGrp?: string;
      /**
       * The formatted measured value of the single result for quantitative characteristic
       */
      inspResultFrmtdMeasuredValue?: string;
      /**
       * The comment text of the single result
       */
      inspectionResultText?: string;
    }
  | Record<string, any>;
