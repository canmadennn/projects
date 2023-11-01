/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { FileAttachment } from './file-attachment';
/**
 * Object representing a data collection paramter,its value, along with any file attachments.
 */
export type Parameter =
  | {
      /**
       * A comment.
       */
      comment?: string;
      /**
       * List of attached file identifier objects.
       */
      files?: FileAttachment[];
      /**
       * The parameter name.
       */
      name: string;
      /**
       * The parameter value.
       */
      value?: string;
    }
  | Record<string, any>;
