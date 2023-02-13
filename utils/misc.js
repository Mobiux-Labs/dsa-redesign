export async function addTablePressFeatures() {
   const tables = document.querySelectorAll(".tablepress");
   if (tables.length > 0) {
      // Add tablepress script and css
      const tablepressScript = document.createElement("script");
      tablepressScript.src =
         "https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js";
      tablepressScript.async = true;
      document.body.appendChild(tablepressScript);
      const tablepressCss = document.createElement("link");
      tablepressCss.rel = "stylesheet";
      tablepressCss.href =
         "https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css";
      document.body.appendChild(tablepressCss);
   }
   [...tables].forEach(async (table) => {
      let tableOptions = await getTablePressOptionsForTable(table.id);
      //Add hover class to table which hover option is applied to
      if (tableOptions.row_hover) {
         table.classList.add("hover");
      }
      //Add striped rows to table to which striped option is applied to
      if (tableOptions.alternating_row_colors) {
         table.classList.add("stripe");
      }
      addExpandTableButton(table.id);
      new DataTable(`#${table.id}`, {
         paging: tableOptions.datatables_paginate,
         searching: tableOptions.datatables_filter,
         ordering: tableOptions.datatables_sort,
         info: tableOptions.datatables_info,
         lengthChange: tableOptions.datatables_lengthchange,
         scrollX: tableOptions.datatables_scrollx,
         pageLength: tableOptions.datatables_paginate_entries,
         stateSave: true,
         autoWidth: true,
      });
   });
}

const getTablePressOptionsForTable = async (tableId) => {
   tableId = tableId.split("-")[1];
   try {
      const res = await fetch(`/wp-json/tablepress/v1/table/${tableId}`);
      const data = await res.json();
      return data.options;
   } catch (e) {
      console.error(
         "Error searching for tablepress options for table: ",
         tableId
      );
      return {};
   }
};

const addExpandTableButton = (tableId) => {
   let tableWrapper =
      document.querySelector(`#${tableId}_wrapper`) ??
      document.querySelector(`#${tableId}`);
   let expandTableButton = document.createElement("button");
   expandTableButton.classList.add("expand-table-button");
   expandTableButton.innerHTML = "Expand Table";
   //Add a wrapper on table or dataTables_wrapper to show the expanded state with a close button
   let expandedTableWrapper = document.createElement("div");
   let closeButton = document.createElement("button");
   closeButton.classList.add("close-button");
   closeButton.innerText = "Close";
   closeButton.addEventListener("click", () => {
      expandedTableWrapper.classList.remove("expanded-table-wrapper");
      closeButton.style.display = "none";
   });
   expandTableButton.addEventListener("click", () => {
      expandedTableWrapper.classList.add("expanded-table-wrapper");
      closeButton.style.display = "block";
   });
   expandedTableWrapper.appendChild(closeButton);
   tableWrapper.parentElement.insertBefore(expandTableButton, tableWrapper);
   tableWrapper.parentNode.insertBefore(expandedTableWrapper, tableWrapper);
   expandedTableWrapper.appendChild(tableWrapper);
};
