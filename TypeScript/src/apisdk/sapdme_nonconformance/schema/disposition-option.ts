/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFC disposition option.
 */
export type DispositionOption =
  | {
      /**
       * The description of an SFC disposition.
       */
      description?: string;
      /**
       * The operation activity of the return step where nonconformant SFCs can be dispositioned.
       */
      operation?: string;
      /**
       * The version of the operation activity of the return step where nonconformant SFCs can be dispositioned.
       */
      operationVersion?: string;
      /**
       * The routing where nonconformant SFCs can be dispositioned.
       */
      routing?: string;
      /**
       * The type of the routing where nonconformant SFCs can be dispositioned.
       */
      routingType?: string;
      /**
       * The version of the routing where nonconformant SFCs can be dispositioned.
       */
      routingVersion?: string;
      /**
       * The ID of the return step where nonconformant SFCs can be dispositioned.
       */
      stepId?: string;
    }
  | Record<string, any>;
