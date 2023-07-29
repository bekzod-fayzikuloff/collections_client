import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { Dispatch, SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import style from '../CollectionCreate/CollectionCreate.module.scss';
import { CustomField } from '../../shared/types/collections';
import { modalCloseSX, modalSX, sheetSX } from '../../shared/constants/modal';

export const ItemCreateModal = (props: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { open, setOpen } = props;
  const { t } = useTranslation();
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={modalSX}
      >
        <Sheet variant="outlined" sx={sheetSX}>
          <ModalClose variant="outlined" sx={modalCloseSX} />
          <TextField
            placeholder={'Collection Title'}
            sx={{ width: 1 }}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="klkl"
            variant="filled"
            size="small"
          />
          <div className={style.cf__root}>
            {customFields.map((cf, id) => {
              return (
                <div className={style.custom__field} key={id}>
                  <TextField
                    hiddenLabel
                    placeholder={'Custom Field Title'}
                    id="filled-hidden-label-small"
                    value={cf.title}
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    hiddenLabel
                    placeholder={'Custom Field Type'}
                    id="filled-hidden-label-small"
                    defaultValue=""
                    variant="filled"
                    size="small"
                  />
                  <IconButton>
                    <HighlightOffIcon />
                  </IconButton>
                </div>
              );
            })}
          </div>
          <IconButton
            onClick={() => {
              setCustomFields((prevState) => {
                return [...prevState, { title: '', type: '' }];
              });
            }}
          >
            <AddIcon />
          </IconButton>{' '}
          <br />
          <Button className={style.add__btn} variant="contained" color={'success'} startIcon={<AddIcon />}>
            {t('ra.action.add')}
          </Button>
        </Sheet>
      </Modal>
    </>
  );
};
