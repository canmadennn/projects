/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This business object defines key fields of the routing or recipe object.
 */
export type OperationId =
  | {
      /**
       * The reference of the standard rate.
       */
      ref?: string;
      /**
       * The plant the operation ID belongs to.
       */
      plant?: string;
      /**
       * The operation ID.
       */
      operation?: string;
      /**
       * The version of the operation ID.
       */
      version?: string;
    }
  | Record<string, any>;
