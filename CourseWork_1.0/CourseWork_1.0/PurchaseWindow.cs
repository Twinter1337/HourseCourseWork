using System;
using System.Windows.Forms;

namespace CourseWork_1._0
{
    public partial class PurchaseWindow : Form
    {
        private MainWindow parent;
        public PurchaseWindow(MainWindow parent)
        {
            InitializeComponent();
            this.parent = parent;
        }

        private void PurchaseButton_Click(object sender, EventArgs e)
        {
            if (rjTextBox1.Texts == "")
            {
                MessageBox.Show("Error! Enter amount of purchase product!");
                return;
            }

            if (!int.TryParse(rjTextBox1.Texts, out int amount))
            {
                MessageBox.Show("Error! Purchase ammount entered incorrect!");
                return;
            }
            
            parent.Purchase(amount);
            Close();
        }

        private void CancelButton_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}