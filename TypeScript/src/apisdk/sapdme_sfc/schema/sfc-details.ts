/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Bom } from './bom';
import type { Material } from './material';
import type { Routing } from './routing';
import type { SfcStatus } from './sfc-status';
import type { SfcStep } from './sfc-step';
/**
 * The object representing an SFC under a work list response.
 */
export type SfcDetails =
  | {
      /**
       * The SFC actual completion date.
       */
      actualCompletionDateTime?: string;
      /**
       * The default SFC Batch ID.
       */
      defaultBatchId?: string;
      bom?: Bom;
      material?: Material;
      /**
       * The order for the SFC.
       */
      order?: string;
      /**
       * A number representing the priority of the SFC.
       */
      priority?: number;
      /**
       * The quantity of the SFC.
       */
      quantity?: number;
      /**
       * The total step aggregated quantity completed of this SFC but in a complete pending status.
       */
      quantityCompletePending?: number;
      /**
       * The total step aggregated quantity in queue of this SFC.
       */
      quantityInQueue?: number;
      /**
       * The total step aggregated quantity in work of this SFC.
       */
      quantityInWork?: number;
      /**
       * The total step aggregated quantity rejected from this SFC.
       */
      quantityRejected?: number;
      routing?: Routing;
      /**
       * The name of the SFC.
       */
      sfc?: string;
      status?: SfcStatus;
      steps?: SfcStep[];
    }
  | Record<string, any>;
