/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Object represents the request parameters for creating a POD given its configuration.
 */
export type PodConfigRequest =
  | {
      /**
       * The POD configuration definition. Must be a valid json as a String. Required for create only.
       */
      configData: string;
      /**
       * The POD decription
       * Max Length: 40.
       */
      description?: string;
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
