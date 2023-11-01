/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SFC } from './sfc';
/**
 * Object represents the Packing Unit Content
 */
export type PackingUnitContentApiModel =
  | {
      /**
       * The packing unit which is the content of a packing unit.
       */
      packingUnit?:
        | {
            /**
             * The unique number of the packing unit.
             */
            number: string;
            /**
             * The plant where the packing unit is used.
             */
            plant: string;
          }
        | Record<string, any>;
      /**
       * The quantity of the packing unit content.
       */
      quantity?: number;
      sfc?: SFC;
      /**
       * The unit of measure which qualifies the content's quantity
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
