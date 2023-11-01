/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataCollectionGroup } from './data-collection-group';
import type { Operation } from './operation';
import type { SFCDataCollectionStatus } from './sfc-data-collection-status';
import type { RoutingStep } from './routing-step';
/**
 * Response from data collection groups list API call.
 */
export type GroupsListResponse =
  | {
      /**
       * Boolean to indicate if all data has been collected for this data collection group
       */
      allDataCollected?: boolean;
      group?: DataCollectionGroup;
      operation?: Operation;
      /**
       * The resource at which data is collected.
       */
      resource?: string;
      sfcDataCollectionStatus?: SFCDataCollectionStatus;
      /**
       * The shop order of the SFC we are collecting data for.
       */
      shopOrder?: string;
      step?: RoutingStep;
      /**
       * The work center at which data is collected.
       */
      workCenter?: string;
    }
  | Record<string, any>;
