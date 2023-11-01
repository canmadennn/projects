/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SetSfcQuantityRequest } from './set-sfc-quantity-request';
/**
 * Representation of the 'SetSfcQuantityRequests' schema.
 */
export type SetSfcQuantityRequests =
  | {
      /**
       * The plant containing the SFC.
       */
      plant: string;
      /**
       * The list of requests for setting the SFC quantity.
       */
      sfcQuantityRequests: SetSfcQuantityRequest[];
    }
  | Record<string, any>;
