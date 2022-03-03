import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ProjectDialog from '../dialogs/ProjectDialog';
import { Project } from '../data/models/project.model';
import * as projectSlice from '../data/project.slice';

const PREFIX = 'Admin';

const classes = {
  container: `${PREFIX}-container`,
  toolbar: `${PREFIX}-toolbar`,
  grid: `${PREFIX}-grid`,
  download: `${PREFIX}-download`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
  },

  [`& .${classes.toolbar}`]: {
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.grid}`]: {
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus':
      {
        outline: 'none',
      },
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.download}`]: {
    marginRight: theme.spacing(1),
  },
}));

export default function HomeContent() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  // const [project, setProject] = React.useState(1);

  // const onChangeProject = (evt: any) => {
  //   setProject(evt.target.value);
  // };
  const projects = useSelector(projectSlice.selectProjects);

  const download = () => {
    console.log('download');
  };

  const close = () => {
    console.log('close');
  };

  const addProject = () => {
    console.log('addProject');
    setOpen(true);
  };

  const renderActions = (params: GridCellParams) => {
    return (
      <>
        <Button
          color="primary"
          variant="contained"
          className={classes.download}
          onClick={download}>
          {t('admin.download')}
        </Button>
        {params.row.active && (
          <Button color="secondary" variant="contained" onClick={close}>
            {t('admin.close')}
          </Button>
        )}
      </>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: t('admin.name'), flex: 1 },
    { field: 'description', headerName: t('admin.description'), flex: 3 },
    {
      field: 'actions',
      headerName: '',
      width: 220,
      renderCell: renderActions,
    },
  ];

  const closeDialog = (project: Project | null) => {
    console.log('closeDialog', project);
    setOpen(false);
    if (project) {
      dispatch(projectSlice.createProjectAsync(project));
    }
  };

  return (
    <StyledBox className={classes.container}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={projects}
        columns={columns}
        autoHeight={true}
        className={classes.grid}
        checkboxSelection={false}
        disableColumnMenu={true}
        disableColumnSelector={true}
        hideFooter={true}
      />
      <Box>
        <Button color="primary" variant="contained" onClick={addProject}>
          {t('admin.add')}
        </Button>
      </Box>
      <ProjectDialog open={open} close={closeDialog} />
    </StyledBox>
  );
}
