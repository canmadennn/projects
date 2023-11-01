/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ClassificationAssignmentCharacteristicValue } from './classification-assignment-characteristic-value';
/**
 * Response object for classification assignment header
 */
export type ClassificationAssignmentHeader =
  | {
      /**
       * Assignment ID
       */
      assignmentId?: string;
      /**
       * Class type
       */
      classType?: string;
      /**
       * Class internal ID
       */
      classInternalId?: string;
      /**
       * Object key
       */
      objectKey?: string;
      /**
       * Object type
       */
      objectType?: string;
      /**
       * Assignment created site
       */
      assignmentCreatedSite?: string;
      /**
       * Status
       */
      status?: string;
      /**
       * Standard class
       */
      standardClass?: string;
      /**
       * Valid from
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validFrom?: string;
      /**
       * Valid to
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validTo?: string;
      /**
       * Characteristic values of the material.
       */
      assignmentCharacteristicValues?: ClassificationAssignmentCharacteristicValue[];
    }
  | Record<string, any>;
