/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceId } from './resource-id';
import type { WorkCenterId } from './work-center-id';
/**
 * Defines the resources and work centers that are part of this work center.
 */
export type WorkCenterMemberV2 =
  | {
      resource?: ResourceId;
      workCenter?: WorkCenterId;
      /**
       * Indicates if it is a default member.
       */
      defaultMember?: boolean;
      /**
       * Indicates if it is relevant for monitoring.
       */
      monitoringRelevant?: boolean;
      /**
       * Indicates if it is relevant for scheduling.
       */
      schedulingRelevant?: boolean;
    }
  | Record<string, any>;
