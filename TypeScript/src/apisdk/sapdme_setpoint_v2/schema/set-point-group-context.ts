/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
import type { Operation } from './operation';
import type { Routing } from './routing';
import type { RoutingStep } from './routing-step';
/**
 * Object represents a set of contexts for the Setpoint Group.
 */
export type SetPointGroupContext =
  | {
      material?: Material;
      operation?: Operation;
      /**
       * The resource that provides a context for the Setpoint Group.
       */
      resource: string;
      routing?: Routing;
      routingStep?: RoutingStep;
      /**
       * Setpoint Group name.
       */
      setPointGroup?: string;
      /**
       * A shop order object
       */
      shopOrder?: string;
    }
  | Record<string, any>;
