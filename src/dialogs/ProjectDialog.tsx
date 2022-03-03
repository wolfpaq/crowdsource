import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Project } from '../data/models/project.model';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ProjectDialogParams {
  open: boolean;
  close: (project: Project | null) => void;
}

export default function ProjectDialog({ open, close }: ProjectDialogParams) {
  const { t } = useTranslation('common');

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [active, setActive] = React.useState(true);

  const save = () => {
    const project: Project = {
      // id: '123',
      name,
      description,
      active,
      // sounds: [],
    };
    close(project);
  };

  const cancel = () => {
    close(null);
  };

  return (
    <Dialog open={open} onClose={cancel}>
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <TextField
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={active}
              onChange={(evt) => setActive(evt.target.checked)}
            />
          }
          label="Active"
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={cancel}>
          {t('common.cancel')}
        </Button>
        <Button color="primary" onClick={save}>
          {t('common.save')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
