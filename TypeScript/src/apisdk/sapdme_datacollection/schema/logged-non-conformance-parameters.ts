/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LoggedNonConformanceParameters' schema.
 */
export type LoggedNonConformanceParameters =
  | {
      /**
       * Number of times logged.
       * Format: "int32".
       */
      loggedCount?: number;
      /**
       * the non-conformance
       */
      nonConformance?: string;
      /**
       * The paramter name
       */
      parameter?: string;
    }
  | Record<string, any>;
