/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MaterialId } from './material-id';
import type { OperationActivityId } from './operation-activity-id';
import type { RoutingId } from './routing-id';
/**
 * This business object represents the work instruction attachment point.
 */
export type WorkInstructionAttachedPoint =
  | {
      material?: MaterialId;
      operationActivity?: OperationActivityId;
      /**
       * A resource to which the work instruction is attached.
       */
      resource?: string;
      routing?: RoutingId;
      /**
       * A routing step to which the work instruction is attached.
       */
      routingStep?: string;
      /**
       * The sequence of the attachment point.
       */
      sequence?: number;
      /**
       * A shop order to which the work instruction is attached.
       */
      shopOrder?: string;
      /**
       * A work center to which the work instruction is attached.
       */
      workCenter?: string;
      /**
       * Defines if a material is a header material.
       */
      headerMaterial?: boolean;
    }
  | Record<string, any>;
