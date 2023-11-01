/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionApiSingleResultDTO } from './inspection-api-single-result-dto';
import type { InspectionPointDTO } from './inspection-point-dto';
/**
 * The object represents a response to reading inspection single history results for multiple SFCs.
 */
export type InspectionApiResultHistoryResponse =
  | {
      /**
       * The SFC number
       */
      sfc?: string;
      /**
       * This is a map object, The key is inspection characteristic number, value is the list of single results of this characteristic.
       */
      inspectionCharacteristicResults?: Record<
        string,
        InspectionApiSingleResultDTO[]
      >;
      inspectionPoint?: InspectionPointDTO;
      /**
       * Indicates if the single results have been synchronized back to ERP side. If set to 'true', then the single results have been synchronized back to ERP.
       */
      isResultsConfirmed?: boolean;
    }
  | Record<string, any>;
