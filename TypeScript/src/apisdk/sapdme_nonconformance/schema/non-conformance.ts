/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { NonConformanceCode } from './non-conformance-code';
import type { Material } from './material';
import type { IncidentNumber } from './incident-number';
import type { OperationActivity } from './operation-activity';
import type { Routing } from './routing';
import type { DataField } from './data-field';
/**
 * NonConformance Incident.
 */
export type NonConformance =
  | {
      category?: string;
      code?: NonConformanceCode;
      comments?: string;
      component?: Material;
      componentSfc?: Material;
      /**
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * Format: "date-time".
       */
      date?: string;
      fileIds?: string[];
      incidentNumber?: IncidentNumber;
      material?: Material;
      /**
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      operationActivity?: OperationActivity;
      plant?: string;
      quantity?: number;
      resource?: string;
      routing?: Routing;
      routingStepId?: string;
      sfc?: string;
      state?: 'OPEN' | 'CLOSED' | 'CANCELLED' | 'CLOSE_PENDING';
      user?: string;
      workCenter?: string;
      /**
       * The data field/value pairs associated with the nonconformance.
       */
      dataFields?: DataField[];
    }
  | Record<string, any>;
