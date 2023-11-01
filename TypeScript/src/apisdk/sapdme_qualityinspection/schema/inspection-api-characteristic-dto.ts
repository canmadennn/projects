/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents an inspection characteristic.
 */
export type InspectionApiCharacteristicDTO =
  | {
      /**
       * The inspection characteristic number
       */
      inspectionCharacteristic?: string;
      /**
       * The inspection characteristic specification text
       */
      name?: string;
      /**
       * Indicates the inspection characteristic type. If set to 'true', it means the inspection characteristic is quantitative characteristic. Otherwise, it means qualitative characteristic.
       */
      isQuantitative?: boolean;
      /**
       * The sample size that has to be inspected for a characteristic
       * Format: "int32".
       */
      sampleSize?: number;
      /**
       * The sample unit of measure that is used to determine a sample for a characteristic
       */
      sampleUnit?: string;
      /**
       * The unit of measure of inspection values (target value, specification limits, etc.) for a quantitative characteristic
       */
      specificationUnit?: string;
      /**
       * Indicates whether the upper limit value is set. “X” means that the upper limit value is set, while empty value means the opposite.
       */
      hasUpperLimit?: boolean;
      /**
       * The formatted upper specification limit for a quantitative characteristic
       */
      formattedUpperLimit?: string;
      /**
       * Indicates whether the lower limit value is set. “X” means that the lower limit value is set, while empty value means the opposite.
       */
      hasLowerLimit?: boolean;
      /**
       * The formatted lower specification limit for a quantitative characteristic
       */
      formattedLowerLimit?: string;
      /**
       * Indicates whether the 1st upper limit value is set. “X” means that the 1st upper limit value is set, while empty value means the opposite.
       */
      has1stUpperLimit?: boolean;
      /**
       * The formatted 1st upper specification limit for a quantitative characteristic
       */
      formatted1stUpperLimit?: string;
      /**
       * Indicates whether the 1st lower limit value is set. “X” means that the 1st lower limit value is set, while empty value means the opposite.
       */
      has1stLowerLimit?: boolean;
      /**
       * The formatted 1st lower specification limit for a quantitative characteristic
       */
      formatted1stLowerLimit?: string;
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
