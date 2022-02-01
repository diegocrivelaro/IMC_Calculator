import { useState } from "react";
import "./app.css";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function calcIMC() {
    const heightFormatted = height.replace(".", "").replace(",", "");
    const weightFormatted = weight.replace(".", "").replace(",", "");

    const imc = (
      (weightFormatted / (heightFormatted * heightFormatted)) *
      1000
    ).toFixed(2);

    if (imc <= 16.9) {
      setMessage(`Seu IMC: ${imc}! Muito abaixo do peso!`);
    } else if (imc <= 18.4) {
      setMessage(`Seu IMC: ${imc}! Abaixo do peso!`);
    } else if (imc <= 24.9) {
      setMessage(`Seu IMC: ${imc}! Peso normal!`);
    } else if (imc <= 29.9) {
      setMessage(`Seu IMC: ${imc}! Acima do peso!`);
    } else if (imc <= 34.9) {
      setMessage("Obesidade I");
    } else if (imc <= 40) {
      setMessage("Obesidade II (severa)");
    } else if (imc > 40) {
      alert("Obesidade III (mórbida)");
    }
  }

  return (
    <div className="app">
      <div className="app_inf">
        <h1>Calculadora IMC</h1>
        <p>
          O índice de massa corporal é uma medida internacional usada para
          calcular se uma pessoa está dentro do seu peso ideal em relação à
          altura.
        </p>
      </div>
      <div className="app_calc">
        <input
          type="text"
          placeholder="Massa em KG (Ex: 70)"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Altura em Metros (Ex: 1.72)"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        ></input>
        <button onClick={calcIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}
