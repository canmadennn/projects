/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'MergeSfcRequest' schema.
 */
export type MergeSfcRequest =
  | {
      /**
       * The plant containing the SFC.
       */
      plant: string;
      /**
       * The parent SFC for merging
       */
      parentSfc: string;
      /**
       * The list of source SFCs for merging
       */
      sourceSfcs: string[];
      /**
       * Allows you to merge SFCs at different operation activities.
       */
      mergeAcrossOperations?: boolean;
      /**
       * Copy work instruction data to the parent SFC.
       */
      copyWorkInstructionData?: boolean;
      /**
       * Copy component traceability data to the parent SFC.
       */
      copyComponentTraceabilityData?: boolean;
      /**
       * Copy nonconformance data to the parent SFC.
       */
      copyNonConformanceData?: boolean;
      /**
       * Copy buyoff data to the parent SFC.
       */
      copyBuyoffData?: boolean;
      /**
       * Copy data collections to the parent SFC.
       */
      copyDataCollectionData?: boolean;
      /**
       * Copy activity log data to the parent SFC.
       */
      copyActivityLogData?: boolean;
      /**
       * The routing step where to merged SFC.
       */
      routingStepId?: string;
    }
  | Record<string, any>;
