/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'RelabelSfcRequest' schema.
 */
export type RelabelSfcRequest =
  | {
      /**
       * The plant containing the SFC.
       */
      plant: string;
      /**
       * The SFC to be relabeled.
       */
      sfc: string;
      /**
       * The new SFC that must be created during relabeling.
       */
      newSfc: string;
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
       * The routing step where to relabel SFC.
       */
      routingStepId?: string;
    }
  | Record<string, any>;
