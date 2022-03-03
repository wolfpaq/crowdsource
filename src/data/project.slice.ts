import { createSlice } from '@reduxjs/toolkit';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import projectService from '../services/project.service';
import { Project } from './models/project.model';

interface ProjectState {
  projects: Project[];
  loadingProjects: boolean;
  loadedProjects: boolean;
}

export const initialState: ProjectState = {
  projects: [],
  loadingProjects: false,
  loadedProjects: false,
};

export const slice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state: ProjectState, action: { payload: Project[] }) => {
      state.projects = action.payload;
    },
    setLoadingProjects: (state: ProjectState, action: { payload: boolean }) => {
      state.loadingProjects = action.payload;
    },
    setLoadedProjects: (state: ProjectState, action: { payload: boolean }) => {
      state.loadedProjects = action.payload;
    },
    addProject: (state: ProjectState, action: { payload: Project }) => {
      state.projects.push(action.payload);
    },
  },
});

export const { setProjects } = slice.actions;
export const { setLoadingProjects } = slice.actions;
export const { setLoadedProjects } = slice.actions;
export const { addProject } = slice.actions;

export const fetchProjectsAsync = () => (dispatch: Function) => {
  dispatch(setLoadingProjects(true));
  dispatch(setLoadedProjects(false));
  projectService.getProjects().then((projects) => {
    dispatch(setProjects(projects));
  });
};

export const createProjectAsync =
  (project: Project) => (dispatch: Function) => {
    projectService.addProject(project).then((project) => {
      dispatch(addProject(project));
    });
  };

export const selectProjects = (state: { project: ProjectState }) =>
  state.project.projects;
export const selectActiveProjects = (state: { project: ProjectState }) =>
  state.project.projects.filter((p) => p.active);
export const selectLoadingProjects = (state: { project: ProjectState }) =>
  state.project.loadingProjects;
export const selectLoadedProjects = (state: { project: ProjectState }) =>
  state.project.loadedProjects;

export default slice.reducer;
