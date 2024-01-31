using System;
using System.Windows.Forms;

namespace CourseWork_1._0{
    public partial class InfoEnterWindow : Form{
        private Form1 parent;

        public InfoEnterWindow(Form1 parent){
            InitializeComponent();
            this.parent = parent;
        }

        public void rjButton1_Click(object sender, EventArgs e){
            InfoDb.Name = rjTextBox1.Texts;
            InfoDb.Date = rjTextBox2.Texts;
            InfoDb.Price = int.Parse(rjTextBox3.Texts);
            InfoDb.Amount = int.Parse(rjTextBox4.Texts);

            parent.addNewRow();
            Close();
        }
    }
}