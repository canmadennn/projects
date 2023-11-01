/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BatchCharacteristic } from './batch-characteristic';
/**
 * Representation of the 'GetBatchCharacteristicsApiResponse' schema.
 */
export type GetBatchCharacteristicsApiResponse =
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
       * Production date time in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       */
      productionDate?: string;
      /**
       * Shelf life expiration date time in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       */
      shelfLifeExpirationDate?: string;
      /**
       * Batch characteristics
       */
      batchCharacteristics?: BatchCharacteristic[];
    }
  | Record<string, any>;
