using System.Collections.Generic;
using System.IO;
using CourseWork_1._0.Classes;
using Newtonsoft.Json;

namespace CourseWork_1._0
{
    public class DataManipulator
    {
        public void SaveDataToJson(List<Product> products,List<SpoilingProducts> spoilingProducts, List<NonPerishableProducts> nonPerishableProducts)
        {
            string productOutputJsonStr = JsonConvert.SerializeObject(products);
            string spoilingProductOutputJsonStr = JsonConvert.SerializeObject(spoilingProducts);
            string nonPerishableProductOutputJsonStr = JsonConvert.SerializeObject(nonPerishableProducts);

            StreamWriter file = File.CreateText(InfoDb.ProductSaveFilePath);
            file.Write(productOutputJsonStr);
            file.Close();

            file = File.CreateText(InfoDb.SpoilingProductSaveFilePath);
            file.Write(spoilingProductOutputJsonStr);
            file.Close();

            file = File.CreateText(InfoDb.NonPerishableProductSaveFilePath);
            file.Write(nonPerishableProductOutputJsonStr);
            file.Close();
        }

        public void LoadDataFromJson(ref List<Product> productsList,ref List<SpoilingProducts> spoilingProductsList,ref List<NonPerishableProducts> nonPerishableProductsList)
        {
            if (!File.Exists(InfoDb.ProductSaveFilePath))
            {
                File.CreateText(InfoDb.ProductSaveFilePath).Dispose();
            }

            if (!File.Exists(InfoDb.SpoilingProductSaveFilePath))
            {
                File.CreateText(InfoDb.SpoilingProductSaveFilePath).Dispose();
            }

            if (!File.Exists(InfoDb.NonPerishableProductSaveFilePath))
            {
                File.CreateText(InfoDb.NonPerishableProductSaveFilePath).Dispose();
            }

            StreamReader loadFile = File.OpenText(InfoDb.ProductSaveFilePath);

            string input = loadFile.ReadToEnd();
            if (!input.Equals(""))
            {
                productsList = JsonConvert.DeserializeObject<List<Product>>(input);
            }

            loadFile.Close();

            loadFile = File.OpenText(InfoDb.SpoilingProductSaveFilePath);
            input = loadFile.ReadToEnd();
            if (!input.Equals(""))
            {
                spoilingProductsList = JsonConvert.DeserializeObject<List<SpoilingProducts>>(input);
            }

            loadFile.Close();

            loadFile = File.OpenText(InfoDb.NonPerishableProductSaveFilePath);
            input = loadFile.ReadToEnd();
            if (!input.Equals(""))
            {
                nonPerishableProductsList = JsonConvert.DeserializeObject<List<NonPerishableProducts>>(input);
            }

            loadFile.Close();
        }
    }
}