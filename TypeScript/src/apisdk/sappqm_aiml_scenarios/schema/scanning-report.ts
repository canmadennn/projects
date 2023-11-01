/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ScanningReport' schema.
 */
export type ScanningReport =
  | {
      encryptedContentDetected?: boolean;
      malwareDetected?: boolean;
      mimeType?: string;
      /**
       * Format: "int64".
       */
      scanSize?: number;
    }
  | Record<string, any>;
