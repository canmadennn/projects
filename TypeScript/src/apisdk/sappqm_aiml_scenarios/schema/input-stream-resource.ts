/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { File } from './file';
import type { InputStream } from './input-stream';
import type { URI } from './uri';
import type { URL } from './url';
/**
 * Representation of the 'InputStreamResource' schema.
 */
export type InputStreamResource =
  | {
      description?: string;
      file?: File;
      filename?: string;
      inputStream?: InputStream;
      open?: boolean;
      readable?: boolean;
      uri?: URI;
      url?: URL;
    }
  | Record<string, any>;
