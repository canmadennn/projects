/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiSingleResultRequest } from './inspection-api-single-result-request';
/**
 * This object represents a request to record single results for a characteristic.
 */
export type InspectionSingleResultRequest =
  | {
      /**
       * The list of single results to be recorded
       */
      inspectionApiSingleResultRequests?: InspectionApiSingleResultRequest[];
      /**
       * The inspection point id for the inspection characteristic
       */
      inspectionPoint?: string;
      /**
       * Indicates if the existing single results need to be overwritten. If set to 'true', then the existing single results will be overwritten. If set to 'false', the new results will be appended to the existing ones.
       */
      overwriteResult: boolean;
      /**
       * The plant for which the inspection results are recorded
       */
      plant: string;
      /**
       * The SFC for which the inspection results are recorded
       */
      sfc: string;
    }
  | Record<string, any>;
