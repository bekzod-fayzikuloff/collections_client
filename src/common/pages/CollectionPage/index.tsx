import style from "./CollectionPage.module.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState, useMemo, useContext} from "react";
import {api} from "../../../shared/api";
import {IItem} from "../../../shared/types/items";
import {NotFound} from "../NotFound";
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import {ICollection} from "../../../shared/types/collections";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NoImage from "../../../assets/no-photo.png"
import parse from "html-react-parser"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {AuthContext} from "../../../shared/contexts/AuthContext";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {IconButton} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useConfirm} from "material-ui-confirm";
import AddIcon from '@mui/icons-material/Add';
import {ChangeCollectionModal} from "../../../components/CollectionEdit";
import {ItemCreateModal} from "../../../components/ItemCreate";
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';

const VISIBLE_FIELDS = ['title', 'collection', "createdAt", "tags", "actions"];

type Tag = {id: number, title: string}

const TableTags = (props: {tags: Tag[], isCreator: boolean}) => {
  const [tags, setTags] = useState<Tag[]>(props.tags)
  const handleDelete = (id: number) => {
    setTags(prevState => prevState.filter(tag => tag.id !== id))
    api.deleteItemTag(id).then().catch()
  }
  return (
    <>
      {tags.map((tag: {id: number, title: string}) => (
        <Chip
          key={tag.id}
          size="sm"
          variant="outlined"
          color="info"
          endDecorator={props.isCreator && <ChipDelete onDelete={() => handleDelete(tag.id)}/>}
        >
          {tag.title}
        </Chip>
      ))}
    </>
  )
}

const ItemsTable = (props: { items: IItem[] }) => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const {user} = useContext(AuthContext)

  const itemsData: { columns: GridColDef[], rows: IItem[] } = {
    columns: [
      {
        field: "id", headerName: "Id", flex: 1
      },
      {
        field: "title", headerName: t("common.title"), flex: 1
      },
      {
        field: "collection",
        headerName: t("common.collection"),
        valueGetter: ({value}: { value: ICollection }) => {
          return value?.title
        },
        flex: 1
      },
      {
        field: "tags",
        headerName: t("common.tags"),
        flex: 1,
        renderCell: params => {
          const isCreator = params?.row?.collection?.userId === user?.userId
          const tags = params?.row?.tags || []
          return (<TableTags tags={tags} isCreator={isCreator}/>)
        }
      },
      {
        field: "createdAt", headerName: t("common.createdAt"), flex: 1
      },
      {
        field: "actions", headerName: t("common.view"), flex: 1, renderCell: (params) => {
          return (
            <IconButton onClick={() => navigate(`/items/${params.row.id}`)} sx={{ml: 1}}>
              <RemoveRedEyeIcon/>
            </IconButton>
          );
        }
      }
    ],

    rows: [...props.items]
  }
  const columns = useMemo(
    () => itemsData.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [itemsData.columns],
  );

  return (
    <Box sx={{width: 1}}>
      <DataGrid
        {...itemsData}
        columns={columns}
        slots={{toolbar: GridToolbar}}
        localeText={{
          columnsPanelTextFieldLabel: t("common.findColumn"),
          columnsPanelTextFieldPlaceholder: t("common.columnTitle"),
          columnsPanelHideAllButton: t("mui.dataGrid.hideAll"),
          columnsPanelShowAllButton: t("mui.dataGrid.showAll"),
          toolbarColumns: t("mui.dataGrid.columns"),

          toolbarFilters: t("mui.dataGrid.filters"),
          filterOperatorBefore: t("mui.dataGrid.filterBefore"),
          filterOperatorContains: t("mui.dataGrid.filterContain"),
          filterOperatorAfter: t("mui.dataGrid.filterAfter"),
          filterOperatorEquals: t("mui.dataGrid.filterEquals"),
          filterOperatorEndsWith: t("mui.dataGrid.filterEndsWith"),
          filterOperatorIsEmpty: t("mui.dataGrid.filterIsEmpty"),
          filterOperatorNot: t("mui.dataGrid.filterNot"),
          filterOperatorStartsWith: t("mui.dataGrid.filterStartWith"),
          filterOperatorIsNotEmpty: t("mui.dataGrid.filterIsNotEmpty"),
          filterOperatorIsAnyOf: t("mui.dataGrid.filterIsAnyOf"),
          filterPanelColumns: t("common.columnTitle"),
          filterPanelOperator: t("common.columnTitle"),
          filterPanelInputLabel: t("mui.dataGrid.filterInput"),
          filterPanelInputPlaceholder: t("mui.dataGrid.filterInput"),

          toolbarExport: t("mui.dataGrid.export"),
          toolbarExportPrint: t("mui.dataGrid.exportPrint"),
          toolbarExportCSV: t("mui.dataGrid.exportCSV"),

          toolbarDensity: t("mui.dataGrid.density"),
          toolbarDensityLabel: t("mui.dataGrid.densityLabel"),
          toolbarDensityCompact: t("mui.dataGrid.densityCompact"),
          toolbarDensityStandard: t("mui.dataGrid.densityStandard"),
          toolbarDensityComfortable: t("mui.dataGrid.densityComfortable"),

          toolbarQuickFilterPlaceholder: t("components.header.search")
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500},
          },
          pagination: {
            labelRowsPerPage: t("common.perPage")
          }
        }}
      />
    </Box>
  );
}

const CollectionContent = (props: { items: IItem[], collection: ICollection | null }) => {
  const {items, collection} = props
  const {user} = useContext(AuthContext)
  const {t} = useTranslation()
  const navigate = useNavigate()
  const confirm = useConfirm();
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [createOpen, setCreateOpen] = useState<boolean>(false)

  const handleDelete = () => {
    confirm({
      title: `${t("common.actions.delete.title")} ?`,
      description: `${t("common.actions.delete.collection")} ?`,
      confirmationText: t("ra.action.confirm"),
      cancellationText: t("ra.action.cancel")
    })
      .then(() => {
        api.deleteCollection(collection?.id as number).then(() => {
            navigate("/")
          }
        ).catch(() => {
            //
          }
        )
      })
  };


  return (
    <div className={style.root}>
      <div className={style.collection__detail}>
        <Card sx={{maxWidth: 1}}>
          <CardMedia
            sx={{height: 250}}
            image={collection?.image ? collection.image : NoImage}
            title="collection image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {collection?.title}
            </Typography>
            <Typography  component={'span'} color="text.secondary">
              {parse(collection?.description || "")}
            </Typography>
          </CardContent>

          {
            user?.userId === collection?.userId &&
              <>
                  <CardActions>
                      <Button onClick={handleDelete} variant="outlined" color={"error"} startIcon={<DeleteIcon/>}>
                        {t('ra.action.delete')}
                      </Button>
                      <Button onClick={() => setEditOpen(true)} variant="outlined" color={"info"} startIcon={<EditIcon/>}>
                        {t('ra.action.edit')}
                      </Button>
                      <Button onClick={() => setCreateOpen(true)} variant="outlined" color={"info"} startIcon={<AddIcon/>}>
                        {`${t('ra.action.create')} ${t("common.item")}`}
                      </Button>
                      <ChangeCollectionModal open={editOpen} setOpen={setEditOpen} collection={collection as ICollection} />
                      <ItemCreateModal open={createOpen} setOpen={setCreateOpen} />
                  </CardActions>
              </>
          }

        </Card>
      </div>
      <ItemsTable items={items}/>
    </div>
  )
}


export const CollectionPage = () => {
  const {id} = useParams()
  const [items, setItems] = useState<IItem[]>([])
  const [collection, setCollection] = useState<ICollection | null>(null)
  const [isNotFound, setIsNotFound] = useState(false)


  useEffect(() => {
    api.getCollectionItems(id as string).then(r => {
      setItems(r.data)
      api.getCollection(id as string).then(r => {
        setCollection(r.data)
      })
    }).catch(() => {
      setIsNotFound(true)
    })
  }, [id])

  return (
    <>
      {
        isNotFound ?
          <NotFound/>
          : <CollectionContent items={items} collection={collection}/>
      }
    </>
  )
}