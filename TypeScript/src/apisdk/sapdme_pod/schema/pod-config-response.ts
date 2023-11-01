/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Timestamp } from './timestamp';
/**
 * Object represents the response to a POD creation call request.
 */
export type PodConfigResponse =
  | {
      /**
       * The POD configuration definition. Must be a valid json as a String. Required for create only.
       */
      configData: string;
      createdDateTime?: Timestamp;
      /**
       * The POD decription
       * Max Length: 40.
       */
      description?: string;
      modifiedDateTime?: Timestamp;
      /**
       * The Plant for this POD.
       * Max Length: 6.
       * Min Length: 1.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-. ]+(?<! )$".
       */
      plant: string;
      /**
       * The POD identity.
       * Max Length: 40.
       * Min Length: 1.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-. ]+(?<! )$".
       */
      podId: string;
      /**
       * Indicates if a POD is reserved or not and can not be modified or removed.
       */
      reserved?: boolean;
      /**
       * The POD type.
       */
      type?:
        | 'MONITOR'
        | 'OEE'
        | 'OPERATION'
        | 'ORDER'
        | 'OTHER'
        | 'WORK_CENTER';
    }
  | Record<string, any>;
