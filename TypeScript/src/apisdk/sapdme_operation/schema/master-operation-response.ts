/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
import type { ResourceTypeId } from './resource-type-id';
import type { Routing } from './routing';
import type { WorkCenterId } from './work-center-id';
/**
 * Representation of the 'MasterOperationResponse' schema.
 */
export type MasterOperationResponse =
  | {
      /**
       * If true, then this is a current version of operation.
       */
      currentVersion?: boolean;
      /**
       * Custom values of the operation.
       */
      customValues?: CustomValue[];
      /**
       * The description of the operation.
       */
      description?: string;
      /**
       * Name of the operation.
       */
      operation?: string;
      /**
       * The plant this operation is assigned to.
       */
      plant?: string;
      /**
       * Required time in process of this operation.
       * Format: "int32".
       */
      requiredTimeInProcess?: number;
      resource?: ResourceTypeId;
      resourceType?: ResourceTypeId;
      specialRouting?: Routing;
      /**
       * The status of the operation.
       */
      status?:
        | 'NEW'
        | 'RELEASABLE'
        | 'FROZEN'
        | 'OBSOLETE'
        | 'HOLD'
        | 'HOLD_YIELD_RATE'
        | 'HOLD_CONSEC_NC'
        | 'HOLD_SPC_VIOL'
        | 'HOLD_SPC_WARN';
      /**
       * Indicates the type of operation.
       */
      type?: 'NORMAL_OPERATION' | 'SPECIAL_OPERATION' | 'TEST_OPERATION';
      /**
       * The operation version.
       */
      version?: string;
      workCenter?: WorkCenterId;
    }
  | Record<string, any>;
