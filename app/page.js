import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const frases = [
    {
      frase: "Nunca joguei, mas talvez eu seja uma revelação.",
      dia: "23-02"
    },
    {
      frase: "Fui induzido a isso",
      dia: "15-02"
    },
    {
      frase: "Esse bolo tem gosto de chipa",
      dia: "08-02"
    },
    {
      frase: "Aí sim hein",
      dia: ""
    },
    {
      frase: "Geralmente eu tenho a linguagem das ruas",
      dia: "17-03"
    },
    {
      frase: "Isso pode gerar algumas complicações",
      dia: ""
    },
    {
      frase: "Foi erro da minha parte",
      dia: "16-02"
    },
    {
      frase: "Eu to investindo na minha carreira",
      dia: "13-03"
    },
    {
      frase: "Ow, to na merda né?",
      dia: "22-03"
    },
    {
      frase: "To pensando em me afundar nessa moto aqui",
      dia: "15-02"
    },
    {
      frase: "Calmô gente, tem Julião pra todo mundo",
      dia: "17-02"
    },
    {
      frase: "Quem pode, pode. Eu estudei né",
      dia: "01-03"
    },
    {
      frase: "Sou cria do mato, to acostumado com calor e carrapicho",
      dia: "01-03"
    },
    {
      frase: "Com um celta eu vou para qualquer lugar",
      dia: "08-03"
    },
    {
      frase: "Pai tá voando!",
      dia: "13-03"
    },
    {
      frase: "Ela tem que fazer ran dan dan dan",
      dia: "29-03"
    },
    {
      frase: "Eu tenho mel, isso não da pra negar",
      dia: "05-04"
    },
    {
      frase: "Eu uso o Lameirão como barra",
      dia: "28-04"
    },
    {
      frase: "Tem shape é pra mostrar",
      dia: "11-05"
    },
    {
      frase: "Se eu tenho o padrão de modelete, porque eu vou pegar tilanguinha?",
      dia: "11-05"
    },
    {
      frase: "Eu como bastante, por isso que eu sou GIGANTE",
      dia: "14-04"
    },
    {
      frase: "To me guardando pro casamento",
      dia: "25-04"
    },
    {
      frase: "Que isso cara?",
      dia: ""
    },
    {
      frase: "Não sei se eles arrumaram ou o pai que fez magia",
      dia: "09-05"
    }
  ]
  return (
    <main>
      {frases.map((frase) => 
          <blockquote key={Math.random()}>
            {frase.frase}
            <span>{frase.dia}</span>
          </blockquote>
        )
      
      }
    </main>
  )
}
