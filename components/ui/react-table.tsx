import { Dispatch, MouseEvent, SetStateAction, useMemo, useState } from "react";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowSelectionState,
  PaginationState,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  Row as TableRow,
} from "@tanstack/react-table";

import { ArrowDown, ArrowUp } from "lucide-react";

import { Common } from "@/types";

import { IndeterminateCheckbox } from "./table-checkbox";
import { PaginationReactTable } from "./table-pagination";

interface Props<T extends Common> {
  data: T[];
  columns: ColumnDef<T>[];
  rowSelections?: RowSelectionState | undefined;
  onRowSelectionChangeHandler?: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  setSelectedIds?: Dispatch<SetStateAction<number[]>>;
  selectedIds?: number[];
  singleSelect?: boolean;
}

export const ReactTable = <T extends { id: number }>({
  data,
  columns,
  rowSelections,
  onRowSelectionChangeHandler,
  selectedIds,
  setSelectedIds,
  singleSelect,
}: Props<T>) => {
  const memoizedData: Array<T> = useMemo(() => data, [data]);

  const memoizedRowSelections: RowSelectionState | undefined = useMemo(
    () => rowSelections || {},
    [rowSelections]
  );

  const allRecordIds = useMemo(() => {
    return data.map((record) => record.id);
  }, [data]);

  const handleSelectAllRows = (allSelectedBoolean: boolean) => {
    if (allSelectedBoolean) {
      setSelectedIds && setSelectedIds(allRecordIds);
    } else {
      setSelectedIds && setSelectedIds([]);
    }
  };

  const onSelectedRow = (row: TableRow<T>) => {
    if (selectedIds && setSelectedIds) {
      if (singleSelect) {
        if (!row.getIsSelected()) {
          setSelectedIds([row.original.id]);
        } else {
          setSelectedIds([]);
        }
      } else {
        let newIdSelected = [...selectedIds];

        if (!row.getIsSelected()) {
          newIdSelected.push(row.original.id);
        } else {
          newIdSelected = selectedIds.filter((id) => id !== row.original.id);
        }
        setSelectedIds(newIdSelected);
      }
    }
  };

  const createColumns = (columns: ColumnDef<T>[]): Array<ColumnDef<T>> => {
    const idColumn: ColumnDef<T> = {
      id: "select",
      header: ({ table }) =>
        !singleSelect &&
        setSelectedIds && (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
              onClick: () => {
                handleSelectAllRows(!table.getIsAllRowsSelected());
              },
            }}
          />
        ),
      cell: ({ row, table }) => (
        <div className="px-1">
          {setSelectedIds && (
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                indeterminate: row.getIsSomeSelected(),
                onChange: () => {
                  if (singleSelect) {
                    table.toggleAllRowsSelected(false);
                    row.toggleSelected();
                  } else {
                    row.toggleSelected();
                  }
                },
                onClick: (e: MouseEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  onSelectedRow && onSelectedRow(row);
                },
              }}
            />
          )}
        </div>
      ),
    };
    const tableColumns: Array<ColumnDef<T>> = [];
    tableColumns.push(idColumn);
    columns.forEach((col) => tableColumns.push(col));
    return tableColumns;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedColumns: Array<ColumnDef<T>> = useMemo(
    () => createColumns(columns),
    [columns]
  );

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    state: {
      rowSelection: memoizedRowSelections,
      pagination,
      sorting,
    },
    data: memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: onRowSelectionChangeHandler,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: false,
  });

  return (
    <>
      <table className="react-table">
        <thead className="react-table-thead">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="react-table-tr">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="react-table-th text-sm md:text-medium"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ArrowUp />,
                          desc: <ArrowDown />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="react-table-tbody">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="react-table-tr">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="react-table-td h-12 text-xs md:text-sm border-b"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <PaginationReactTable
        table={table}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pagination={pagination}
      />
    </>
  );
};
