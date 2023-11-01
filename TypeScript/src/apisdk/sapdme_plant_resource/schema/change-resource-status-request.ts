/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to change the resource status.
 */
export type ChangeResourceStatusRequest =
  | {
      /**
       * The comment provided for the resource status change.
       * Max Length: 2000.
       */
      comments?: string;
      /**
       * The timestamp value for the resource status change.
       * Format: "date-time".
       */
      dateTime?: string;
      /**
       * Indicates whether the status will be changed immediately.
       */
      immediate?: boolean;
      /**
       * The machine code with an assigned resource reason code that will be used for the resource status change.
       * Max Length: 40.
       * Min Length: 1.
       */
      machineCode?: string;
      /**
       * The plant containing the resource.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * Indicates whether the status was changed manually or automatically.
       */
      recordType?: 'MANUAL' | 'AUTOMATIC';
      /**
       * The resource whose status needs to be changed.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
      /**
       * The new resource status
       */
      status:
        | 'UNKNOWN'
        | 'PRODUCTIVE'
        | 'SCHEDULED_DOWN'
        | 'UNSCHEDULED_DOWN'
        | 'ENABLED'
        | 'DISABLED';
      /**
       * The user who changes the resource status.
       * Max Length: 80.
       * Min Length: 1.
       */
      user: string;
    }
  | Record<string, any>;
