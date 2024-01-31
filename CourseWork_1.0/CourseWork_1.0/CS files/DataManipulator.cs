using System;
using System.Collections.Generic;
using System.IO;
using CourseWork_1._0.Classes;
using Newtonsoft.Json;

namespace CourseWork_1._0{
    public static class DataManipulator{
        public static bool SaveDataToJson(List<Product> objectsToSave){
            try {
                using (StreamWriter saveFile = File.CreateText(InfoDb.SaveFilePath)) {
                    string output = JsonConvert.SerializeObject(objectsToSave);
                    saveFile.Write(output);
                }

                return true;
            }
            catch (Exception ex) {
                //TODO: Error if some problem with file or data
                return false;
            }
        }

        public static List<Product> LoadDataFromJson(){
            try {
                List<Product> loadedData = new List<Product>();
                using (StreamReader loadFile = File.OpenText(InfoDb.SaveFilePath)) {
                    string input = loadFile.ReadToEnd();
                    return JsonConvert.DeserializeObject<List<Product>>(input);
                }
            }
            catch (Exception ex) {
                //TODO: Error if some problem with file or data
                return new List<Product>();
            }
        }
    }
}