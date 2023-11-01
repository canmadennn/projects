/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CharacteristicDescriptionList } from './characteristic-description-list';
import type { ClassificationCharacteristicAllowedValue } from './classification-characteristic-allowed-value';
import type { ClassificationAssignmentCharacteristicValue } from './classification-assignment-characteristic-value';
/**
 * Response object for classification class description
 */
export type ClassificationCharacteristic =
  | {
      /**
       * Characteristic internal ID
       */
      charcInternalId?: string;
      /**
       * Characteristic external ID
       */
      charcExternalId?: string;
      /**
       * Name
       */
      name?: string;
      /**
       * Position number (of type int)
       */
      positionNumber?: number;
      /**
       * Is print relevant
       */
      isPrintRelevant?: string;
      /**
       * Is search relevant
       */
      isSearchRelevant?: string;
      /**
       * Is display relevant
       */
      isDisplayRelevant?: string;
      /**
       * Created date time
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      createdDateTime?: string;
      /**
       * Modified date time
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      modifiedDateTime?: string;
      /**
       * Validity start date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityStartDate?: string;
      /**
       * Validity end date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityEndDate?: string;
      /**
       * Status
       */
      status?: string;
      /**
       * Status name
       */
      statusName?: string;
      /**
       * Group
       */
      group?: string;
      /**
       * Group name
       */
      groupName?: string;
      /**
       * Data type
       */
      dataType?: 'CHAR' | 'NUM' | 'DATE' | 'TIME';
      /**
       * Length (of type decimal)
       */
      length?: number;
      /**
       * Decimal places (of type decimal)
       */
      decimalPlaces?: number;
      /**
       * Exponent format (of type int)
       */
      exponentFormat?: number;
      /**
       * Class exponent value (of type decimal)
       */
      exponentValue?: number;
      /**
       * UOM
       */
      uom?: string;
      /**
       * Is case sensitive
       */
      isCaseSensitive?: string;
      /**
       * Is required
       */
      isRequired?: string;
      /**
       * Multiple values allowed
       */
      isMultipleValuesAllowed?: string;
      /**
       * Value interval allowed
       */
      isValueIntervalAllowed?: string;
      /**
       * Additional value allowed
       */
      isAdditionalValueAllowed?: string;
      /**
       * Negative value allowed
       */
      isNegativeValueAllowed?: string;
      /**
       * Read only
       */
      isReadOnly?: string;
      /**
       * Is hidden
       */
      isHidden?: string;
      /**
       * List of descriptions for characteristics
       */
      characteristicDescriptionList?: CharacteristicDescriptionList[];
      /**
       * List of allowed values
       */
      allowedValueList?: ClassificationCharacteristicAllowedValue[];
      /**
       * Default values
       */
      defaultValue?: ClassificationAssignmentCharacteristicValue[];
    }
  | Record<string, any>;
