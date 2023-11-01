/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object describing the kind of SFC disposition that was selected.
 */
export type DispositionSelection =
  | {
      /**
       * The ID of the return step where nonconformant SFCs must be dispositioned.
       */
      returnStepId?: string;
      /**
       * The routing where nonconformant SFCs must be dispositioned.
       */
      routing?: string;
      /**
       * The type of the routing where nonconformant SFCs must be dispositioned.
       */
      routingType?: string;
      /**
       * The version of the routing where nonconformant SFCs must be dispositioned.
       */
      routingVersion?: string;
    }
  | Record<string, any>;
