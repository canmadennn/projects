/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'AutoStagingResponse' schema.
 */
export type AutoStagingResponse =
  | {
      /**
       * The plant where the staging request is performed
       */
      plant?: string;
      /**
       * The staging request number which uniquely identifies a staging request. You can check it in the Manage Staging 2.0 app.
       */
      stagingRequestNumber?: string;
      /**
       * The warehouse number from which the staged materials are delivered
       */
      wareHouseNumber?: string;
    }
  | Record<string, any>;
