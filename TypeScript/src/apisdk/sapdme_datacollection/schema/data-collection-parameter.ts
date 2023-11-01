/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Object represents the Data Collection Parameter
 */
export type DataCollectionParameter =
  | {
      /**
       * Flag indication if a non-conformance should be logged automatically
       */
      autoLogNc?: boolean;
      /**
       * Status of DC Parameter
       */
      dcParameterStatus?: 'ENABLED' | 'DISABLED';
      /**
       * Type for DC Parameter
       */
      dcParameterType?:
        | 'NUMBER'
        | 'TEXT'
        | 'FORMULA'
        | 'BOOLEAN'
        | 'DATA_FIELD_LIST';
      /**
       * Description of DC Parameter
       */
      description?: string;
      /**
       * False value name for DC Parameter
       */
      falseValueName?: string;
      /**
       * Maximum value for DC Parameter
       */
      maxValue?: number;
      /**
       * Minimum value for DC Parameter
       */
      minValue?: number;
      /**
       * Non-conformance code
       */
      ncCode?: string;
      /**
       * Boolean value to indicate if override possible for min/max value for DC Parameter
       */
      overrideMinMax?: boolean;
      /**
       * Name of DC Parameter
       */
      parameterName?: string;
      /**
       * Parameter prompt for DC Parameter
       */
      parameterPrompt?: string;
      /**
       * Required data entries for DC Parameter
       * Format: "int64".
       */
      requiredDataEntries?: number;
      /**
       * Sequence of DC Parameter
       */
      sequence?: number;
      /**
       * Target value for DC Parameter
       */
      targetValue?: number;
      /**
       * True value name for DC Parameter
       */
      trueValueName?: string;
      /**
       * Unit of measurement for DC Parameter
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
