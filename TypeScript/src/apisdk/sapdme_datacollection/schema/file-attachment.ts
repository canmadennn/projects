/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * A generic file attachment object.
 */
export type FileAttachment =
  | {
      /**
       * The file content Base64 encoded.
       */
      fileContent: string;
      /**
       * The file identifier within an object-storage service if the file is in the storage.
       */
      fileId?: string;
      /**
       * The file media type, e.g. 'text/xml'
       */
      fileMediaType: string;
      /**
       * The file name.
       */
      fileName: string;
    }
  | Record<string, any>;
