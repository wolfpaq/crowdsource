export interface ProjectSound {
  id: string;
  soundFile: string;
  imageFile?: string;
  fxName: string;
  trackTitle: string;
  micPerspective: string;
  microphone: string;
  recordingType: string;
  categoryId: string;
  location?: string;
  notes?: string;
  projectId: string;

  createdAt?: string;
  updatedAt?: string;
}
