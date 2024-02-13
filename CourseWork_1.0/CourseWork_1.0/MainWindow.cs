using System;
using System.Collections.Generic;
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
        }

        private void MainWindowLoad(object sender, EventArgs e)
        {
            _IOFile = new DataManipulator();
            _IOFile.LoadDataFromJson(ref productStorage, ref spoilingProductsStorage, ref nonPerishableProductsStorage);
            CreateStartNotes(productStorage, spoilingProductsStorage, nonPerishableProductsStorage);
        }

        private void CreateStartNotes(List<Product> productStorage, List<SpoilingProducts> spoilingProductsStorage,
            List<NonPerishableProducts> nonPerishableProductsStorage)
        {
            DataGridViewRow newRow;
            for (int i = 0; i < productStorage.Count; i++)
            {
                newRow = (DataGridViewRow)productsTable.Rows[0].Clone();
                newRow.Cells[0].Value = productStorage[i].Name;
                newRow.Cells[1].Value = "-";
                newRow.Cells[2].Value = productStorage[i].Price;
                newRow.Cells[3].Value = productStorage[i].Amount;
                productsTable.Rows.Add(newRow);
            }

            for (int i = 0; i < spoilingProductsStorage.Count; i++)
            {
                newRow = (DataGridViewRow)spoilingProductsTable.Rows[0].Clone();
                newRow.Cells[0].Value = spoilingProductsStorage[i].Name;
                newRow.Cells[1].Value = spoilingProductsStorage[i].Date;
                newRow.Cells[2].Value = spoilingProductsStorage[i].Price;
                newRow.Cells[3].Value = spoilingProductsStorage[i].Amount;
                spoilingProductsTable.Rows.Add(newRow);
            }

            for (int i = 0; i < nonPerishableProductsStorage.Count; i++)
            {
                newRow = (DataGridViewRow)nonPerishableProductsTable.Rows[0].Clone();
                newRow.Cells[0].Value = nonPerishableProductsStorage[i].Name;
                newRow.Cells[1].Value = nonPerishableProductsStorage[i].Material;
                newRow.Cells[2].Value = nonPerishableProductsStorage[i].Price;
                newRow.Cells[3].Value = nonPerishableProductsStorage[i].Amount;
                nonPerishableProductsTable.Rows.Add(newRow);
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

        private void DeleteButtonClick(object sender, EventArgs e)
        {
            if (productsTable.Visible)
            {
                if (CheckIfRowSelected(productsTable))
                {
                    productsTable.Rows.Remove(productsTable.CurrentRow);
                    productStorage.RemoveAt(productsTable.CurrentRow.Index);
                }
            }
            else if (spoilingProductsTable.Visible)
            {
                if (CheckIfRowSelected(spoilingProductsTable))
                {
                    spoilingProductsTable.Rows.Remove(spoilingProductsTable.CurrentRow);
                    spoilingProductsStorage.RemoveAt(spoilingProductsTable.CurrentRow.Index);
                }
            }
            else if (nonPerishableProductsTable.Visible)
            {
                if (CheckIfRowSelected(nonPerishableProductsTable))
                {
                    nonPerishableProductsTable.Rows.Remove(nonPerishableProductsTable.CurrentRow);
                    nonPerishableProductsStorage.RemoveAt(nonPerishableProductsTable.CurrentRow.Index);
                }
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

        public void ShowInfoAboutObject(ref RJCodeAdvance.RJControls.RJTextBox nameTextBox,
            ref RJCodeAdvance.RJControls.RJTextBox MaterialTextBox, ref RJCodeAdvance.RJControls.RJDatePicker dateField,
            ref RJCodeAdvance.RJControls.RJTextBox priceTextBox, ref RJCodeAdvance.RJControls.RJTextBox amountTextBox)
        {
            if (productsTable.Visible)
            {
                MaterialTextBox.Enabled = false;
                nameTextBox.Texts = productStorage[productsTable.CurrentRow.Index].Name;
                priceTextBox.Texts = productStorage[productsTable.CurrentRow.Index].Price.ToString();
                amountTextBox.Texts = productStorage[productsTable.CurrentRow.Index].Amount.ToString();
            }
            else if (spoilingProductsTable.Visible)
            {
                nameTextBox.Texts = spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Name;
                dateField.Text = spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Date;
                priceTextBox.Texts = spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Price.ToString();
                amountTextBox.Texts = spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount.ToString();
            }
            else if (nonPerishableProductsTable.Visible)
            {
                nameTextBox.Texts = nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Name;
                MaterialTextBox.Texts =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Material;
                priceTextBox.Texts = nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Price
                    .ToString();
                amountTextBox.Texts = nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount
                    .ToString();
            }
        }

        public void EditObject()
        {
            if (productsTable.Visible)
            {
                productStorage[productsTable.CurrentRow.Index].Name = InfoDb.Name;
                productStorage[productsTable.CurrentRow.Index].Price = InfoDb.Price;
                productStorage[productsTable.CurrentRow.Index].Amount = InfoDb.Amount;

                productsTable.CurrentRow.Cells[0].Value = productStorage[productsTable.CurrentRow.Index].Name;
                productsTable.CurrentRow.Cells[2].Value = productStorage[productsTable.CurrentRow.Index].Price;
                productsTable.CurrentRow.Cells[3].Value = productStorage[productsTable.CurrentRow.Index].Amount;
            }
            else if (spoilingProductsTable.Visible)
            {
                spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Name = InfoDb.Name;
                spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Date = InfoDb.Date;
                spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Price = InfoDb.Price;
                spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount = InfoDb.Amount;

                spoilingProductsTable.CurrentRow.Cells[0].Value =
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Name;
                spoilingProductsTable.CurrentRow.Cells[1].Value =
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Date;
                spoilingProductsTable.CurrentRow.Cells[2].Value =
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Price;
                spoilingProductsTable.CurrentRow.Cells[3].Value =
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount;
            }
            else if (nonPerishableProductsTable.Visible)
            {
                nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Name = InfoDb.Name;
                nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Material =
                    InfoDb.Material;
                nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Price = InfoDb.Price;
                nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount = InfoDb.Amount;

                nonPerishableProductsTable.CurrentRow.Cells[0].Value =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Name;
                nonPerishableProductsTable.CurrentRow.Cells[1].Value =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Material;
                nonPerishableProductsTable.CurrentRow.Cells[2].Value =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Price;
                nonPerishableProductsTable.CurrentRow.Cells[3].Value =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount;
            }
        }

        private void richTextBox1_Enter(object sender, EventArgs e)
        {
            SearchTextBox.Text = "";
        }

        private void SearchButton_Click(object sender, EventArgs e)
        {
            for (int j = 0; j < productStorage.Count; j++)
            {
                productsTable.Rows[j].Visible = true;
            }

            for (int j = 0; j < spoilingProductsStorage.Count; j++)
            {
                spoilingProductsTable.Rows[j].Visible = true;
            }

            for (int j = 0; j < nonPerishableProductsStorage.Count; j++)
            {
                nonPerishableProductsTable.Rows[j].Visible = true;
            }

            if (productsTable.Visible)
            {
                for (int i = 0; i < productStorage.Count; i++)
                {
                    if (productStorage[i].Name != SearchTextBox.Text)
                    {
                        productsTable.Rows[i].Visible = false;
                    }
                }
            }
            else if (spoilingProductsTable.Visible)
            {
                for (int i = 0; i < spoilingProductsStorage.Count; i++)
                {
                    if (spoilingProductsStorage[i].Name != SearchTextBox.Text)
                    {
                        spoilingProductsTable.Rows[i].Visible = false;
                    }
                }
            }
            else if (nonPerishableProductsTable.Visible)
            {
                for (int i = 0; i < nonPerishableProductsStorage.Count; i++)
                {
                    if (nonPerishableProductsStorage[i].Name != SearchTextBox.Text)
                    {
                        nonPerishableProductsTable.Rows[i].Visible = false;
                    }
                }
            }
        }

        private void ShowAllButton_Click(object sender, EventArgs e)
        {
            SearchTextBox.Text = "Search...";
            for (int j = 0; j < productStorage.Count; j++)
            {
                productsTable.Rows[j].Visible = true;
            }

            for (int j = 0; j < spoilingProductsStorage.Count; j++)
            {
                spoilingProductsTable.Rows[j].Visible = true;
            }

            for (int j = 0; j < nonPerishableProductsStorage.Count; j++)
            {
                nonPerishableProductsTable.Rows[j].Visible = true;
            }
        }

        private void PurchaseButton_Click(object sender, EventArgs e)
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

        public void Purchase(int amount)
        {
            if (productsTable.Visible)
            {
                productStorage[productsTable.CurrentRow.Index].Amount += amount;
                productsTable.CurrentRow.Cells[3].Value = productStorage[productsTable.CurrentRow.Index].Amount;
            }
            else if (spoilingProductsTable.Visible)
            {
                spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount += amount;
                spoilingProductsTable.CurrentRow.Cells[3].Value =
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount;
            }
            else if (nonPerishableProductsTable.Visible)
            {
                nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount += amount;
                nonPerishableProductsTable.CurrentRow.Cells[3].Value =
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount;
            }
        }

        private void SellButton_Click(object sender, EventArgs e)
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

        public void Sell(int amount)
        {
            if (productsTable.Visible)
            {
                if (amount <= productStorage[productsTable.CurrentRow.Index].Amount)
                {
                    productStorage[productsTable.CurrentRow.Index].Amount -= amount;
                    productsTable.CurrentRow.Cells[3].Value = productStorage[productsTable.CurrentRow.Index].Amount;
                }
                else
                {
                    MessageBox.Show("Error! the amount is negative!");
                    return;
                }
            }
            else if (spoilingProductsTable.Visible)
            {
                if (amount <= spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount)
                {
                    spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount -= amount;
                    spoilingProductsTable.CurrentRow.Cells[3].Value =
                        spoilingProductsStorage[spoilingProductsTable.CurrentRow.Index].Amount;
                }
                else
                {
                    MessageBox.Show("Error! the amount is negative!");
                    return;
                }
            }
            else if (nonPerishableProductsTable.Visible)
            {
                if (amount <= nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount)
                {
                    nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount -= amount;
                    nonPerishableProductsTable.CurrentRow.Cells[3].Value =
                        nonPerishableProductsStorage[nonPerishableProductsTable.CurrentRow.Index].Amount;
                }
                else
                {
                    MessageBox.Show("Error! the amount is negative!");
                    return;
                }
            }
        }
    }
}