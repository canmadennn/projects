/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a response to create an inspection point.
 */
export type InspectionPointResponse =
  | {
      /**
       * The inspection point field combination user field for numeric type of values that's up to 10 digits
       */
      inspSubsetLongNumericKey?: string;
      /**
       * The inspection point field combination user field for numeric type of values that's up to 3 digits
       */
      inspSubsetShortNumericKey?: string;
      /**
       * The usage decision valuation code used for valuating inspection points
       */
      inspSubsetUsageDcsnValuation?: string;
      /**
       * The inspection point field combination user field for date type of values
       */
      inspectionSubsetDate?: string;
      /**
       * The inspection point sample number
       */
      inspectionSubsetInternalId?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 18 characters
       */
      inspectionSubsetLongCharKey?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 10 characters
       */
      inspectionSubsetShortCharKey?: string;
      /**
       * The inspection point field combination user field for time type of values
       */
      inspectionSubsetTime?: string;
      /**
       * The SFC reference that identifies the SFC for which the inspection point is created
       */
      sfcRef?: string;
    }
  | Record<string, any>;
