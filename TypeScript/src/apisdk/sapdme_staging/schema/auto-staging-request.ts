/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { OrderStagingRequest } from './order-staging-request';
import type { SfcStagingRequest } from './sfc-staging-request';
/**
 * Representation of the 'AutoStagingRequest' schema.
 */
export type AutoStagingRequest =
  | {
      /**
       * The plant where the staging request is performed
       */
      plant: string;
      /**
       * Specify at which level the staging request is performed. If the level is 'ORDER', fill the fields of 'orderStagingRequest'. If the level is 'SFC', fill the fields of 'sfcStagingRequest'.
       */
      stagingLevel: 'ORDER' | 'SFC';
      orderStagingRequest?: OrderStagingRequest;
      sfcStagingRequest?: SfcStagingRequest;
    }
  | Record<string, any>;
