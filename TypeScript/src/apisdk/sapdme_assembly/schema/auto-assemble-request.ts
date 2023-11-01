/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request object to assemble auto assembly components
 */
export type AutoAssembleRequest =
  | {
      /**
       * The operation activity to work on
       */
      operationActivity: string;
      /**
       * The version of the operation activity to work on.
       */
      operationActivityVersion?: string;
      /**
       * The plant where the auto assembly is performed.
       */
      plant: string;
      /**
       * The SFC quantity to assemble.
       */
      quantity?: number;
      /**
       * The resource to work on.
       */
      resource: string;
      /**
       * The list of SFC names that must be processed.
       */
      sfcs: string[];
    }
  | Record<string, any>;
