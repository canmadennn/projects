/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InputStream } from './input-stream';
import type { ScanningReport } from './scanning-report';
/**
 * Representation of the 'File' schema.
 */
export type File =
  | {
      absolute?: boolean;
      absoluteFile?: File;
      absolutePath?: string;
      canonicalFile?: File;
      canonicalPath?: string;
      content?: InputStream;
      /**
       * Format: "int64".
       */
      contentLength?: number;
      contentType?: string;
      /**
       * Format: "date-time".
       */
      createdTime?: string;
      directory?: boolean;
      file?: boolean;
      fileName?: string;
      folderPath?: string;
      /**
       * Format: "int64".
       */
      freeSpace?: number;
      hidden?: boolean;
      id?: string;
      /**
       * Format: "date-time".
       */
      lastModified?: string;
      /**
       * Format: "date-time".
       */
      lastScanned?: string;
      name?: string;
      parent?: string;
      parentFile?: File;
      path?: string;
      scanningReport?: ScanningReport;
      tenantId?: string;
      /**
       * Format: "int64".
       */
      totalSpace?: number;
      /**
       * Format: "int64".
       */
      usableSpace?: number;
      userMetadata?: Record<string, string>;
    }
  | Record<string, any>;
