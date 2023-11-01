/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SyncBatchResponse' schema.
 */
export type SyncBatchResponse =
  | {
      /**
       * The availability date of the batch. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-09-01"
       * Format: "date".
       */
      batchAvailabilityDate?: string;
      /**
       * The batch number provided by the vendor
       */
      batchBySupplier?: string;
      /**
       * The batch number that's retrieved
       */
      batchNumber?: string;
      /**
       * An ISO country code that specifies the material's country of origin. It normally indicates in which country the material is manufactured.
       */
      countryOfOrigin?: string;
      /**
       * The creation date time of the batch in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-09-01T11:01:01.001Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The material that the batch is associated with
       */
      material?: string;
      /**
       * The time when the batch was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-09-01T11:01:01.001Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The production date of the batch. It indicates when the material is manufactured. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-09-01"
       * Format: "date".
       */
      productionDate?: string;
      /**
       * An ISO region code that specifies the material's region of origin. It normally indicates in which region the material is manufactured.
       */
      regionOfOrigin?: string;
      /**
       * Indicates if the batch is in restricted-use or not
       */
      restricted?: boolean;
      /**
       * The shelf-life expiration or the best-before date of the batch. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-09-01"
       * Format: "date".
       */
      shelfLifeExpirationDate?: string;
      /**
       * The status of the batch in SAP Digital Manufacturing. There are 2 possible statuses for batch synchronization scenario: <br>1) VALIDATED: Indicates that the batch is created in SAP Digital Manufacturing, and successfully synchronized to the integrated ERP system. Batch with this status is ready for use; <br>2) INVALIDATED: Indicates that the batch is created in SAP Digital Manufacturing, however, the synchronization to the integrated ERP system failed. Batch with this status is not ready for use.
       */
      status?: 'CREATED' | 'INVALIDATED' | 'VALIDATED';
      /**
       * The account number of the vendor
       */
      supplier?: string;
    }
  | Record<string, any>;
