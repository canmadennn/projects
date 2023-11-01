/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MaterialCuRequest } from './material-cu-request';
/**
 * The resource bin object in the create or update resource request.
 */
export type ResourceBinCuRequest =
  | {
      /**
       * The name of the bin for the resource.
       * Max Length: 36.
       * Min Length: 1.
       */
      bin: string;
      /**
       * The description of the bin.
       * Max Length: 40.
       * Min Length: 1.
       */
      description?: string;
      /**
       * The maximum component quantity that can be loaded to the bin.
       */
      maxQuantity?: number;
      /**
       * The sequence of the bin.
       * Format: "int64".
       */
      sequence: number;
      material?: MaterialCuRequest;
    }
  | Record<string, any>;
