/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BatchCharacteristic } from './batch-characteristic';
/**
 * Representation of the 'GetBatchesResponse' schema.
 */
export type GetBatchesResponse =
  | {
      /**
       * The batch characteristics
       */
      batchCharacteristics?: BatchCharacteristic[];
      /**
       * The batch number
       */
      batchNumber?: string;
      /**
       * The material of the batch
       */
      material?: string;
      /**
       * The status of the batch. There are 3 possible statuses: 1) 'CREATED': Indicates that the batch is just created in SAP Digital Manufacturing, but synchronization to the integrated ERP system is not yet started; 2) 'VALIDATED': Indicates that the batch is both created in SAP Digital Manufacturing, and synchronized to the integrated ERP system; 3) 'INVALIDATED': Indicates that the batch is created in SAP Digital Manufacturing, and sychronization to the integrated ERP system had been triggered, but failed.
       */
      status?: 'CREATED' | 'VALIDATED' | 'INVALIDATED';
      /**
       * The production date of the batch in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       * Format: "date-time".
       */
      productionDate?: string;
      /**
       * The shelf life expiration date of the batch in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       * Format: "date-time".
       */
      shelfLifeExpirationDate?: string;
      /**
       * The time when the batch was most recently changed in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       * @example "2022-08-31T23:53:34.123Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The availability date of the batch. It indicates when the batch becomes available for use. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-01-31"
       * Format: "date".
       */
      batchAvailabilityDate?: string;
      /**
       * Indicates if the batch is in restricted-use. The default value is 'false'.
       */
      restricted?: boolean;
      /**
       * The account number of the vendor
       */
      supplier?: string;
      /**
       * The batch number provided by the vendor
       */
      batchBySupplier?: string;
      /**
       * An ISO country code that specifies the material's country of origin. It normally indicates in which country the material is manufactured.
       */
      countryOfOrigin?: string;
      /**
       * An ISO region code that specifies the material's region of origin. It normally indicates in which region the material is manufactured.
       */
      regionOfOrigin?: string;
    }
  | Record<string, any>;
