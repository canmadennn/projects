/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The nonconformance file attachment.
 */
export type LogNonConformanceFile =
  | {
      /**
       * The file content Base64-encoded.
       */
      fileContent: string;
      /**
       * The file media type, for example, 'text/xml'.
       */
      fileMediaType: string;
      /**
       * The file name.
       */
      fileName: string;
    }
  | Record<string, any>;
