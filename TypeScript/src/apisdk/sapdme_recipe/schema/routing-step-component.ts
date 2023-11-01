/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BomComponentId } from './bom-component-id';
/**
 * The list of components to be assembled at the phase.
 */
export type RoutingStepComponent =
  | {
      bomComponent?: BomComponentId;
      /**
       * Controls the order of display and execution of the component.
       */
      sequence?: number;
      /**
       * The number of pieces of the component to be assembled at this step.
       */
      quantity?: number;
      /**
       * The upper bound tolerance value.
       */
      toleranceUnder?: number;
      /**
       * The lower bound tolerance value.
       */
      toleranceOver?: number;
    }
  | Record<string, any>;
