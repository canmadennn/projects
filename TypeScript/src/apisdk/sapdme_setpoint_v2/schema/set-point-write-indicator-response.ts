/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object is a representation of the response that was received from the machine model service.
 */
export type SetPointWriteIndicatorResponse =
  | {
      /**
       * Field associated with this success or failure of write operation.
       */
      success?: boolean;
      /**
       * Generated ID for the indicator structure.
       */
      referencePathId?: string;
      /**
       * Name of the Indicator property.
       */
      referenceName?: string;
      /**
       * A unique identifier was created for the root structure and the AssetType.
       */
      structureToAssetTypeReferencePathId?: string;
    }
  | Record<string, any>;
