/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ReleaseOrderTargetSfc } from './release-order-target-sfc';
/**
 * This object represents a request to release some SFC quantity from the order.
 */
export type ReleaseOrderRequest =
  | {
      /**
       * The order to be released
       */
      order: string;
      /**
       * Plant
       */
      plant: string;
      /**
       * The quantity to be released. If you provide this field, then 'targetSfcs' will not be accepted. If you want to use 'targetSfcs' to control the SFCs to be released, then this field must be removed or be empty.
       */
      quantityToRelease?: number;
      /**
       * Set it to 'true' if you want to ignore the lot size configuration on material. If it's 'false', the lot size configuration will take effect during the request validation and release process.
       */
      ignoreMaterialLotSize?: boolean;
      /**
       * Set it to 'true' if you want to release more than the available order quantity and ignore the order release status as well. If it's 'false', you cannot release more than the order quantity, and you cannot release the order if it's already in status 'Released'.
       */
      ignoreReleasableQuantity?: boolean;
      targetSfcs?: ReleaseOrderTargetSfc[];
    }
  | Record<string, any>;
