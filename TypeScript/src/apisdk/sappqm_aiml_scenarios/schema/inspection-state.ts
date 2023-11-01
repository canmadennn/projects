/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ProductionContext } from './production-context';
import type { Timestamp } from './timestamp';
import type { LoggedNC } from './logged-nc';
import type { Prediction } from './prediction';
/**
 * Representation of the latest inspection state.
 */
export type InspectionState =
  | {
      context: ProductionContext;
      /**
       * Base64 encoded content of the inspected file.
       */
      fileContent?: string;
      /**
       * Media type of the inspected file.
       */
      fileContentType?: string;
      /**
       * Identifier of the inspected file.
       * Max Length: 100.
       * Min Length: 1.
       */
      fileId?: string;
      inspectionLogTime?: Timestamp;
      /**
       * Determines if the inspected file is identified as conformant or nonconformant.
       */
      isConformant?: boolean;
      /**
       * List of operator logged defects for the inspected file.
       */
      loggedNCS?: LoggedNC[];
      /**
       * List of predicted defects for the inspected file.
       */
      predictions?: Prediction[];
      /**
       * AI/ML Scenario ID
       */
      scenarioID?: string;
      /**
       * AI/ML Scenario version
       * Format: "int32".
       */
      scenarioVersion?: number;
    }
  | Record<string, any>;
