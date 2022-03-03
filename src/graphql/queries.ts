/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        active
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSound = /* GraphQL */ `
  query GetSound($id: ID!) {
    getSound(id: $id) {
      id
      soundFile
      imageFile
      fxName
      trackTitle
      micPerspective
      microphone
      recordingType
      categoryId
      location
      notes
      projectId
      createdAt
      updatedAt
    }
  }
`;
export const listSounds = /* GraphQL */ `
  query ListSounds(
    $filter: ModelSoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        soundFile
        imageFile
        fxName
        trackTitle
        micPerspective
        microphone
        recordingType
        categoryId
        location
        notes
        projectId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
