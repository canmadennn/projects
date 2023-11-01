/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceSetupOrderCuRequest } from './resource-setup-order-cu-request';
/**
 * The resource setup object in the create or update resource request.
 */
export type ResourceSetupCuRequest =
  | {
      order: ResourceSetupOrderCuRequest;
      /**
       * The resource setup state.
       */
      state?: 'SETUP' | 'PROPOSED' | 'OPEN';
    }
  | Record<string, any>;
