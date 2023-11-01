/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BasicRouter } from './basic-router';
import type { RoutingStep } from './routing-step';
/**
 * Representation of the 'RoutingLink' schema.
 */
export type RoutingLink =
  | {
      router?: BasicRouter;
      routingStep?: RoutingStep;
    }
  | Record<string, any>;
