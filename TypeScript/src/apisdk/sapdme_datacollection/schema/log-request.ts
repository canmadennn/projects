/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DCGroup } from './dc-group';
import type { Operation } from './operation';
import type { Parameter } from './parameter';
/**
 * Request to log data for a given set of SFCs on the same router using the given data collection group and it parameter values.
 */
export type LogRequest =
  | {
      group: DCGroup;
      operation: Operation;
      /**
       * Data collection parameter values
       */
      parameterValues: Parameter[];
      /**
       * Plant
       */
      plant: string;
      /**
       * Resource at which data collection is performed.
       */
      resource: string;
      /**
       * The list of SFCs to collect data against.
       */
      sfcs: string[];
      /**
       * The Step ID on the given SFCs to collect data against.
       */
      stepId?: string;
      /**
       * Work center where data collection is performed.
       */
      workCenter?: string;
    }
  | Record<string, any>;
