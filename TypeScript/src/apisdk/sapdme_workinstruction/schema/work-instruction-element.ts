/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This business object represents the work instruction element object.
 */
export type WorkInstructionElement =
  | {
      /**
       * The file name of the element.
       */
      fileName?: string;
      /**
       * The URL of the file of the element.
       */
      fileExternalUrl?: string;
      /**
       * The MIME type of the file of the element.
       */
      mimeType?: string;
      /**
       * The sequence of the element.
       * Format: "int64".
       */
      sequence?: number;
      /**
       * The text content of the element.
       */
      text?: string;
      /**
       * The description of the element.
       */
      description?: string;
      /**
       * The type of the element.
       */
      type?: 'TEXT' | 'FILE' | 'URL' | 'HEADER_TEXT' | 'LOCAL_FILE';
      /**
       * The URL of the element
       */
      url?: string;
      /**
       * Defines if a work instruction should be opened in a new window.
       */
      newWindow?: boolean;
    }
  | Record<string, any>;
