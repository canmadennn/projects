/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceTypeCuRequest } from './resource-type-cu-request';
import type { ResourceBinCuRequest } from './resource-bin-cu-request';
import type { CustomValue } from './custom-value';
import type { ResourceEquipmentCuRequest } from './resource-equipment-cu-request';
import type { ResourceSetupCuRequest } from './resource-setup-cu-request';
/**
 * The request for creating or updating the resource.
 */
export type ResourceCuRequest =
  | {
      /**
       * The plant where a resource is defined.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * The name of the resource.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
      /**
       * The description of the resource.
       * Max Length: 40.
       * Min Length: 1.
       */
      description?: string;
      /**
       * Indicates that the resource is processed.
       */
      process?: boolean;
      /**
       * The status of the resource.
       */
      status?:
        | 'UNKNOWN'
        | 'PRODUCTIVE'
        | 'SCHEDULED_DOWN'
        | 'UNSCHEDULED_DOWN'
        | 'ENABLED'
        | 'DISABLED';
      /**
       * The setup state of the resource.
       */
      setupState?: 'SETUP' | 'PROPOSED' | 'OPEN';
      /**
       * The efficiency of the resource.
       */
      efficiency?: number;
      /**
       * The number of shop floor controls that can be processed for the resource. If this field equals zero, there is no limit for the quantity of shop floor controls.
       */
      sfcLimit?: number;
      /**
       * Indicates that the resource status changes immediately or when the last shop floor control is completed at this resource.
       */
      immediateStatusChange?: boolean;
      /**
       * The date time when the resource was updated. Required only for the update request. Can be found in the resource response.
       * @example "2022-10-11T09:06:01.218+00:00"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The list of the resource types assigned to the resource.
       */
      types?: ResourceTypeCuRequest[];
      /**
       * The list of bins for the resource.
       */
      bins?: ResourceBinCuRequest[];
      /**
       * The list of custom values for the resource.
       */
      customValues?: CustomValue[];
      /**
       * The list of pieces of equipment assigned to the resource.
       */
      equipment?: ResourceEquipmentCuRequest[];
      /**
       * The resource input queue capacity. 0 means that the resource queue management is disabled. You must always set both input and output queue capacities.
       */
      inQueueCapacity?: number;
      /**
       * The resource output queue capacity. 0 means that the resource queue management is disabled. You must always set both input and output queue capacities.
       */
      outQueueCapacity?: number;
      /**
       * The type of the resource input queue management.
       */
      inQueueManagement?: 'FIFO' | 'LIFO';
      /**
       * The type of the resource output queue management
       */
      outQueueManagement?: 'FIFO' | 'LIFO';
      /**
       * The list of resource setups with assigned orders.
       */
      setups?: ResourceSetupCuRequest[];
    }
  | Record<string, any>;
