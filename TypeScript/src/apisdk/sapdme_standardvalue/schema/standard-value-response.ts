/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { StandardValueCollection } from './standard-value-collection';
/**
 * Standard Value details response.
 */
export type StandardValueResponse =
  | {
      /**
       * Work center from where the standard values have to be retrieved.
       */
      workCenter?: string;
      /**
       * Operation or phase for which the standard values have to be retrieved.
       */
      operationActivity?: string;
      /**
       * Operation or phase for which the standard values have to be retrieved.
       */
      operationActivityVersion?: string;
      /**
       * Routing or recipe for which the standard values have to be retrieved.
       */
      object?: string;
      /**
       * Version of the routing or recipe.
       */
      objectVersion?: string;
      /**
       * StepId of the routing or recipe.
       */
      stepId?: string;
      /**
       * Standard Value Key
       */
      standardValueKey?: string;
      /**
       * Standard Values associated with the operation or phase.
       */
      standardValueCollectionList?: StandardValueCollection[];
    }
  | Record<string, any>;
