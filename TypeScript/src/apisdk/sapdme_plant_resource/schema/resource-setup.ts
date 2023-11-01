/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceSetupOrder } from './resource-setup-order';
/**
 * The resource setup object in the resource.
 */
export type ResourceSetup =
  | {
      order?: ResourceSetupOrder;
      /**
       * The resource setup state.
       */
      state?: 'SETUP' | 'PROPOSED' | 'OPEN';
      /**
       * The sequence of the resource setup.
       */
      sequence?: number;
      /**
       * The date time when the resource setup was created.
       * @example "2022-10-11T09:06:01.218+00:00"
       * Format: "date-time".
       */
      createdDateTime?: string;
    }
  | Record<string, any>;
