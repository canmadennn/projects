/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Status of time record approval
 */
export type TimeRecordApprovalStatus =
  | {
      /**
       * The ID of the time record
       */
      id?: string;
      /**
       * The approval status of the time record
       */
      status?: string;
      /**
       * The approval status code of the time record
       */
      statusCode?: string;
      /**
       * The internal error code
       */
      errorCode?: string;
      /**
       * The error message and additional information, if any
       */
      error?: string;
    }
  | Record<string, any>;
