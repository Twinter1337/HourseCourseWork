using System.ComponentModel;

namespace CourseWork_1._0{
    partial class InfoEnterWindow{
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing){
            if (disposing && (components != null)) {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.nameTextBox = new RJCodeAdvance.RJControls.RJTextBox();
            this.MaterialTextBox = new RJCodeAdvance.RJControls.RJTextBox();
            this.priceTextBox = new RJCodeAdvance.RJControls.RJTextBox();
            this.amountTextBox = new RJCodeAdvance.RJControls.RJTextBox();
            this.rjButton1 = new RJCodeAdvance.RJControls.RJButton();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.DateField = new RJCodeAdvance.RJControls.RJDatePicker();
            this.SuspendLayout();
            // 
            // nameTextBox
            // 
            this.nameTextBox.BackColor = System.Drawing.SystemColors.Window;
            this.nameTextBox.BorderColor = System.Drawing.SystemColors.ActiveBorder;
            this.nameTextBox.BorderFocusColor = System.Drawing.SystemColors.WindowFrame;
            this.nameTextBox.BorderRadius = 10;
            this.nameTextBox.BorderSize = 2;
            this.nameTextBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.nameTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.nameTextBox.Location = new System.Drawing.Point(13, 27);
            this.nameTextBox.Margin = new System.Windows.Forms.Padding(4);
            this.nameTextBox.Multiline = false;
            this.nameTextBox.Name = "nameTextBox";
            this.nameTextBox.Padding = new System.Windows.Forms.Padding(10, 7, 10, 7);
            this.nameTextBox.PasswordChar = false;
            this.nameTextBox.PlaceholderColor = System.Drawing.Color.DarkGray;
            this.nameTextBox.PlaceholderText = "";
            this.nameTextBox.Size = new System.Drawing.Size(250, 31);
            this.nameTextBox.TabIndex = 0;
            this.nameTextBox.Texts = "";
            this.nameTextBox.UnderlinedStyle = false;
            // 
            // dateOrMaterialTextBox
            // 
            this.MaterialTextBox.BackColor = System.Drawing.SystemColors.Window;
            this.MaterialTextBox.BorderColor = System.Drawing.SystemColors.ActiveBorder;
            this.MaterialTextBox.BorderFocusColor = System.Drawing.SystemColors.WindowFrame;
            this.MaterialTextBox.BorderRadius = 10;
            this.MaterialTextBox.BorderSize = 2;
            this.MaterialTextBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MaterialTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.MaterialTextBox.Location = new System.Drawing.Point(13, 77);
            this.MaterialTextBox.Margin = new System.Windows.Forms.Padding(4);
            this.MaterialTextBox.Multiline = false;
            this.MaterialTextBox.Name = "dateOrMaterialTextBox";
            this.MaterialTextBox.Padding = new System.Windows.Forms.Padding(10, 7, 10, 7);
            this.MaterialTextBox.PasswordChar = false;
            this.MaterialTextBox.PlaceholderColor = System.Drawing.Color.DarkGray;
            this.MaterialTextBox.PlaceholderText = "";
            this.MaterialTextBox.Size = new System.Drawing.Size(250, 31);
            this.MaterialTextBox.TabIndex = 1;
            this.MaterialTextBox.Texts = "";
            this.MaterialTextBox.UnderlinedStyle = false;
            // 
            // priceTextBox
            // 
            this.priceTextBox.BackColor = System.Drawing.SystemColors.Window;
            this.priceTextBox.BorderColor = System.Drawing.SystemColors.ActiveBorder;
            this.priceTextBox.BorderFocusColor = System.Drawing.SystemColors.WindowFrame;
            this.priceTextBox.BorderRadius = 10;
            this.priceTextBox.BorderSize = 2;
            this.priceTextBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.priceTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.priceTextBox.Location = new System.Drawing.Point(13, 127);
            this.priceTextBox.Margin = new System.Windows.Forms.Padding(4);
            this.priceTextBox.Multiline = false;
            this.priceTextBox.Name = "priceTextBox";
            this.priceTextBox.Padding = new System.Windows.Forms.Padding(10, 7, 10, 7);
            this.priceTextBox.PasswordChar = false;
            this.priceTextBox.PlaceholderColor = System.Drawing.Color.DarkGray;
            this.priceTextBox.PlaceholderText = "";
            this.priceTextBox.Size = new System.Drawing.Size(250, 31);
            this.priceTextBox.TabIndex = 2;
            this.priceTextBox.Texts = "";
            this.priceTextBox.UnderlinedStyle = false;
            // 
            // amountTextBox
            // 
            this.amountTextBox.BackColor = System.Drawing.SystemColors.Window;
            this.amountTextBox.BorderColor = System.Drawing.SystemColors.ActiveBorder;
            this.amountTextBox.BorderFocusColor = System.Drawing.SystemColors.WindowFrame;
            this.amountTextBox.BorderRadius = 10;
            this.amountTextBox.BorderSize = 2;
            this.amountTextBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.amountTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.amountTextBox.Location = new System.Drawing.Point(13, 177);
            this.amountTextBox.Margin = new System.Windows.Forms.Padding(4);
            this.amountTextBox.Multiline = false;
            this.amountTextBox.Name = "amountTextBox";
            this.amountTextBox.Padding = new System.Windows.Forms.Padding(10, 7, 10, 7);
            this.amountTextBox.PasswordChar = false;
            this.amountTextBox.PlaceholderColor = System.Drawing.Color.DarkGray;
            this.amountTextBox.PlaceholderText = "";
            this.amountTextBox.Size = new System.Drawing.Size(250, 31);
            this.amountTextBox.TabIndex = 3;
            this.amountTextBox.Texts = "";
            this.amountTextBox.UnderlinedStyle = false;
            // 
            // rjButton1
            // 
            this.rjButton1.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.rjButton1.BackgroundColor = System.Drawing.SystemColors.ButtonShadow;
            this.rjButton1.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.rjButton1.BorderRadius = 10;
            this.rjButton1.BorderSize = 0;
            this.rjButton1.FlatAppearance.BorderSize = 0;
            this.rjButton1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.rjButton1.ForeColor = System.Drawing.Color.White;
            this.rjButton1.Location = new System.Drawing.Point(13, 237);
            this.rjButton1.Name = "rjButton1";
            this.rjButton1.Size = new System.Drawing.Size(250, 40);
            this.rjButton1.TabIndex = 4;
            this.rjButton1.Text = "Add";
            this.rjButton1.TextColor = System.Drawing.Color.White;
            this.rjButton1.UseVisualStyleBackColor = false;
            this.rjButton1.Click += new System.EventHandler(this.AddButtonClick);
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(13, 11);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(50, 12);
            this.label1.TabIndex = 5;
            this.label1.Text = "Name:";
            // 
            // label2
            // 
            this.label2.Location = new System.Drawing.Point(13, 61);
            this.label2.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(80, 12);
            this.label2.TabIndex = 6;
            this.label2.Text = "Date/Material:";
            // 
            // label3
            // 
            this.label3.Location = new System.Drawing.Point(13, 111);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(50, 12);
            this.label3.TabIndex = 7;
            this.label3.Text = "Price:";
            // 
            // label4
            // 
            this.label4.Location = new System.Drawing.Point(13, 161);
            this.label4.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(50, 12);
            this.label4.TabIndex = 8;
            this.label4.Text = "Amount:";
            // 
            // DateField
            // 
            this.DateField.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.DateField.BorderSize = 0;
            this.DateField.CustomFormat = "";
            this.DateField.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.5F);
            this.DateField.Location = new System.Drawing.Point(13, 76);
            this.DateField.MinimumSize = new System.Drawing.Size(4, 35);
            this.DateField.Name = "DateField";
            this.DateField.Size = new System.Drawing.Size(250, 35);
            this.DateField.SkinColor = System.Drawing.SystemColors.ButtonShadow;
            this.DateField.TabIndex = 9;
            this.DateField.TextColor = System.Drawing.Color.White;
            // 
            // InfoEnterWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(252)))), ((int)(((byte)(154)))), ((int)(((byte)(29)))));
            this.ClientSize = new System.Drawing.Size(278, 284);
            this.Controls.Add(this.DateField);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.rjButton1);
            this.Controls.Add(this.amountTextBox);
            this.Controls.Add(this.priceTextBox);
            this.Controls.Add(this.MaterialTextBox);
            this.Controls.Add(this.nameTextBox);
            this.MaximumSize = new System.Drawing.Size(294, 323);
            this.MinimumSize = new System.Drawing.Size(294, 323);
            this.Name = "InfoEnterWindow";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "InfoEnterWindow";
            this.ResumeLayout(false);
        }

        private RJCodeAdvance.RJControls.RJDatePicker DateField;

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;

        private RJCodeAdvance.RJControls.RJButton rjButton1;

        private RJCodeAdvance.RJControls.RJTextBox nameTextBox;
        private RJCodeAdvance.RJControls.RJTextBox MaterialTextBox;
        private RJCodeAdvance.RJControls.RJTextBox priceTextBox;
        private RJCodeAdvance.RJControls.RJTextBox amountTextBox;

        #endregion
    }
}