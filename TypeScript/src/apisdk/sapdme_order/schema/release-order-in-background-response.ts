/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CreatedSfcDTO } from './created-sfc-dto';
/**
 * The object represents a release order in background response.
 */
export type ReleaseOrderInBackgroundResponse =
  | {
      /**
       * The transaction id
       */
      transactionId?: string;
      /**
       * The list of SFCs that to be created
       */
      sfcs?: CreatedSfcDTO[];
    }
  | Record<string, any>;
