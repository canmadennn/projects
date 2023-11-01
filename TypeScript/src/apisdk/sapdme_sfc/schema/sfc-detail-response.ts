/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Bom } from './bom';
import type { Material } from './material';
import type { Order } from './order';
import type { Routing } from './routing';
import type { SfcStatus } from './sfc-status';
import type { SfcStep } from './sfc-step';
/**
 * Response containing SFC details, including order information.
 */
export type SfcDetailResponse =
  | {
      bom?: Bom;
      material?: Material;
      order?: Order;
      /**
       * The SFC quantity.
       */
      quantity?: number;
      /**
       * The default SFC Batch ID.
       */
      defaultBatchId?: string;
      routing?: Routing;
      /**
       * The SFC identifier.
       */
      sfc?: string;
      status?: SfcStatus;
      /**
       * The list of SFC steps.
       */
      steps?: SfcStep[];
    }
  | Record<string, any>;
