import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import {Dispatch, SetStateAction, useState} from "react";
import TextField from "@mui/material/TextField";
import MUIRichTextEditor from "mui-rte";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FileUploader } from "react-drag-drop-files";
import style from "./CollectionCreate.module.scss"
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {useTranslation} from "react-i18next";
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({})
const fileTypes = ["JPG", "PNG", "GIF"];
type CustomField = {title: string, type: string}

export const AddCollectionModal = (props: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
  const {t} = useTranslation()
  const [customFields, setCustomFields] = useState<CustomField[]>([])
  const {open, setOpen} = props
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minHeight:500,
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/3 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <TextField
            placeholder={"Collection Title"}
            sx={{width: 1}}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            variant="filled"
            size="small"
          />
          <div className={style.drag__drop}>
            <FileUploader name="file" types={fileTypes} />
          </div>
          <ThemeProvider theme={theme}>
            <MUIRichTextEditor
              inlineToolbar={true}
              defaultValue=""
              label="Start typing..."
            />
          </ThemeProvider>

          <Select
            id="demo-select-small"
            defaultValue={"bk"}
            size="small"
          >
            <MenuItem value={'bk'}>Books</MenuItem>
            <MenuItem value={'ot'}>Other</MenuItem>
          </Select>

          <div className={style.cf__root}>
          {
            customFields.map((cf, id) => {
              return (
                <div className={style.custom__field} key={id}>
                  <TextField
                    hiddenLabel
                    placeholder={"Custom Field Title"}
                    id="filled-hidden-label-small"
                    value={cf.title}
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    hiddenLabel
                    placeholder={"Custom Field Type"}
                    id="filled-hidden-label-small"
                    defaultValue=""
                    variant="filled"
                    size="small"
                  />
                  <IconButton>
                    <HighlightOffIcon />
                  </IconButton>
                </div>
              )
            })
          }
          </div>

          <IconButton onClick={() => {
            setCustomFields(prevState => {
              return [...prevState, {title: "", type: ""}]
            })
          }}>
            <AddIcon />
          </IconButton> <br/>

          <Button
            className={style.add__btn}
            variant="contained"
            color={"success"}
            startIcon={<AddIcon />}
          >
            {t("ra.action.add")}
          </Button>
        </Sheet>

      </Modal>
    </>
  );
}
