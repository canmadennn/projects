/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { OperationActivity } from './operation-activity';
/**
 * Representation of the 'NonConformanceGroup' schema.
 */
export type NonConformanceGroup =
  | {
      /**
       * Format: "date-time".
       */
      createdDateTime?: string;
      description?: string;
      group?: string;
      /**
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      operationActivities?: OperationActivity[];
      plant?: string;
      validAtAllOperationActivities?: boolean;
    }
  | Record<string, any>;
