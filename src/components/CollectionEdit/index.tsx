import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import {Dispatch, SetStateAction, useState} from "react";
import TextField from "@mui/material/TextField";
import MUIRichTextEditor from "mui-rte";
import { ThemeProvider } from '@mui/material/styles'
import { FileUploader } from "react-drag-drop-files";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {useTranslation} from "react-i18next";
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {theme} from "../../shared/constants/rte";
import style from "../CollectionCreate/CollectionCreate.module.scss"
import {CustomField, ICollection} from "../../shared/types/collections";
import {fileTypes, modalCloseSX, modalSX, sheetSX} from "../../shared/constants/modal";
import EditIcon from "@mui/icons-material/Edit";


export const ChangeCollectionModal = (props: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, collection: ICollection}) => {
  const [customFields, setCustomFields] = useState<CustomField[]>([])
  const {open, setOpen} = props
  const {t} = useTranslation()

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        sx={modalSX}
        onClose={() => setOpen(false)}
      >
        <Sheet
          variant="outlined"
          sx={sheetSX}
        >
          <ModalClose
            variant="outlined"
            sx={modalCloseSX}
          />
          <TextField
            sx={{width: 1}}
            placeholder={"Collection Title"}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="klkl"
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
            startIcon={<EditIcon />}
          >
            {t("ra.action.save")}
          </Button>
        </Sheet>

      </Modal>
    </>
  );
}
