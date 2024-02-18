using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using CourseWork_1._0.Classes;

namespace CourseWork_1._0
{
    public partial class MainWindow : Form
    {
        public List<Product> productStorage;
        public List<SpoilingProducts> spoilingProductsStorage;
        public List<NonPerishableProducts> nonPerishableProductsStorage;

        private DataManipulator _IOFile;
        private double _total;
        public MainWindow()
        {
            productStorage = new List<Product>();
            spoilingProductsStorage = new List<SpoilingProducts>();
            nonPerishableProductsStorage = new List<NonPerishableProducts>();
            InitializeComponent();
        }

        private void AddButtonClick(object sender, EventArgs e)
        {
            int pageNumber = -1;
            if (tabsTable.TabPages[0].Visible)
            {
                pageNumber = 0;
            }
            else if (tabsTable.TabPages[1].Visible)
            {
                pageNumber = 1;
            }
            else if (tabsTable.TabPages[2].Visible)
            {
                pageNumber = 2;
            }
            InfoEnterWindow addNewInfoInTable = new InfoEnterWindow(this, pageNumber);
            addNewInfoInTable.Show();
        }

        public void AddNewRow()
        {
            if (tabsTable.TabPages[0].Visible)
            {
                CreateNewRow(productsTable, 1);
            }
            else if (tabsTable.TabPages[1].Visible)
            {
                CreateNewRow(spoilingProductsTable, 2);
            }
            else if (tabsTable.TabPages[2].Visible)
            {
                CreateNewRow(nonPerishableProductsTable, 3);
            }
        }

        private void SaveTotal()
        {
            using (StreamWriter saveTotalFile = File.CreateText(InfoDb.TotalFilePath))
            {
                saveTotalFile.Write(_total);
            }
        }

        private void ReadTotal()
        {
            using (StreamReader readTotalFile = File.OpenText(InfoDb.TotalFilePath))
            {
                _total = double.Parse(readTotalFile.ReadToEnd());
                if (_total == null)
                {
                    MessageBox.Show("Error! Invalid total sum!");
                    _total = 0;
                }
            }
        }
        
        public void CreateNewRow(DataGridView page, int classIndex)
        {
            DataGridViewRow newRow;
            newRow = (DataGridViewRow)page.Rows[0].Clone();
            switch (classIndex)
            {
                case 1:
                    Product newProduct = new Product(InfoDb.Name, InfoDb.Price, InfoDb.Amount);
                    productStorage.Add(newProduct);
                    newRow.Cells[1].Value = "-";
                    break;
                case 2:
                    SpoilingProducts newSpoilingProducts =
                        new SpoilingProducts(InfoDb.Name, InfoDb.Date, InfoDb.Price, InfoDb.Amount);
                    spoilingProductsStorage.Add(newSpoilingProducts);
                    newRow.Cells[1].Value = InfoDb.Date;
                    break;
                case 3:
                    NonPerishableProducts newNonPerishableProducts =
                        new NonPerishableProducts(InfoDb.Name, InfoDb.Material, InfoDb.Price, InfoDb.Amount);
                    nonPerishableProductsStorage.Add(newNonPerishableProducts);
                    newRow.Cells[1].Value = InfoDb.Material;
                    break;
            }

            newRow.Cells[0].Value = InfoDb.Name;
            newRow.Cells[2].Value = InfoDb.Price;
            newRow.Cells[3].Value = InfoDb.Amount;
            page.Rows.Add(newRow);
        }

        private void MainWindowClose(object sender, FormClosingEventArgs e)
        {
            _IOFile = new DataManipulator();
            _IOFile.SaveDataToJson(productStorage, spoilingProductsStorage, nonPerishableProductsStorage);
            SaveTotal();
        }

        private void MainWindowLoad(object sender, EventArgs e)
        {
            _IOFile = new DataManipulator();
            _IOFile.LoadDataFromJson(ref productStorage, ref spoilingProductsStorage, ref nonPerishableProductsStorage);
            ReadTotal();
            CreateStartNotes();
        }

        private void CreateStartNotes()
        {
            AddProductsToTable(productStorage, productsTable, "-", (product) => new object[] { product.Name, "-", product.Price, product.Amount });
            AddProductsToTable(spoilingProductsStorage, spoilingProductsTable,null, (product) => new object[] { product.Name, product.Date, product.Price, product.Amount });
            AddProductsToTable(nonPerishableProductsStorage, nonPerishableProductsTable,null, (product) => new object[] { product.Name, product.Material, product.Price, product.Amount });

            TotalLable.Text = "Total: " + _total + "$";
        }

        private void AddProductsToTable<T>(List<T> products, DataGridView table, string defaultCellValue, Func<T, object[]> cellValuesSelector)
        {
            DataGridViewRow newRow;
            foreach (var product in products)
            {
                newRow = (DataGridViewRow)table.Rows[0].Clone();
                object[] cellValues = cellValuesSelector(product);
                for (int i = 0; i < cellValues.Length; i++)
                {
                    newRow.Cells[i].Value = cellValues[i] ?? defaultCellValue;
                }
                table.Rows.Add(newRow);
            }
        }

        public bool CheckIfRowSelected(DataGridView Table)
        {
            if (Table.CurrentRow == null || Table.CurrentRow.IsNewRow)
            {
                MessageBox.Show("Error! Row is not selected!");
                return false;
            }

            return true;
        }

        public void ShowInfoAboutObject(ref RJCodeAdvance.RJControls.RJTextBox nameTextBox,
            ref RJCodeAdvance.RJControls.RJTextBox MaterialTextBox, ref RJCodeAdvance.RJControls.RJDatePicker dateField,
            ref RJCodeAdvance.RJControls.RJTextBox priceTextBox, ref RJCodeAdvance.RJControls.RJTextBox amountTextBox)
        {
            if (productsTable.Visible)
            {
                ShowInfo(productStorage[productsTable.CurrentRow.Index], nameTextBox, null, null, priceTextBox, amountTextBox);
                MaterialTextBox.Enabled = false;
            }
            else if (spoilingProductsTable.Visible)
            {
                ShowInfo(spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index], nameTextBox, dateField, null, priceTextBox, amountTextBox);
            }
            else if (nonPerishableProductsTable.Visible)
            {
                ShowInfo(nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index], nameTextBox, null, MaterialTextBox, priceTextBox, amountTextBox);
            }
        }

        private void ShowInfo(Product product, RJCodeAdvance.RJControls.RJTextBox nameTextBox,
            RJCodeAdvance.RJControls.RJDatePicker dateField, RJCodeAdvance.RJControls.RJTextBox MaterialTextBox,
            RJCodeAdvance.RJControls.RJTextBox priceTextBox, RJCodeAdvance.RJControls.RJTextBox amountTextBox)
        {
            nameTextBox.Texts = product.Name;
            priceTextBox.Texts = product.Price.ToString();
            amountTextBox.Texts = product.Amount.ToString();

            if (product is SpoilingProducts spoilingProduct)
            {
                dateField.Text = spoilingProduct.Date;
            }
            else if (product is NonPerishableProducts nonPerishableProduct)
            {
                MaterialTextBox.Texts = nonPerishableProduct.Material;
            }
        }


        public void EditObject()
        {
            if (productsTable.Visible)
            {
                UpdateProduct(productStorage[productsTable.CurrentRow.Index], productsTable);
            }
            else if (spoilingProductsTable.Visible)
            {
                UpdateProduct(spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index], spoilingProductsTable);
            }
            else if (nonPerishableProductsTable.Visible)
            {
                UpdateProduct(nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index], nonPerishableProductsTable);
            }
        }

        private void UpdateProduct(Product product, DataGridView table)
        {
            product.Name = InfoDb.Name;
            product.Price = InfoDb.Price;
            product.Amount = InfoDb.Amount;

            table.CurrentRow.Cells[0].Value = product.Name;
            table.CurrentRow.Cells[2].Value = product.Price;
            table.CurrentRow.Cells[3].Value = product.Amount;

            if (product is SpoilingProducts spoilingProduct)
            {
                spoilingProduct.Date = InfoDb.Date;
                table.CurrentRow.Cells[1].Value = spoilingProduct.Date;
            }
            else if (product is NonPerishableProducts nonPerishableProduct)
            {
                nonPerishableProduct.Material = InfoDb.Material;
                table.CurrentRow.Cells[1].Value = nonPerishableProduct.Material;
            }
        }

        private void SearchTextBoxOnEnter(object sender, EventArgs e)
        {
            SearchTextBox.Text = "";
        }

        private void SearchButtonClick(object sender, EventArgs e)
        {
            SetRowsVisibility(productStorage, productsTable);
            SetRowsVisibility(spoilingProductsStorage, spoilingProductsTable);
            SetRowsVisibility(nonPerishableProductsStorage, nonPerishableProductsTable);
        }

        private void SetRowsVisibility<T>(List<T> storage, DataGridView table) where T : Product
        {
            for (int j = 0; j < storage.Count; j++)
            {
                table.Rows[j].Visible = true;
            }

            if (table.Visible)
            {
                for (int i = 0; i < storage.Count; i++)
                {
                    table.Rows[i].Visible = storage[i].Name == SearchTextBox.Text;
                }
            }
        }

        private void ShowAllButtonClick(object sender, EventArgs e)
        {
            SearchTextBox.Text = "Search...";
            SetRowsVisibilityAfterSearch(productStorage, productsTable);
            SetRowsVisibilityAfterSearch(spoilingProductsStorage, spoilingProductsTable);
            SetRowsVisibilityAfterSearch(nonPerishableProductsStorage, nonPerishableProductsTable);
        }

        private void SetRowsVisibilityAfterSearch<T>(List<T> storage, DataGridView table)
        {
            for (int j = 0; j < storage.Count; j++)
            {
                table.Rows[j].Visible = true;
            }
        }

        private void PurchaseButtonClick(object sender, EventArgs e)
        {
            if (productsTable.Visible && !CheckIfRowSelected(productsTable))
            {
                return;
            }
            else if (spoilingProductsTable.Visible && !CheckIfRowSelected(spoilingProductsTable))
            {
                return;
            }
            else if (nonPerishableProductsTable.Visible && !CheckIfRowSelected(nonPerishableProductsTable))
            {
                return;
            }
            PurchaseWindow purchaseWindow = new PurchaseWindow(this);
            purchaseWindow.Show();
        }

        private void SellButtonClick(object sender, EventArgs e)
        {
            if (productsTable.Visible && !CheckIfRowSelected(productsTable))
            {
                return;
            }
            else if (spoilingProductsTable.Visible && !CheckIfRowSelected(spoilingProductsTable))
            {
                return;
            }
            else if (nonPerishableProductsTable.Visible && !CheckIfRowSelected(nonPerishableProductsTable))
            {
                return;
            }
            SellWindow sellWindow = new SellWindow(this);
            sellWindow.Show();
        }
        
        private void DeleteButtonClick(object sender, EventArgs e)
        {
            if (productsTable.Visible)
            {
                DeleteRowAndProduct(productsTable, productStorage);
            }
            else if (spoilingProductsTable.Visible)
            {
                DeleteRowAndProduct(spoilingProductsTable, spoilingProductsStorage);
            }
            else if (nonPerishableProductsTable.Visible)
            {
                DeleteRowAndProduct(nonPerishableProductsTable, nonPerishableProductsStorage);
            }
        }

        private void DeleteRowAndProduct<T>(DataGridView table, List<T> storage)
        {
            if (CheckIfRowSelected(table))
            {
                table.Rows.Remove(table.CurrentRow);
                storage.RemoveAt(table.CurrentRow.Index);
            }
        }

        private void EditButtonClick(object sender, EventArgs e)
        {
            int pageNumber = -1;
            if (productsTable.Visible && !CheckIfRowSelected(productsTable))
            {
                return;
            }
            else if (spoilingProductsTable.Visible && !CheckIfRowSelected(spoilingProductsTable))
            {
                return;
            }
            else if (nonPerishableProductsTable.Visible && !CheckIfRowSelected(nonPerishableProductsTable))
            {
                return;
            }

            if (tabsTable.TabPages[0].Visible)
            {
                pageNumber = 0;
            }
            else if (tabsTable.TabPages[1].Visible)
            {
                pageNumber = 1;
            }
            else if (tabsTable.TabPages[2].Visible)
            {
                pageNumber = 2;
            }
            
            EditWindow editWindow = new EditWindow(this, pageNumber);
            editWindow.Show();
        }
        
        public void Purchase(int amount)
        {
            if (productsTable.Visible)
            {
                UpdateProductAmount(productStorage[productsTable.CurrentRow.Index], amount, productsTable);
            }
            else if (spoilingProductsTable.Visible)
            {
                UpdateProductAmount(spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index], amount, spoilingProductsTable);
            }
            else if (nonPerishableProductsTable.Visible)
            {
                UpdateProductAmount(nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index], amount, nonPerishableProductsTable);
            }
        }

        private void UpdateProductAmount(Product product, int amount, DataGridView table)
        {
            if (amount <= 0)
            {
                MessageBox.Show("Error! Invalid purchase amount!");
                return;
            }
            product.Amount += amount;
            table.CurrentRow.Cells[3].Value = product.Amount;
            _total -= (amount * product.Price);
            TotalLable.Text = "Total: " + _total + "$";
        }

        public void Sell(int amount)
        {
            if (productsTable.Visible)
            {
                SellProduct(productStorage[productsTable.CurrentRow.Index], amount, productsTable);
            }
            else if (spoilingProductsTable.Visible)
            {
                SellProduct(spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index], amount, spoilingProductsTable);
            }
            else if (nonPerishableProductsTable.Visible)
            {
                SellProduct(nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index], amount, nonPerishableProductsTable);
            }
        }

        private void SellProduct(Product product, int amount, DataGridView table)
        {
            if (amount <= product.Amount)
            {
                product.Amount -= amount;
                table.CurrentRow.Cells[3].Value = product.Amount;

                _total += (amount * product.Price);
                TotalLable.Text = "Total: " + _total + "$";
            }
            else
            {
                MessageBox.Show("Error! the amount is negative!");
            }
        }
    }
}