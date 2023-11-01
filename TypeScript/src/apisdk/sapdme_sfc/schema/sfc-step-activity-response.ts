/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcStepDetails } from './sfc-step-details';
/**
 * The SFC activity steps response.
 */
export type SfcStepActivityResponse =
  | {
      /**
       * The SFC used to retrieve step activity details.
       */
      sfc?: string;
      /**
       * List of SFC step activity details.
       */
      steps?: SfcStepDetails[];
    }
  | Record<string, any>;
