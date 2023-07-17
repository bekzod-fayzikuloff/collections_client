import style from "./CollectionPage.module.scss"
import {useParams} from "react-router-dom";
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

const VISIBLE_FIELDS = ['title', 'collection', "createdAt", "tags"];

const ItemsTable = (props: {items: IItem[]}) => {
  const itemsData: {columns:  GridColDef[], rows: IItem[]} = {
    columns: [
      {
        field: "id", headerName: "Id", flex: 1
      },
      {
        field: "title", headerName: "Title", flex: 1
      },
      {
        field: "collection",
        headerName: "Collection",
        valueGetter: ({ value }: {value: ICollection}) => {
          return value?.title
        },
        flex: 1
      },
      {
        field: "tags",
        headerName: "tags",
        valueGetter: ({ value }: {value: any}) => {
          return "dsd"
        },
        flex: 1
      },
      {
        field: "createdAt", headerName: "Created At", flex: 1
      }
    ],

    rows: [...props.items]
  }
  const columns = useMemo(
    () => itemsData.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [itemsData.columns],
  );

  return (
    <Box sx={{ width: 1}}>
      <DataGrid
        {...itemsData}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
}

const CollectionContent = (props: {items: IItem[], collection: ICollection | null}) => {
  const {items, collection} = props
  const {user} = useContext(AuthContext)

  return (
    <div className={style.root}>
      <div className={style.collection__detail}>
        <Card sx={{ maxWidth: 1 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={NoImage}
            title="collection image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {collection?.title}
            </Typography>
            <Typography color="text.secondary">
              {parse(collection?.description || "")}
            </Typography>
          </CardContent>

          {
            user.userId === collection?.userId &&
              <CardActions>
                  <Button variant="outlined" color={"error"} startIcon={<DeleteIcon />}>
                      Delete
                  </Button>
                  <Button variant="outlined" color={"info"} startIcon={<EditIcon />}>
                      Edit
                  </Button>
              </CardActions>
          }

        </Card>
      </div>
      <ItemsTable items={items}/>
    </div>
  )
}


export const CollectionPage = () => {
  const { id } = useParams()
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
         <NotFound />
         : <CollectionContent items={items} collection={collection} />
      }
    </>
  )
}