/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcDoneStatus } from './sfc-done-status';
/**
 * The SFC Complete response.
 */
export type CompleteSfcResponse =
  | {
      /**
       * A boolean value that indicates if the Complete is successful.
       */
      success?: boolean;
      /**
       * The list of completed SFCs.
       * Max Items: 500.
       */
      sfcs?: string[];
      /**
       * Operations where SFCs are queued at
       * Max Items: 500.
       */
      queuedOperations?: string[];
      /**
       * A boolean value that indicates if the SFC is scrapped
       */
      scrapped?: boolean;
      /**
       * List of open buyoffs
       * Max Items: 500.
       */
      buyoffs?: string[];
      /**
       * List of SFCs and their done status.
       * Max Items: 500.
       */
      doneStatuses?: SfcDoneStatus[];
    }
  | Record<string, any>;
