using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace curso_c_sharp.Fundamentos {
    internal class Inferencia {
        public static void Executar() {
            var nome = "Geison";
            // nome = 123; Uma vez que o tipo da variavel foi definido pela inferencia, esse tipo não pode ser modificado pela atribução de um outro tipo de valor.
            Console.WriteLine(nome);
        }
    }
}
