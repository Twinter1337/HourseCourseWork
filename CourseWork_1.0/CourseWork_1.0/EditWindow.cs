using System;
using System.Windows.Forms;
using RJCodeAdvance.RJControls;

namespace CourseWork_1._0
{
    public partial class EditWindow : Form
    {
        private MainWindow parent;
        public EditWindow(MainWindow parent, int pageNumber)
        {
            InitializeComponent();
            this.parent = parent;
            switch (pageNumber)
            {
                case 0:
                    Text = "Product";
                    MaterialTextBox.Enabled = false;
                    DateField.Enabled = false;
                    break;
                case 1:
                    Text = "Spoiling product";
                    DateField.Visible = true;
                    MaterialTextBox.Enabled = false;
                    label2.Text = "Date:";
                    break;
                case 2:
                    Text = "Non perishable product";
                    DateField.Visible = false;
                    label2.Text = "Material:";
                    break;
            }
        }

        private void EditButtonClick(object sender, EventArgs e)
        {
            foreach (var textBox in this.Controls)
            {
                if (textBox.GetType().Equals(typeof(RJTextBox)))
                {
                    RJTextBox temp = textBox as RJTextBox;
                    if (temp.Texts.Equals("") && temp.Enabled)
                    {
                        MessageBox.Show("Every text field must be entered!");
                        return;
                    }
                }
            }
            InfoDb.Name = nameTextBox.Texts;
            InfoDb.Date = DateField.Text;
            InfoDb.Material = MaterialTextBox.Texts;
            if (!double.TryParse(priceTextBox.Texts, out InfoDb.Price) || InfoDb.Price <= 0)
            {
                MessageBox.Show("Error! Wrong price!");
                return;
            }
            if (!int.TryParse(amountTextBox.Texts, out InfoDb.Amount) || InfoDb.Amount <= 0)
            {
                MessageBox.Show("Error! Wrong amount!");
                return;
            }
            
            parent.EditObject();
            Close();
        }

        private void EditWindow_Load(object sender, EventArgs e)
        {
            parent.ShowInfoAboutObject(ref nameTextBox, ref MaterialTextBox, ref DateField, ref priceTextBox, ref amountTextBox);
        }
    }
}