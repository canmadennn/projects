/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ClassificationClassDescription } from './classification-class-description';
import type { CharacteristicMap } from './characteristic-map';
import type { ClassificationCharacteristic } from './classification-characteristic';
/**
 * Response object for classification class
 */
export type ClassificationClass =
  | {
      /**
       * Local class internal ID
       */
      classInternalId?: string;
      /**
       * ERP class internal ID
       */
      erpInternalId?: string;
      /**
       * Class name
       */
      name?: string;
      /**
       * Class type
       */
      type?: string;
      /**
       * Class type name
       */
      typeName?: string;
      /**
       * Class status (of type int)
       */
      status?: number;
      /**
       * Class status name
       */
      statusName?: string;
      /**
       * Class group
       */
      group?: string;
      /**
       * Class group name
       */
      groupName?: string;
      /**
       * Locally created class
       */
      localClass?: string;
      /**
       * Created by user
       */
      createdBy?: string;
      /**
       * Created date time
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      createdDateTime?: string;
      /**
       * Modified by user
       */
      modifiedBy?: string;
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
       * List of descriptions
       */
      descriptionList?: ClassificationClassDescription[];
      /**
       * List of characteristics
       */
      characteristicList?: CharacteristicMap[];
      /**
       * Classification characteristics
       */
      characteristicDetails?: ClassificationCharacteristic[];
    }
  | Record<string, any>;
