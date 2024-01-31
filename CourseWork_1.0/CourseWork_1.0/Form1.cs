using System;
using System.Windows.Forms;

namespace CourseWork_1._0{
    public partial class Form1 : Form{
        public Form1(){
            InitializeComponent();
        }

        private void rjButton1_Click(object sender, EventArgs e){
            InfoEnterWindow addNewInfoInTable = new InfoEnterWindow(this);
            addNewInfoInTable.Show();
        }

        public void addNewRow(){
            if (tabsTable.TabPages[0].Visible) {
                CreateNewRow(dataGridView3);
            }
            else if (tabsTable.TabPages[1].Visible) {
                CreateNewRow(dataGridView2);
            }
            else if (tabsTable.TabPages[2].Visible) {
                CreateNewRow(dataGridView1);
            }
        }


        public void CreateNewRow(DataGridView page){
            DataGridViewRow newRow;
            newRow = (DataGridViewRow)page.Rows[0].Clone();
            newRow.Cells[0].Value = InfoDb.Name;
            newRow.Cells[1].Value = InfoDb.Date;
            newRow.Cells[2].Value = InfoDb.Price;
            newRow.Cells[3].Value = InfoDb.Amount;
            page.Rows.Add(newRow);
        }
    }
}