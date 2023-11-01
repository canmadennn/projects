/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingStepId } from './routing-step-id';
/**
 * The list of routing step groups.
 */
export type RoutingStepGroupStep =
  | {
      routingStep?: RoutingStepId;
      /**
       * Controls the order the steps are controlled within the group.
       */
      sequence?: number;
      /**
       * A comma-delimited list of next step successors for this particular step group member.
       */
      successors?: string;
    }
  | Record<string, any>;
