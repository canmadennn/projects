/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Document, DocumentPrintRequest } from './schema';
/**
 * Representation of the 'DocumentApi'.
 * This API is part of the 'sapfnd_document' service.
 */
export const DocumentApi = {
  /**
   * Retrieves a list of documents by name.
   * @param queryParameters - Object containing the following keys: document.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getDocumentsUsingGet1: (queryParameters: { document: string }) =>
    new OpenApiRequestBuilder<Document[]>('get', '/documents', {
      queryParameters
    }),
  /**
   * Prints a given document on a given printer. Data for the document is retrieved from an SFC or order provided in parameters.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  printDocumentUsingPost1: (body: DocumentPrintRequest) =>
    new OpenApiRequestBuilder<any>('post', '/print', {
      body
    })
};
