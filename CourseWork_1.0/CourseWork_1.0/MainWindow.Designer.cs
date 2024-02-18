using System.Windows.Forms;
using Xamarin.Forms.Xaml;

namespace CourseWork_1._0{
    partial class MainWindow{
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

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
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle6 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle7 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle8 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle9 = new System.Windows.Forms.DataGridViewCellStyle();
            this.Layout = new System.Windows.Forms.TableLayoutPanel();
            this.tabsTable = new TradeWright.UI.Forms.TabControlExtra();
            this.category1 = new System.Windows.Forms.TabPage();
            this.productsTable = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn6 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn7 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn8 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.button1 = new System.Windows.Forms.Button();
            this.category3 = new System.Windows.Forms.TabPage();
            this.spoilingProductsTable = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.category5 = new System.Windows.Forms.TabPage();
            this.nonPerishableProductsTable = new System.Windows.Forms.DataGridView();
            this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.addButton = new RJCodeAdvance.RJControls.RJButton();
            this.deleteButton = new RJCodeAdvance.RJControls.RJButton();
            this.EditButton = new RJCodeAdvance.RJControls.RJButton();
            this.PurchaseButton = new RJCodeAdvance.RJControls.RJButton();
            this.SellButton = new RJCodeAdvance.RJControls.RJButton();
            this.ShowAllButton = new RJCodeAdvance.RJControls.RJButton();
            this.tableLayoutPanel2 = new System.Windows.Forms.TableLayoutPanel();
            this.SearchButton = new RJCodeAdvance.RJControls.RJButton();
            this.SearchTextBox = new System.Windows.Forms.RichTextBox();
            this.TotalLable = new System.Windows.Forms.Label();
            this.dataGridTextBoxColumn1 = new System.Windows.Forms.DataGridTextBoxColumn();
            this.dataGridTextBoxColumn2 = new System.Windows.Forms.DataGridTextBoxColumn();
            this.faTabStripItem1 = new FarsiLibrary.Win.FATabStripItem();
            this.faTabStripItem2 = new FarsiLibrary.Win.FATabStripItem();
            this.dataGridTextBoxColumn3 = new System.Windows.Forms.DataGridTextBoxColumn();
            this.Layout.SuspendLayout();
            this.tabsTable.SuspendLayout();
            this.category1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.productsTable)).BeginInit();
            this.category3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.spoilingProductsTable)).BeginInit();
            this.category5.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.nonPerishableProductsTable)).BeginInit();
            this.tableLayoutPanel1.SuspendLayout();
            this.tableLayoutPanel2.SuspendLayout();
            this.SuspendLayout();
            // 
            // Layout
            // 
            this.Layout.AutoSize = true;
            this.Layout.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.Layout.ColumnCount = 1;
            this.Layout.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.Layout.Controls.Add(this.tabsTable, 0, 2);
            this.Layout.Controls.Add(this.tableLayoutPanel1, 0, 1);
            this.Layout.Controls.Add(this.tableLayoutPanel2, 0, 0);
            this.Layout.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Layout.Location = new System.Drawing.Point(0, 0);
            this.Layout.Name = "Layout";
            this.Layout.RowCount = 3;
            this.Layout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 33F));
            this.Layout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 37F));
            this.Layout.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.Layout.Size = new System.Drawing.Size(805, 458);
            this.Layout.TabIndex = 0;
            // 
            // tabsTable
            // 
            this.tabsTable.Controls.Add(this.category1);
            this.tabsTable.Controls.Add(this.category3);
            this.tabsTable.Controls.Add(this.category5);
            this.tabsTable.Cursor = System.Windows.Forms.Cursors.Arrow;
            // 
            // 
            // 
            this.tabsTable.DisplayStyleProvider.BlendStyle = TradeWright.UI.Forms.BlendStyle.Normal;
            this.tabsTable.DisplayStyleProvider.BorderColorDisabled = System.Drawing.Color.White;
            this.tabsTable.DisplayStyleProvider.BorderColorFocused = System.Drawing.Color.White;
            this.tabsTable.DisplayStyleProvider.BorderColorHighlighted = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.tabsTable.DisplayStyleProvider.BorderColorSelected = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.tabsTable.DisplayStyleProvider.BorderColorUnselected = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorFocused = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorFocusedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorHighlighted = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorHighlightedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorSelected = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorSelectedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonFillColorUnselected = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorFocused = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorFocusedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorHighlighted = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorHighlightedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorSelected = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorSelectedActive = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserButtonOutlineColorUnselected = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.CloserColorFocused = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.CloserColorFocusedActive = System.Drawing.SystemColors.ActiveCaptionText;
            this.tabsTable.DisplayStyleProvider.CloserColorHighlighted = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.CloserColorHighlightedActive = System.Drawing.SystemColors.ActiveCaptionText;
            this.tabsTable.DisplayStyleProvider.CloserColorSelected = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.CloserColorSelectedActive = System.Drawing.SystemColors.ActiveCaptionText;
            this.tabsTable.DisplayStyleProvider.CloserColorUnselected = System.Drawing.Color.Empty;
            this.tabsTable.DisplayStyleProvider.FocusColor = System.Drawing.Color.SaddleBrown;
            this.tabsTable.DisplayStyleProvider.FocusTrack = false;
            this.tabsTable.DisplayStyleProvider.HotTrack = true;
            this.tabsTable.DisplayStyleProvider.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.tabsTable.DisplayStyleProvider.Opacity = 1F;
            this.tabsTable.DisplayStyleProvider.Overlap = 0;
            this.tabsTable.DisplayStyleProvider.Padding = new System.Drawing.Point(6, 3);
            this.tabsTable.DisplayStyleProvider.PageBackgroundColorDisabled = System.Drawing.SystemColors.Control;
            this.tabsTable.DisplayStyleProvider.PageBackgroundColorFocused = System.Drawing.SystemColors.ControlLight;
            this.tabsTable.DisplayStyleProvider.PageBackgroundColorHighlighted = System.Drawing.Color.FromArgb(((int)(((byte)(236)))), ((int)(((byte)(244)))), ((int)(((byte)(252)))));
            this.tabsTable.DisplayStyleProvider.PageBackgroundColorSelected = System.Drawing.SystemColors.ControlLightLight;
            this.tabsTable.DisplayStyleProvider.PageBackgroundColorUnselected = System.Drawing.SystemColors.Control;
            this.tabsTable.DisplayStyleProvider.Radius = 2;
            this.tabsTable.DisplayStyleProvider.SelectedTabIsLarger = false;
            this.tabsTable.DisplayStyleProvider.ShowTabCloser = false;
            this.tabsTable.DisplayStyleProvider.TabColorDisabled1 = System.Drawing.SystemColors.Control;
            this.tabsTable.DisplayStyleProvider.TabColorDisabled2 = System.Drawing.SystemColors.Control;
            this.tabsTable.DisplayStyleProvider.TabColorFocused1 = System.Drawing.SystemColors.ControlLight;
            this.tabsTable.DisplayStyleProvider.TabColorFocused2 = System.Drawing.SystemColors.ControlLight;
            this.tabsTable.DisplayStyleProvider.TabColorHighLighted1 = System.Drawing.Color.Peru;
            this.tabsTable.DisplayStyleProvider.TabColorHighLighted2 = System.Drawing.Color.Peru;
            this.tabsTable.DisplayStyleProvider.TabColorSelected1 = System.Drawing.SystemColors.ControlLightLight;
            this.tabsTable.DisplayStyleProvider.TabColorSelected2 = System.Drawing.SystemColors.ControlLightLight;
            this.tabsTable.DisplayStyleProvider.TabColorUnSelected1 = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.tabsTable.DisplayStyleProvider.TabColorUnSelected2 = System.Drawing.Color.FromArgb(((int)(((byte)(121)))), ((int)(((byte)(70)))), ((int)(((byte)(0)))));
            this.tabsTable.DisplayStyleProvider.TabPageMargin = new System.Windows.Forms.Padding(1);
            this.tabsTable.DisplayStyleProvider.TextColorFocused = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.TextColorHighlighted = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.TextColorSelected = System.Drawing.SystemColors.ControlText;
            this.tabsTable.DisplayStyleProvider.TextColorUnselected = System.Drawing.SystemColors.ButtonHighlight;
            this.tabsTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tabsTable.HotTrack = true;
            this.tabsTable.ItemSize = new System.Drawing.Size(110, 26);
            this.tabsTable.Location = new System.Drawing.Point(3, 73);
            this.tabsTable.Name = "tabsTable";
            this.tabsTable.SelectedIndex = 0;
            this.tabsTable.Size = new System.Drawing.Size(799, 382);
            this.tabsTable.TabIndex = 0;
            // 
            // category1
            // 
            this.category1.BackColor = System.Drawing.Color.White;
            this.category1.Controls.Add(this.productsTable);
            this.category1.Controls.Add(this.button1);
            this.category1.Location = new System.Drawing.Point(4, 31);
            this.category1.Name = "category1";
            this.category1.Padding = new System.Windows.Forms.Padding(3);
            this.category1.Size = new System.Drawing.Size(791, 347);
            this.category1.TabIndex = 0;
            this.category1.Text = "Products";
            // 
            // productsTable
            // 
            this.productsTable.AutoSizeRowsMode = System.Windows.Forms.DataGridViewAutoSizeRowsMode.AllCellsExceptHeaders;
            this.productsTable.BackgroundColor = System.Drawing.SystemColors.ButtonHighlight;
            this.productsTable.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.productsTable.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle1.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle1.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle1.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle1.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle1.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.productsTable.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle1;
            this.productsTable.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            this.productsTable.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] { this.dataGridViewTextBoxColumn5, this.dataGridViewTextBoxColumn6, this.dataGridViewTextBoxColumn7, this.dataGridViewTextBoxColumn8 });
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.SystemColors.Window;
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.SystemColors.ControlText;
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.productsTable.DefaultCellStyle = dataGridViewCellStyle2;
            this.productsTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.productsTable.EditMode = System.Windows.Forms.DataGridViewEditMode.EditProgrammatically;
            this.productsTable.GridColor = System.Drawing.SystemColors.ControlText;
            this.productsTable.Location = new System.Drawing.Point(3, 3);
            this.productsTable.Name = "productsTable";
            this.productsTable.ReadOnly = true;
            this.productsTable.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.productsTable.RowHeadersDefaultCellStyle = dataGridViewCellStyle3;
            this.productsTable.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToAllHeaders;
            this.productsTable.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.productsTable.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.CellSelect;
            this.productsTable.Size = new System.Drawing.Size(785, 341);
            this.productsTable.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn5
            // 
            this.dataGridViewTextBoxColumn5.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn5.HeaderText = "Name";
            this.dataGridViewTextBoxColumn5.Name = "dataGridViewTextBoxColumn5";
            this.dataGridViewTextBoxColumn5.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn6
            // 
            this.dataGridViewTextBoxColumn6.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn6.HeaderText = "Date/Material";
            this.dataGridViewTextBoxColumn6.Name = "dataGridViewTextBoxColumn6";
            this.dataGridViewTextBoxColumn6.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn7
            // 
            this.dataGridViewTextBoxColumn7.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn7.HeaderText = "Price($)";
            this.dataGridViewTextBoxColumn7.Name = "dataGridViewTextBoxColumn7";
            this.dataGridViewTextBoxColumn7.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn8
            // 
            this.dataGridViewTextBoxColumn8.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn8.HeaderText = "Amount";
            this.dataGridViewTextBoxColumn8.Name = "dataGridViewTextBoxColumn8";
            this.dataGridViewTextBoxColumn8.ReadOnly = true;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(417, 106);
            this.button1.Margin = new System.Windows.Forms.Padding(2);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(88, 36);
            this.button1.TabIndex = 1;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // category3
            // 
            this.category3.Controls.Add(this.spoilingProductsTable);
            this.category3.Cursor = System.Windows.Forms.Cursors.Arrow;
            this.category3.Location = new System.Drawing.Point(4, 31);
            this.category3.Name = "category3";
            this.category3.Padding = new System.Windows.Forms.Padding(3);
            this.category3.Size = new System.Drawing.Size(791, 347);
            this.category3.TabIndex = 2;
            this.category3.Text = "Spoiling products";
            this.category3.UseVisualStyleBackColor = true;
            // 
            // spoilingProductsTable
            // 
            this.spoilingProductsTable.BackgroundColor = System.Drawing.SystemColors.ButtonHighlight;
            this.spoilingProductsTable.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.spoilingProductsTable.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle4.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle4.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle4.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle4.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle4.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.spoilingProductsTable.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle4;
            this.spoilingProductsTable.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            this.spoilingProductsTable.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] { this.dataGridViewTextBoxColumn1, this.dataGridViewTextBoxColumn2, this.dataGridViewTextBoxColumn3, this.dataGridViewTextBoxColumn4 });
            dataGridViewCellStyle5.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle5.BackColor = System.Drawing.SystemColors.Window;
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.SystemColors.ControlText;
            dataGridViewCellStyle5.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle5.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle5.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.spoilingProductsTable.DefaultCellStyle = dataGridViewCellStyle5;
            this.spoilingProductsTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.spoilingProductsTable.GridColor = System.Drawing.SystemColors.ControlText;
            this.spoilingProductsTable.Location = new System.Drawing.Point(3, 3);
            this.spoilingProductsTable.Name = "spoilingProductsTable";
            this.spoilingProductsTable.ReadOnly = true;
            this.spoilingProductsTable.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle6.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle6.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle6.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle6.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle6.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle6.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.spoilingProductsTable.RowHeadersDefaultCellStyle = dataGridViewCellStyle6;
            this.spoilingProductsTable.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToAllHeaders;
            this.spoilingProductsTable.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.CellSelect;
            this.spoilingProductsTable.Size = new System.Drawing.Size(785, 341);
            this.spoilingProductsTable.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn1.HeaderText = "Name";
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn2.HeaderText = "Date";
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn3.HeaderText = "Price($)";
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.ReadOnly = true;
            // 
            // dataGridViewTextBoxColumn4
            // 
            this.dataGridViewTextBoxColumn4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.dataGridViewTextBoxColumn4.HeaderText = "Amount";
            this.dataGridViewTextBoxColumn4.Name = "dataGridViewTextBoxColumn4";
            this.dataGridViewTextBoxColumn4.ReadOnly = true;
            // 
            // category5
            // 
            this.category5.Controls.Add(this.nonPerishableProductsTable);
            this.category5.Cursor = System.Windows.Forms.Cursors.Arrow;
            this.category5.Location = new System.Drawing.Point(4, 31);
            this.category5.Name = "category5";
            this.category5.Padding = new System.Windows.Forms.Padding(3);
            this.category5.Size = new System.Drawing.Size(791, 347);
            this.category5.TabIndex = 4;
            this.category5.Text = "Non perishable products";
            this.category5.UseVisualStyleBackColor = true;
            // 
            // nonPerishableProductsTable
            // 
            this.nonPerishableProductsTable.BackgroundColor = System.Drawing.SystemColors.ButtonHighlight;
            this.nonPerishableProductsTable.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.nonPerishableProductsTable.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle7.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle7.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle7.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle7.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle7.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle7.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle7.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.nonPerishableProductsTable.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle7;
            this.nonPerishableProductsTable.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            this.nonPerishableProductsTable.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] { this.Column1, this.Column2, this.Column3, this.Column4 });
            dataGridViewCellStyle8.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle8.BackColor = System.Drawing.SystemColors.Window;
            dataGridViewCellStyle8.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle8.ForeColor = System.Drawing.SystemColors.ControlText;
            dataGridViewCellStyle8.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle8.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle8.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.nonPerishableProductsTable.DefaultCellStyle = dataGridViewCellStyle8;
            this.nonPerishableProductsTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.nonPerishableProductsTable.GridColor = System.Drawing.SystemColors.ControlText;
            this.nonPerishableProductsTable.Location = new System.Drawing.Point(3, 3);
            this.nonPerishableProductsTable.Name = "nonPerishableProductsTable";
            this.nonPerishableProductsTable.ReadOnly = true;
            this.nonPerishableProductsTable.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle9.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle9.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle9.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle9.ForeColor = System.Drawing.SystemColors.WindowText;
            dataGridViewCellStyle9.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle9.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle9.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.nonPerishableProductsTable.RowHeadersDefaultCellStyle = dataGridViewCellStyle9;
            this.nonPerishableProductsTable.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToAllHeaders;
            this.nonPerishableProductsTable.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.CellSelect;
            this.nonPerishableProductsTable.Size = new System.Drawing.Size(785, 341);
            this.nonPerishableProductsTable.TabIndex = 0;
            // 
            // Column1
            // 
            this.Column1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.Column1.HeaderText = "Name";
            this.Column1.Name = "Column1";
            this.Column1.ReadOnly = true;
            // 
            // Column2
            // 
            this.Column2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.Column2.HeaderText = "Material";
            this.Column2.Name = "Column2";
            this.Column2.ReadOnly = true;
            // 
            // Column3
            // 
            this.Column3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.Column3.HeaderText = "Price($)";
            this.Column3.Name = "Column3";
            this.Column3.ReadOnly = true;
            // 
            // Column4
            // 
            this.Column4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.Column4.HeaderText = "Amount";
            this.Column4.Name = "Column4";
            this.Column4.ReadOnly = true;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.AutoSize = true;
            this.tableLayoutPanel1.ColumnCount = 6;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.66581F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.6658F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.6658F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.6658F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.6658F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.67101F));
            this.tableLayoutPanel1.Controls.Add(this.addButton, 4, 0);
            this.tableLayoutPanel1.Controls.Add(this.deleteButton, 3, 0);
            this.tableLayoutPanel1.Controls.Add(this.EditButton, 2, 0);
            this.tableLayoutPanel1.Controls.Add(this.PurchaseButton, 1, 0);
            this.tableLayoutPanel1.Controls.Add(this.SellButton, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.ShowAllButton, 5, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(3, 36);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(799, 31);
            this.tableLayoutPanel1.TabIndex = 1;
            // 
            // addButton
            // 
            this.addButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.addButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.addButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.addButton.BorderRadius = 10;
            this.addButton.BorderSize = 0;
            this.addButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.addButton.FlatAppearance.BorderSize = 0;
            this.addButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.addButton.ForeColor = System.Drawing.Color.Black;
            this.addButton.Location = new System.Drawing.Point(534, 2);
            this.addButton.Margin = new System.Windows.Forms.Padding(2);
            this.addButton.Name = "addButton";
            this.addButton.Size = new System.Drawing.Size(129, 27);
            this.addButton.TabIndex = 0;
            this.addButton.Text = "Add";
            this.addButton.TextColor = System.Drawing.Color.Black;
            this.addButton.UseVisualStyleBackColor = false;
            this.addButton.Click += new System.EventHandler(this.AddButtonClick);
            // 
            // deleteButton
            // 
            this.deleteButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.deleteButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.deleteButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.deleteButton.BorderRadius = 10;
            this.deleteButton.BorderSize = 0;
            this.deleteButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.deleteButton.FlatAppearance.BorderSize = 0;
            this.deleteButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.deleteButton.ForeColor = System.Drawing.Color.Black;
            this.deleteButton.Location = new System.Drawing.Point(401, 2);
            this.deleteButton.Margin = new System.Windows.Forms.Padding(2);
            this.deleteButton.Name = "deleteButton";
            this.deleteButton.Size = new System.Drawing.Size(129, 27);
            this.deleteButton.TabIndex = 1;
            this.deleteButton.Text = "Delete";
            this.deleteButton.TextColor = System.Drawing.Color.Black;
            this.deleteButton.UseVisualStyleBackColor = false;
            this.deleteButton.Click += new System.EventHandler(this.DeleteButtonClick);
            // 
            // EditButton
            // 
            this.EditButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.EditButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.EditButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.EditButton.BorderRadius = 10;
            this.EditButton.BorderSize = 0;
            this.EditButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.EditButton.FlatAppearance.BorderSize = 0;
            this.EditButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.EditButton.ForeColor = System.Drawing.Color.Black;
            this.EditButton.Location = new System.Drawing.Point(268, 2);
            this.EditButton.Margin = new System.Windows.Forms.Padding(2);
            this.EditButton.Name = "EditButton";
            this.EditButton.Size = new System.Drawing.Size(129, 27);
            this.EditButton.TabIndex = 2;
            this.EditButton.Text = "Edit";
            this.EditButton.TextColor = System.Drawing.Color.Black;
            this.EditButton.UseVisualStyleBackColor = false;
            this.EditButton.Click += new System.EventHandler(this.EditButtonClick);
            // 
            // PurchaseButton
            // 
            this.PurchaseButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.PurchaseButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.PurchaseButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.PurchaseButton.BorderRadius = 10;
            this.PurchaseButton.BorderSize = 0;
            this.PurchaseButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.PurchaseButton.FlatAppearance.BorderSize = 0;
            this.PurchaseButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.PurchaseButton.ForeColor = System.Drawing.Color.Black;
            this.PurchaseButton.Location = new System.Drawing.Point(135, 2);
            this.PurchaseButton.Margin = new System.Windows.Forms.Padding(2);
            this.PurchaseButton.Name = "PurchaseButton";
            this.PurchaseButton.Size = new System.Drawing.Size(129, 27);
            this.PurchaseButton.TabIndex = 4;
            this.PurchaseButton.Text = "Purchase";
            this.PurchaseButton.TextColor = System.Drawing.Color.Black;
            this.PurchaseButton.UseVisualStyleBackColor = false;
            this.PurchaseButton.Click += new System.EventHandler(this.PurchaseButtonClick);
            // 
            // SellButton
            // 
            this.SellButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.SellButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.SellButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.SellButton.BorderRadius = 10;
            this.SellButton.BorderSize = 0;
            this.SellButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.SellButton.FlatAppearance.BorderSize = 0;
            this.SellButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.SellButton.ForeColor = System.Drawing.Color.Black;
            this.SellButton.Location = new System.Drawing.Point(2, 2);
            this.SellButton.Margin = new System.Windows.Forms.Padding(2);
            this.SellButton.Name = "SellButton";
            this.SellButton.Size = new System.Drawing.Size(129, 27);
            this.SellButton.TabIndex = 5;
            this.SellButton.Text = "Sell";
            this.SellButton.TextColor = System.Drawing.Color.Black;
            this.SellButton.UseVisualStyleBackColor = false;
            this.SellButton.Click += new System.EventHandler(this.SellButtonClick);
            // 
            // ShowAllButton
            // 
            this.ShowAllButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.ShowAllButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.ShowAllButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.ShowAllButton.BorderRadius = 10;
            this.ShowAllButton.BorderSize = 0;
            this.ShowAllButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ShowAllButton.FlatAppearance.BorderSize = 0;
            this.ShowAllButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.ShowAllButton.ForeColor = System.Drawing.Color.Black;
            this.ShowAllButton.Location = new System.Drawing.Point(667, 2);
            this.ShowAllButton.Margin = new System.Windows.Forms.Padding(2);
            this.ShowAllButton.Name = "ShowAllButton";
            this.ShowAllButton.Size = new System.Drawing.Size(130, 27);
            this.ShowAllButton.TabIndex = 6;
            this.ShowAllButton.Text = "Show all";
            this.ShowAllButton.TextColor = System.Drawing.Color.Black;
            this.ShowAllButton.UseVisualStyleBackColor = false;
            this.ShowAllButton.Click += new System.EventHandler(this.ShowAllButtonClick);
            // 
            // tableLayoutPanel2
            // 
            this.tableLayoutPanel2.ColumnCount = 3;
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 29F));
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 162F));
            this.tableLayoutPanel2.Controls.Add(this.SearchButton, 1, 0);
            this.tableLayoutPanel2.Controls.Add(this.SearchTextBox, 0, 0);
            this.tableLayoutPanel2.Controls.Add(this.TotalLable, 2, 0);
            this.tableLayoutPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel2.Location = new System.Drawing.Point(2, 2);
            this.tableLayoutPanel2.Margin = new System.Windows.Forms.Padding(2);
            this.tableLayoutPanel2.Name = "tableLayoutPanel2";
            this.tableLayoutPanel2.RowCount = 1;
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel2.Size = new System.Drawing.Size(801, 29);
            this.tableLayoutPanel2.TabIndex = 2;
            // 
            // SearchButton
            // 
            this.SearchButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.SearchButton.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(226)))), ((int)(((byte)(168)))));
            this.SearchButton.BorderColor = System.Drawing.Color.PaleVioletRed;
            this.SearchButton.BorderRadius = 12;
            this.SearchButton.BorderSize = 0;
            this.SearchButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.SearchButton.FlatAppearance.BorderSize = 0;
            this.SearchButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.SearchButton.ForeColor = System.Drawing.Color.Black;
            this.SearchButton.Location = new System.Drawing.Point(612, 2);
            this.SearchButton.Margin = new System.Windows.Forms.Padding(2);
            this.SearchButton.Name = "SearchButton";
            this.SearchButton.Size = new System.Drawing.Size(25, 25);
            this.SearchButton.TabIndex = 1;
            this.SearchButton.Text = "Q";
            this.SearchButton.TextColor = System.Drawing.Color.Black;
            this.SearchButton.UseVisualStyleBackColor = false;
            this.SearchButton.Click += new System.EventHandler(this.SearchButtonClick);
            // 
            // SearchTextBox
            // 
            this.SearchTextBox.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.SearchTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.SearchTextBox.Location = new System.Drawing.Point(3, 3);
            this.SearchTextBox.Name = "SearchTextBox";
            this.SearchTextBox.Size = new System.Drawing.Size(604, 23);
            this.SearchTextBox.TabIndex = 2;
            this.SearchTextBox.Text = "Search...";
            this.SearchTextBox.Enter += new System.EventHandler(this.SearchTextBoxOnEnter);
            // 
            // TotalLable
            // 
            this.TotalLable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TotalLable.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.TotalLable.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TotalLable.ForeColor = System.Drawing.Color.White;
            this.TotalLable.Location = new System.Drawing.Point(642, 0);
            this.TotalLable.Name = "TotalLable";
            this.TotalLable.Size = new System.Drawing.Size(156, 29);
            this.TotalLable.TabIndex = 3;
            this.TotalLable.Text = "Total: 0$";
            this.TotalLable.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // dataGridTextBoxColumn1
            // 
            this.dataGridTextBoxColumn1.Format = "";
            this.dataGridTextBoxColumn1.FormatInfo = null;
            this.dataGridTextBoxColumn1.Width = -1;
            // 
            // dataGridTextBoxColumn2
            // 
            this.dataGridTextBoxColumn2.Format = "";
            this.dataGridTextBoxColumn2.FormatInfo = null;
            this.dataGridTextBoxColumn2.Width = -1;
            // 
            // faTabStripItem1
            // 
            this.faTabStripItem1.IsDrawn = true;
            this.faTabStripItem1.Name = "faTabStripItem1";
            this.faTabStripItem1.Size = new System.Drawing.Size(348, 174);
            this.faTabStripItem1.TabIndex = 0;
            this.faTabStripItem1.Title = "TabStrip Page 1";
            // 
            // faTabStripItem2
            // 
            this.faTabStripItem2.IsDrawn = true;
            this.faTabStripItem2.Name = "faTabStripItem2";
            this.faTabStripItem2.Size = new System.Drawing.Size(348, 174);
            this.faTabStripItem2.TabIndex = 1;
            this.faTabStripItem2.Title = "TabStrip Page 2";
            // 
            // dataGridTextBoxColumn3
            // 
            this.dataGridTextBoxColumn3.Format = "";
            this.dataGridTextBoxColumn3.FormatInfo = null;
            this.dataGridTextBoxColumn3.Width = -1;
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(805, 458);
            this.Controls.Add(this.Layout);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Location = new System.Drawing.Point(15, 15);
            this.MinimumSize = new System.Drawing.Size(584, 478);
            this.Name = "MainWindow";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Storage Manager";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.MainWindowClose);
            this.Load += new System.EventHandler(this.MainWindowLoad);
            this.Layout.ResumeLayout(false);
            this.Layout.PerformLayout();
            this.tabsTable.ResumeLayout(false);
            this.category1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.productsTable)).EndInit();
            this.category3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.spoilingProductsTable)).EndInit();
            this.category5.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.nonPerishableProductsTable)).EndInit();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel2.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();
        }

        private System.Windows.Forms.Label TotalLable;

        private RJCodeAdvance.RJControls.RJButton ShowAllButton;

        private System.Windows.Forms.RichTextBox SearchTextBox;

        private RJCodeAdvance.RJControls.RJButton SellButton;

        private RJCodeAdvance.RJControls.RJButton SearchButton;

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel2;

        private RJCodeAdvance.RJControls.RJButton PurchaseButton;

        private RJCodeAdvance.RJControls.RJButton EditButton;

        private RJCodeAdvance.RJControls.RJButton deleteButton;

        private System.Windows.Forms.Button button1;

        private RJCodeAdvance.RJControls.RJButton addButton;

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;

        private System.Windows.Forms.DataGridView spoilingProductsTable;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn4;
        private System.Windows.Forms.DataGridView productsTable;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn5;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn6;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn7;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn8;

        private System.Windows.Forms.DataGridViewTextBoxColumn Column4;

        private System.Windows.Forms.DataGridViewTextBoxColumn Column1;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column2;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column3;

        private System.Windows.Forms.DataGridView nonPerishableProductsTable;

        private System.Windows.Forms.DataGridTextBoxColumn dataGridTextBoxColumn3;

        private System.Windows.Forms.TabPage category3;
        private System.Windows.Forms.TabPage category5;

        private TradeWright.UI.Forms.TabControlExtra tabsTable;

        private System.Windows.Forms.TabPage category1;

        private FarsiLibrary.Win.FATabStripItem faTabStripItem1;
        private FarsiLibrary.Win.FATabStripItem faTabStripItem2;

        private System.Windows.Forms.DataGridTextBoxColumn dataGridTextBoxColumn1;
        private System.Windows.Forms.DataGridTextBoxColumn dataGridTextBoxColumn2;

        private System.Windows.Forms.TableLayoutPanel Layout;

        #endregion
    }
}