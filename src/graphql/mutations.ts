/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const createSound = /* GraphQL */ `
  mutation CreateSound(
    $input: CreateSoundInput!
    $condition: ModelSoundConditionInput
  ) {
    createSound(input: $input, condition: $condition) {
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
export const updateSound = /* GraphQL */ `
  mutation UpdateSound(
    $input: UpdateSoundInput!
    $condition: ModelSoundConditionInput
  ) {
    updateSound(input: $input, condition: $condition) {
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
export const deleteSound = /* GraphQL */ `
  mutation DeleteSound(
    $input: DeleteSoundInput!
    $condition: ModelSoundConditionInput
  ) {
    deleteSound(input: $input, condition: $condition) {
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
