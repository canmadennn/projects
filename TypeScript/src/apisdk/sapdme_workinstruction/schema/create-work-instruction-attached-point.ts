/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MaterialId } from './material-id';
import type { OperationActivityId } from './operation-activity-id';
import type { ResourceId } from './resource-id';
import type { RoutingId } from './routing-id';
import type { RoutingStepId } from './routing-step-id';
import type { ShopOrderId } from './shop-order-id';
import type { WorkCenterId } from './work-center-id';
/**
 * This business object represents the work instruction attachment point.
 */
export type CreateWorkInstructionAttachedPoint =
  | {
      material?: MaterialId;
      operation?: OperationActivityId;
      resource?: ResourceId;
      routing?: RoutingId;
      routingStep?: RoutingStepId;
      shopOrder?: ShopOrderId;
      workCenter?: WorkCenterId;
      /**
       * Defines if a material is a header material.
       */
      headerMaterial?: boolean;
    }
  | Record<string, any>;
