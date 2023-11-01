/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents an inspection single result.
 */
export type InspectionApiSingleResultDTO =
  | {
      /**
       * The inspection single result value internal id
       */
      id?: string;
      /**
       * The inspection characteristic number
       */
      inspectionCharacteristic?: string;
      /**
       * The formatted measured value of the single result for qualitative characteristic
       */
      formattedMeasuredValue?: string;
      /**
       * The attribute code group of the single result for quantitative characteristic
       */
      characteristicAttributeCodeGrp?: string;
      /**
       * The attribute code of the single result for quantitative characteristic
       */
      characteristicAttributeCode?: string;
      /**
       * The comment text of the single result
       */
      comment?: string;
      /**
       * The valuation result of the valuation single result
       */
      valuationResult?: string;
      /**
       * The creation date time of the single result recording in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2023-01-18T11:01:01.001Z"
       * Format: "date-time".
       */
      creationDateTime?: string;
      /**
       * The last changed date time of the single result recording in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2023-01-18T11:01:01.001Z"
       * Format: "date-time".
       */
      lastChangedDateTime?: string;
    }
  | Record<string, any>;
