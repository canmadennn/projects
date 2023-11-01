/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LogToolUsage' schema.
 */
export type LogToolUsage =
  | {
      /**
       * The operation against which the tool usage is logged
       */
      operation: string;
      /**
       * The plant for which the tool usage is logged
       */
      plant: string;
      /**
       * The resource to which the tool is assigned
       */
      resource: string;
      /**
       * The list of SFCs for which the tool usage is logged
       */
      sfcs: string[];
    }
  | Record<string, any>;
