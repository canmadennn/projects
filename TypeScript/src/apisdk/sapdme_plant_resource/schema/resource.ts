/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceBin } from './resource-bin';
import type { CustomValue } from './custom-value';
import type { ResourceEquipment } from './resource-equipment';
import type { ResourceType } from './resource-type';
import type { ResourceSetup } from './resource-setup';
/**
 * Representation of the 'Resource' schema.
 */
export type Resource =
  | {
      bins?: ResourceBin[];
      /**
       * The date time when the resource was created.
       * @example "2022-10-04T08:59:51.679+00:00"
       * Format: "date-time".
       */
      createdDateTime?: string;
      customValues?: CustomValue[];
      description?: string;
      efficiency?: number;
      /**
       * The number of shop floor controls that can be processed for the resource. If this field equals zero, there is no limit for the quantity of shop floor controls.
       */
      sfcLimit?: number;
      /**
       * Indicates that the resource status changes immediately or when the last shop floor control is completed at this resource.
       */
      immediateStatusChange?: boolean;
      equipment?: ResourceEquipment[];
      /**
       * The date time when the resource was updated.
       * @example "2022-10-04T08:59:51.679+00:00"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      plant?: string;
      process?: boolean;
      resource?: string;
      setupState?: 'SETUP' | 'PROPOSED' | 'OPEN';
      status?:
        | 'UNKNOWN'
        | 'PRODUCTIVE'
        | 'SCHEDULED_DOWN'
        | 'UNSCHEDULED_DOWN'
        | 'ENABLED'
        | 'DISABLED';
      types?: ResourceType[];
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
      setups?: ResourceSetup[];
    }
  | Record<string, any>;
