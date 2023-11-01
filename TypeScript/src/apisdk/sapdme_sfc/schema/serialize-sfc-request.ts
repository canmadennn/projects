/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SerializeSfcRequest' schema.
 */
export type SerializeSfcRequest =
  | {
      /**
       * The plant containing the SFC.
       */
      plant: string;
      /**
       * The SFC for serialization.
       */
      sfc: string;
      /**
       * List of new SFCs that must be created during serialization. If the parameter "newSfcs" is not empty, "quantity" parameter will be ignored. The number of new SFCs will be equal to the number of items in the "newSfcs" list.
       */
      newSfcs?: string[];
      /**
       * The number of SFCs to serialize. If the parameter "newSfcs" is empty and "quantity" parameter is not empty, the number of new SFCs is equal to the "quantity" parameter.
       */
      quantity?: number;
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
       * The routing step where to serialize SFC.
       */
      routingStepId?: string;
    }
  | Record<string, any>;
