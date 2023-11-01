/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  StartSfcRequest,
  SerializeSfcRequest,
  MergeSfcRequest,
  SplitSfcRequest,
  ScrapSfcRequest,
  RelabelSfcRequest,
  SetSfcQuantityRequests,
  CompleteSfcRequest,
  SignoffSfcRequest,
  SignoffSfcResponse,
  PlaceHoldRequest,
  ReleaseHoldRequest
} from './schema';
/**
 * Representation of the 'SFCProcessingApi'.
 * This API is part of the 'sapdme_sfc' service.
 */
export const SFCProcessingApi = {
  /**
   * Moves the SFC quantity from an in queue status to an in work status at the operation activity. Multiple SFCs are started as a single atomic unit, meaning failure to start one SFC fails the start for all SFCs.
   * @param body - The start SFC request object.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsStart: (
    body: StartSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/start', {
      body,
      queryParameters
    }),
  /**
   * Creates new SFCs with the quantity 1 from the given SFC. Decreases the original SFC quantity by the quantity of the created SFCs. If the SFC quantity becomes 0, then the SFC becomes invalid.
   * @param body - The request to serialize an SFC. If "newSfcs" and "quantity" parameters are empty, the number of new SFCs is equal to the given SFC quantity.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsSerialize: (
    body: SerializeSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/serialize', {
      body,
      queryParameters
    }),
  /**
   * Merges given SFCs into the parent SFC. Quantity of the parent SFC is increased by the total quantities of merged SFCs. Merged SFCs become invalid.
   * @param body - The request to merge SFCs.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsMerge: (
    body: MergeSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/merge', {
      body,
      queryParameters
    }),
  /**
   * Creates new SFCs with the quantity from the original SFC. Decreases the original SFC quantity by the quantity of the new SFCs. The original SFC quantity remains the same and the total quantity of the new SFCs can be greater than the original one in case of overproduction. The remaining quantity of the original SFC must be greater than 0.
   * @param body - The request to split an SFC.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsSplit: (
    body: SplitSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/split', {
      body,
      queryParameters
    }),
  /**
   * You scrap an SFC when the material is no longer viable for production. If the SFC is an assembly, then all assembled child SFCs are also scrapped. The status of each scrapped SFC is set to Scrapped.
   * @param body - The scrap SFC request object.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsScrap: (
    body: ScrapSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/scrap', {
      body,
      queryParameters
    }),
  /**
   * Creates a new SFC with the given name and the same quantity as the given SFC. The original SFC becomes invalid.
   * @param body - The request to relabel an SFC.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsRelabel: (
    body: RelabelSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/relabel', {
      body,
      queryParameters
    }),
  /**
   * Sets the new quantities of the SFCs.
   * @param body - The request to set the SFC quantity.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsSetQuantity: (body: SetSfcQuantityRequests) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/setQuantity', {
      body
    }),
  /**
   * The SFCs are moved to the next operation activity, or set to the Done status if they have completed the last operation activity on the routing.
   * @param body - The complete SFC request object.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsComplete: (
    body: CompleteSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/complete', {
      body,
      queryParameters
    }),
  /**
   * The SFCs in Active state are moved back in queue at the same operation activity
   * @param body - The Signoff SFC request object.
   * @param queryParameters - Object containing the following keys: async.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsSignoff: (
    body: SignoffSfcRequest,
    queryParameters?: { async?: boolean }
  ) =>
    new OpenApiRequestBuilder<SignoffSfcResponse>('post', '/sfcs/signoff', {
      body,
      queryParameters
    }),
  /**
   *  Initiate a hold request to temporarily pause the activity of an SFC in a given plant.
   * @param body - The place hold on SFCs request object.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsHold: (body: PlaceHoldRequest) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/hold', {
      body
    }),
  /**
   *  Initiate a release request to remove the hold status of an SFC in a given plant.
   * @param body - The place hold on SFCs request object.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcsRelease: (body: ReleaseHoldRequest) =>
    new OpenApiRequestBuilder<any>('post', '/sfcs/release', {
      body
    })
};
