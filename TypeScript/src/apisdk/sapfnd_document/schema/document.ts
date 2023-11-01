/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DocumentType } from './document-type';
/**
 * Representation of the 'Document' schema.
 */
export type Document =
  | {
      /**
       * Format: "date-time".
       */
      createdDateTime?: string;
      currentVersion?: boolean;
      description?: string;
      document?: string;
      /**
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * Format: "int32".
       */
      printQuantity?: number;
      status?: 'ENABLED' | 'DISABLED';
      type?: DocumentType;
      version?: string;
    }
  | Record<string, any>;
