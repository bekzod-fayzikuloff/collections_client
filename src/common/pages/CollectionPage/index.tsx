import style from "./CollectionPage.module.scss"
import {useParams} from "react-router-dom";
import {useEffect, useState, useMemo} from "react";
import {api} from "../../../shared/api";
import {IItem} from "../../../shared/types/items";
import {NotFound} from "../NotFound";
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import {ICollection} from "../../../shared/types/collections";

const VISIBLE_FIELDS = ['title', 'collection', "createdAt", "tags"];

const ItemsTable = (props: {items: IItem[]}) => {
  console.log(props.items)
  const itemsData: {columns:  GridColDef[], rows: IItem[]} = {
    columns: [
      {
        field: "id", headerName: "Id",
      },
      {
        field: "title", headerName: "Title",
      },
      {
        field: "collection",
        headerName: "Collection",
        valueGetter: ({ value }: {value: ICollection}) => {
          return value?.title
        },
      },
      {
        field: "tags",
        headerName: "tags",
        valueGetter: ({ value }: {value: any}) => {
          console.log(value)
          return "dsd"
        },
      },
      {
        field: "createdAt", headerName: "Created At"
      }
    ],

    rows: [...props.items]
  }
  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = useMemo(
    () => itemsData.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [itemsData.columns],
  );

  return (
    <Box sx={{ width: 1}}>
      <DataGrid
        {...itemsData}

        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
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

const CollectionContent = (props: {items: IItem[]}) => {
  const {items} = props
  return (
    <div className={style.root}>
      <ItemsTable items={items}/>
    </div>
  )
}


export const CollectionPage = () => {
  const { id } = useParams()
  const [items, setItems] = useState<IItem[]>([])
  const [isNotFound, setIsNotFound] = useState(false)


  useEffect(() => {
    api.getCollectionItems(id as string).then(r => {
      setItems(r.data)
    }).catch(() => {
      setIsNotFound(true)
    })
  }, [id])

  return (
    <>
      {
       isNotFound ?
         <NotFound />
         : <CollectionContent items={items} />
      }
    </>
  )
}