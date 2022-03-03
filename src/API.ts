/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description: string,
  active: boolean,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  description: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateSoundInput = {
  id?: string | null,
  soundFile: string,
  imageFile?: string | null,
  fxName: string,
  trackTitle: string,
  micPerspective: string,
  microphone: string,
  recordingType: string,
  categoryId: string,
  location?: string | null,
  notes?: string | null,
  projectId: string,
};

export type ModelSoundConditionInput = {
  soundFile?: ModelStringInput | null,
  imageFile?: ModelStringInput | null,
  fxName?: ModelStringInput | null,
  trackTitle?: ModelStringInput | null,
  micPerspective?: ModelStringInput | null,
  microphone?: ModelStringInput | null,
  recordingType?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  location?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelSoundConditionInput | null > | null,
  or?: Array< ModelSoundConditionInput | null > | null,
  not?: ModelSoundConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Sound = {
  __typename: "Sound",
  id: string,
  soundFile: string,
  imageFile?: string | null,
  fxName: string,
  trackTitle: string,
  micPerspective: string,
  microphone: string,
  recordingType: string,
  categoryId: string,
  location?: string | null,
  notes?: string | null,
  projectId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSoundInput = {
  id: string,
  soundFile?: string | null,
  imageFile?: string | null,
  fxName?: string | null,
  trackTitle?: string | null,
  micPerspective?: string | null,
  microphone?: string | null,
  recordingType?: string | null,
  categoryId?: string | null,
  location?: string | null,
  notes?: string | null,
  projectId?: string | null,
};

export type DeleteSoundInput = {
  id: string,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelSoundFilterInput = {
  id?: ModelIDInput | null,
  soundFile?: ModelStringInput | null,
  imageFile?: ModelStringInput | null,
  fxName?: ModelStringInput | null,
  trackTitle?: ModelStringInput | null,
  micPerspective?: ModelStringInput | null,
  microphone?: ModelStringInput | null,
  recordingType?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  location?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelSoundFilterInput | null > | null,
  or?: Array< ModelSoundFilterInput | null > | null,
  not?: ModelSoundFilterInput | null,
};

export type ModelSoundConnection = {
  __typename: "ModelSoundConnection",
  items:  Array<Sound | null >,
  nextToken?: string | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSoundMutationVariables = {
  input: CreateSoundInput,
  condition?: ModelSoundConditionInput | null,
};

export type CreateSoundMutation = {
  createSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSoundMutationVariables = {
  input: UpdateSoundInput,
  condition?: ModelSoundConditionInput | null,
};

export type UpdateSoundMutation = {
  updateSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSoundMutationVariables = {
  input: DeleteSoundInput,
  condition?: ModelSoundConditionInput | null,
};

export type DeleteSoundMutation = {
  deleteSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoundQueryVariables = {
  id: string,
};

export type GetSoundQuery = {
  getSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSoundsQueryVariables = {
  filter?: ModelSoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSoundsQuery = {
  listSounds?:  {
    __typename: "ModelSoundConnection",
    items:  Array< {
      __typename: "Sound",
      id: string,
      soundFile: string,
      imageFile?: string | null,
      fxName: string,
      trackTitle: string,
      micPerspective: string,
      microphone: string,
      recordingType: string,
      categoryId: string,
      location?: string | null,
      notes?: string | null,
      projectId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSoundSubscription = {
  onCreateSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSoundSubscription = {
  onUpdateSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSoundSubscription = {
  onDeleteSound?:  {
    __typename: "Sound",
    id: string,
    soundFile: string,
    imageFile?: string | null,
    fxName: string,
    trackTitle: string,
    micPerspective: string,
    microphone: string,
    recordingType: string,
    categoryId: string,
    location?: string | null,
    notes?: string | null,
    projectId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
