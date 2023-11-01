/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Routing } from './routing';
import type { NonConformanceSecondaryCode } from './non-conformance-secondary-code';
/**
 * Representation of the 'NonConformanceCodeDef' schema.
 */
export type NonConformanceCodeDef =
  | {
      autoCloseIncident?: boolean;
      canBePrimaryCode?: boolean;
      /**
       * Format: "date-time".
       */
      createdDateTime?: string;
      dataType?: string;
      dispositionRoutings?: Routing[];
      /**
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      secondaryCodes?: NonConformanceSecondaryCode[];
      severity?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
    }
  | Record<string, any>;
