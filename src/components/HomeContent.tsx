import React from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import * as projectSlice from '../data/project.slice';
import { useSelector } from 'react-redux';

const PREFIX = 'Home';

const classes = {
  container: `${PREFIX}-container`,
  toolbar: `${PREFIX}-toolbar`,
  grid: `${PREFIX}-grid`,
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
  },
}));

export default function HomeContent() {
  const { t } = useTranslation('common');

  const [project, setProject] = React.useState<string>('');

  const onChangeProject = (evt: any) => {
    setProject(evt.target.value);
  };

  const projects = useSelector(projectSlice.selectActiveProjects);
  React.useEffect(() => {
    if (projects && projects.length) {
      setProject(projects[projects.length - 1].id || '');
    }
  }, [projects]);

  const columns = [
    { field: 'id', headerName: 'id', hide: true },
    { field: 'filename', headerName: 'File', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'fxname', headerName: 'FX Name', flex: 1 },
    { field: 'trackTitle', headerName: 'Track Title', flex: 1 },
    { field: 'micPerspective', headerName: 'Mic Perspective', flex: 1 },
    { field: 'microphone', headerName: 'Microphone', flex: 1 },
    { field: 'recType', headerName: 'Rec Type', flex: 1 },
    { field: 'catId', headerName: 'Cat ID', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },
    { field: 'notes', headerName: 'Notes', flex: 1 },
  ];

  const items: any[] = [];

  return (
    <StyledBox className={classes.container}>
      <Box className={classes.toolbar}>
        <FormControl>
          <InputLabel>{t('home.project')}</InputLabel>
          <Select value={project} onChange={onChangeProject} label="Project">
            {projects.map((p) => (
              <MenuItem value={p.id} key={p.id}>
                {p.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{t('home.projectHelpText')}</FormHelperText>
        </FormControl>
      </Box>
      <DataGrid
        getRowId={(row) => row.ID}
        rows={items}
        columns={columns}
        autoHeight={true}
        className={classes.grid}
        checkboxSelection={false}
        disableColumnMenu={true}
        disableColumnSelector={true}
        hideFooter={true}
      />
    </StyledBox>
  );
}
