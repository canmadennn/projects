/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ClassificationAssignmentCharacteristicValue } from './classification-assignment-characteristic-value';
/**
 * Representation of the 'PostBatchCharacteristicsRequest' schema.
 */
export type PostBatchCharacteristicsRequest =
  | {
      /**
       * The batch characteristic values to be created or updated for the batch
       */
      assignmentCharacteristicValues?: ClassificationAssignmentCharacteristicValue[];
      /**
       * The batch number for which batch characteristics are created or updated
       * Max Length: 10.
       */
      batchNumber: string;
      /**
       * Name of the material which the batch number is assigned to
       * Max Length: 40.
       */
      material: string;
      /**
       * The plant where the batch characteristics are created or updated
       * Max Length: 6.
       */
      plant: string;
    }
  | Record<string, any>;
