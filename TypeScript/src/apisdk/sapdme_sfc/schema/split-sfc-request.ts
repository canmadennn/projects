/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcQuantity } from './sfc-quantity';
/**
 * Representation of the 'SplitSfcRequest' schema.
 */
export type SplitSfcRequest =
  | {
      /**
       * The plant containing the SFC.
       */
      plant: string;
      /**
       * The SFC for split.
       */
      sfc: string;
      /**
       * The list of new SFCs and quantities that must be created during the SFC split.
       */
      newSfcs: SfcQuantity[];
      /**
       * Allows to create new SFCs with total quantity more than the original SFC quantity. The original SFC quantity will not be reduced.
       */
      allowOverproduction?: boolean;
      /**
       * Copy work instruction data from the original SFC.
       */
      copyWorkInstructionData?: boolean;
      /**
       * Copy component traceability data from the original SFC.
       */
      copyComponentTraceabilityData?: boolean;
      /**
       * Copy nonconformance data from the original SFC.
       */
      copyNonConformanceData?: boolean;
      /**
       * Copy buyoff data from the original SFC.
       */
      copyBuyoffData?: boolean;
      /**
       * Copy data collection data from the original SFC.
       */
      copyDataCollectionData?: boolean;
      /**
       * Copy activity log data from the original SFC.
       */
      copyActivityLogData?: boolean;
      /**
       * The routing step where to split SFC.
       */
      routingStepId?: string;
      /**
       * To identify split quantity source from the parent SFC such as quantity in queue or quantity in work for a split SFC quantity.
       */
      splitQuantitySource?: 'IN_WORK' | 'IN_QUEUE';
    }
  | Record<string, any>;
