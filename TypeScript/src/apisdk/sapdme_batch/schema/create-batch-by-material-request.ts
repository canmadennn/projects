/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AdditionalParameter } from './additional-parameter';
/**
 * Representation of the 'CreateBatchByMaterialRequest' schema.
 */
export type CreateBatchByMaterialRequest =
  | {
      /**
       * Material name
       */
      material: string;
      /**
       * Plant name
       */
      plant: string;
      /**
       * The extension custom fields for batch creation
       * Max Items: 100.
       */
      extensionParameters?: AdditionalParameter[];
      /**
       * The availability date of the batch. It indicates when the batch becomes available for use. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      batchAvailabilityDate?: string;
      /**
       * The batch number provided by the vendor
       * Max Length: 15.
       */
      batchBySupplier?: string;
      /**
       * An ISO country code that specifies the material's country of origin. It normally indicates in which country the material is manufactured.
       * Max Length: 3.
       */
      countryOfOrigin?: string;
      /**
       * The production date of the batch. It indicates when the product is manufactured. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      productionDate?: string;
      /**
       * An ISO region code that specifies the material's region of origin. It normally indicates in which region the material is manufactured.
       * Max Length: 3.
       */
      regionOfOrigin?: string;
      /**
       * Indicates if the batch is in restricted-use. The default value is 'false'.
       */
      restricted?: boolean;
      /**
       * The shelf-life expiration or the best-before date of the batch. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      shelfLifeExpirationDate?: string;
      /**
       * The account number of the vendor
       * Max Length: 10.
       */
      supplier?: string;
    }
  | Record<string, any>;
