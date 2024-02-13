using System;
using System.Windows.Forms;

namespace CourseWork_1._0
{
    public partial class SellWindow : Form
    {
        private MainWindow parent;
        public SellWindow(MainWindow parent)
        {
            InitializeComponent();
            this.parent = parent;
        }

        private void SellButton_Click(object sender, EventArgs e)
        {
            if (rjTextBox1.Texts == "")
            {
                MessageBox.Show("Error! Enter amount of sold product!");
                return;
            }

            if (!int.TryParse(rjTextBox1.Texts, out int amount))
            {
                MessageBox.Show("Error! Sold ammount entered incorrect!");
                return;
            }
            
            if (amount <= 0)
            {
                MessageBox.Show("Error! Wrong amount of sold products entered!");
                return;
            }
            parent.Sell(amount);
            Close();
        }

        private void CancleButton_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}