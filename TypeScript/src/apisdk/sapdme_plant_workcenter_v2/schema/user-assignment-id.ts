/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The user unique data.
 */
export type UserAssignmentId =
  | {
      /**
       * The plant where a user is created.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The user identifier.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      userId: string;
    }
  | Record<string, any>;
