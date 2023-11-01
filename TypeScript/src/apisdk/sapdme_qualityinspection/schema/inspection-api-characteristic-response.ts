/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InspectionApiCharacteristicResponse' schema.
 */
export type InspectionApiCharacteristicResponse =
  | {
      /**
       * The sample size that has to be inspected for a characteristic
       * Format: "int32".
       */
      inspCharacteristicSampleSize?: number;
      /**
       * The sample unit of measure that is used to determine a sample for a characteristic
       */
      inspCharacteristicSampleUnit?: string;
      /**
       * The formatted lower specification limit for a quantitative characteristic
       */
      inspSpecFrmtdLowerLimit?: string;
      /**
       * The formatted upper specification limit for a quantitative characteristic
       */
      inspSpecFrmtdUpperLimit?: string;
      /**
       * Indicates whether the lower limit value is set. “X” means that the lower limit value is set, while empty value means the opposite.
       */
      inspSpecHasLowerLimit?: string;
      /**
       * Indicates whether the upper limit value is set. “X” means that the upper limit value is set, while empty value means the opposite.
       */
      inspSpecHasUpperLimit?: string;
      /**
       * Indicates the inspection characteristic type. If set to 'true', it means the inspection characteristic is quantitative characteristic. Otherwise, it's means qualitative characteristic.
       */
      inspSpecIsQuantitative?: boolean;
      /**
       * The inspection characteristic number
       */
      inspectionCharacteristic?: string;
      /**
       * The inspection lot number
       */
      inspectionLot?: string;
      /**
       * The unit of measure of inspection values (target value, specification limits, etc.) for a quantitative characteristic
       */
      inspectionSpecificationUnit?: string;
      /**
       * Indicates the inspection results recording with automatic data transfer.
       */
      originResultsData?: string;
      /**
       * The assigned selected set for a qualitative characteristic
       */
      selectedCodeSet?: string;
      /**
       * The plant of the assigned selected set
       */
      selectedCodeSetPlant?: string;
    }
  | Record<string, any>;
