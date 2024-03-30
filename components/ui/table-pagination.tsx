import { PaginationState, Table } from "@tanstack/react-table";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Props<T extends object> {
  table: Table<T>;
  pageIndex: number;
  pageSize: number;
  pagination: PaginationState;
  debug?: boolean;
}

export const PaginationReactTable = <T extends object>({
  table,
  pageIndex,
  pageSize,
  pagination,
  debug,
}: Props<T>) => {
  return (
    <div className="flex flex-row justify-between ml-5 mr-5 mt-4 pb-4">
      <div>
        <div className="flex flex-row items-center">
          <span className="mr-1">Show</span>
          <div>
            <select
              className="form-control form-control-sm"
              value={pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 25, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <span className="ml-1">entries.</span>
        </div>
        <div className="flex items-center justify-center mt-1">
          <span className="ml-1">Out of {table.getRowModel().rows.length}</span>
        </div>
      </div>

      <pre>{debug && JSON.stringify(pagination, null, 2)}</pre>

      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <button
            className="page-link rounded mr-2"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </button>

          <button
            className="page-link rounded"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </button>
        </div>
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};
