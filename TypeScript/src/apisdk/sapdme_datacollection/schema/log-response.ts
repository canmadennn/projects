/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { LoggedNonConformanceParameters } from './logged-non-conformance-parameters';
import type { LoggedNonConformantSfc } from './logged-non-conformant-sfc';
/**
 * Response to log data collection API call.
 */
export type LogResponse =
  | {
      /**
       * The SFCs where data collection had issues.
       */
      failedSfcs?: string[];
      /**
       * Holds information about the failed paramters.
       */
      loggedNonConformanceParameters?: LoggedNonConformanceParameters[];
      /**
       * Holds disposition information about the failed SFCs above.
       */
      loggedNonConformantSfcs?: LoggedNonConformantSfc[];
      /**
       * Indicates if all data collection parameters have been logged successfully.
       */
      success?: boolean;
    }
  | Record<string, any>;
