/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcApiModel } from './sfc-api-model';
/**
 * Representation of the 'SfcContentModel' schema.
 */
export type SfcContentModel =
  | {
      /**
       * The order associated with the packing unit
       */
      shopOrder?: string;
      /**
       * The shop floor control (SFC) associated with the packing unit
       */
      sfcs?: SfcApiModel[];
    }
  | Record<string, any>;
