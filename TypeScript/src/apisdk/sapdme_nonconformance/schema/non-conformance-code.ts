/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { NonConformanceCodeDef } from './non-conformance-code-def';
import type { CustomValue } from './custom-value';
import type { NonConformanceGroup } from './non-conformance-group';
/**
 * Representation of the 'NonConformanceCode' schema.
 */
export type NonConformanceCode =
  | {
      category?: 'FAILURE' | 'DEFECT' | 'REPAIR';
      code?: string;
      codeDef?: NonConformanceCodeDef;
      /**
       * Format: "date-time".
       */
      createdDateTime?: string;
      customValues?: CustomValue[];
      description?: string;
      groups?: NonConformanceGroup[];
      /**
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      plant?: string;
      status?: 'ENABLED' | 'DISABLED';
    }
  | Record<string, any>;
