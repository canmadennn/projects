/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ProductionContext } from './production-context';
/**
 * Log inspection response
 */
export type SaveInspectionStateResponse =
  | {
      context?: ProductionContext;
      /**
       * Inspection file identifier.
       */
      fileId?: string;
    }
  | Record<string, any>;
