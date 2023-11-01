/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CreateBatchByMaterialResponse' schema.
 */
export type CreateBatchByMaterialResponse =
  | {
      /**
       * Batch number
       */
      batchNumber?: string;
      /**
       * Material name
       */
      material?: string;
      /**
       * The validated status of batch number in ERP system. "Y" indicates that the batch number is successfully created and is ready for use. "N" indicates an unvalidated status of batch number in ERP system.
       */
      validated?: 'N' | 'Y';
      /**
       * The availability date of the batch. It indicates when the batch becomes available for use. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      batchAvailabilityDate?: string;
      /**
       * The batch number provided by the vendor
       */
      batchBySupplier?: string;
      /**
       * An ISO country code that specifies the material's country of origin. It normally indicates in which country the material is manufactured.
       */
      countryOfOrigin?: string;
      /**
       * The creation date time of the batch in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-08-31T23:53:34.123Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The time when the batch was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-08-31T23:53:34.123Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The production date of the batch. It indicates when the product is manufactured. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      productionDate?: string;
      /**
       * An ISO region code that specifies the material's region of origin. It normally indicates in which region the material is manufactured.
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
       * The status of the batch in SAP Digital Manufacturing. There are 3 possible statuses: <br>1) CREATED: Indicates that the batch is created in SAP Digital Manufacturing, and is not yet synchronized to the integrated ERP system. Batch with this status is not ready for use; <br>2) INVALIDATED: Indicates that the batch is created in SAP Digital Manufacturing, however, the synchronization to the integrated ERP system failed. Batch with this status is not ready for use; <br>3) VALIDATED: Indicates that the batch is created in SAP Digital Manufacturing, and successfully sychronized to the integrated ERP system. Batch with this status is ready for use.
       */
      status?: 'CREATED' | 'INVALIDATED' | 'VALIDATED';
      /**
       * The account number of the vendor
       */
      supplier?: string;
    }
  | Record<string, any>;
