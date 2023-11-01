/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { NonConformanceCodeId } from './non-conformance-code-id';
import type { OperationActivityId } from './operation-activity-id';
/**
 * Nonconformance group.
 */
export type NonConformanceGroupV2 =
  | {
      /**
       * The nonconformance codes assigned to this nonconformance group.
       */
      codes?: NonConformanceCodeId[];
      /**
       * The date and time when the nonconformance group was created.
       */
      createdDateTime?: string;
      /**
       * The nonconformance group description.
       */
      description?: string;
      /**
       * The nonconformance group value.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      group: string;
      /**
       * The date and time when the nonconformance group was updated.
       */
      modifiedDateTime?: string;
      /**
       * Operations to validate if nonconfromance group is valid at
       */
      operationActivities?: OperationActivityId[];
      /**
       * The plant where a nonconformance group is defined.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * Indicates whether to verify if nonconformance group is valid for the specified operations.
       */
      validAtAllOperationActivities?: boolean;
    }
  | Record<string, any>;
