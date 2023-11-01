/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataField } from './data-field';
import type { LogNonConformanceFile } from './log-non-conformance-file';
/**
 * The request to log a nonconformance.
 */
export type LogNonConformanceRequest =
  | {
      /**
       * The nonconformance code to log a nonconformance.
       * Max Length: 16.
       * Min Length: 1.
       */
      code: string;
      /**
       * The data field/value pairs associated with the nonconformance.
       */
      dataFields?: DataField[];
      /**
       * The collection of files to be stored with the nonconformance.
       */
      files?: LogNonConformanceFile[];
      /**
       * The plant to log a nonconformance.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * The resource to log a nonconformance.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource?: string;
      /**
       * The SFC to log a nonconformance.
       */
      sfcs: string[];
      /**
       * The process lot to log nonconformance codes for the SFCs belonging to it.
       * Max Length: 128.
       * Min Length: 1.
       */
      processLotNumber?: string;
      /**
       * The work center to log a nonconformance.
       * Max Length: 36.
       * Min Length: 1.
       */
      workCenter?: string;
      /**
       * The nonconformant SFC quantity.
       */
      quantity?: number;
      /**
       * The primary nonconformance record for logging a secondary nonconformance code.
       * Max Length: 412.
       * Min Length: 1.
       */
      primaryNonConformanceId?: string;
      /**
       * The routing step on the relaxed routing where the nonconformance was logged.
       * Max Length: 6.
       * Min Length: 1.
       */
      routingStepId?: string;
    }
  | Record<string, any>;
