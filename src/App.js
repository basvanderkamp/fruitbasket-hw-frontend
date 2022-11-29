import React, {useState} from 'react';
import './App.css';
import Button from "./Atributes/Elements/Button";
import {addOne, minOne, resetCount} from "./Atributes/Functions/Functions";
import FruitComponent from "./Atributes/Elements/FruitComponenet";
import Field from "./Atributes/Elements/Field";
import Radio from "./Atributes/Elements/Radio";

function App() {

    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState("");
    const [delivery, setDelivery] = useState("");
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    const [check, setCheck] = useState(true);

    function resetAll() {
        setBananas(0);
        setStrawberries(0);
        setApples(0,)
        setKiwis(0);
        setFirstname("");
        setLastname("");
        setAge(0);
        setZipcode("");
        setDelivery("every day");
        setTime("");
        setText("");
        setCheck(true);
    }




  return (
    <>
      <h1>Fruit basket delivery system</h1>


        <FruitComponent
            fruitText={"Bananas 🍌"}
            counter={"Bananas:"}
            fruit={bananas}
            increasement={() => {
                minOne(bananas, setBananas)
            }}
            decreasement={() => {
                addOne(bananas, setBananas)
            }}
            btnOne={"-1"}
            btnTwo={"+1"}>
        </FruitComponent>


        <FruitComponent
            fruitText={"Strawberries 🍓"}
            counter={"Strawberries:"}
            fruit={strawberries}
            increasement={() => {
                minOne(strawberries, setStrawberries)
            }}
            decreasement={() => {
                addOne(strawberries, setStrawberries)
            }}
            btnOne={"-1"}
            btnTwo={"+1"}>
        </FruitComponent>


        <FruitComponent
            fruitText={"Appels 🍏"}
            counter={"Apples:"}
            fruit={apples}
            increasement={() => {
                minOne(apples, setApples)
            }}
            decreasement={() => {
                addOne(apples, setApples)
            }}
            btnOne={"-1"}
            btnTwo={"+1"}>
        </FruitComponent>


        <FruitComponent
            fruitText={"Kiwi's 🥝"}
            counter={"Kiwi's:"}
            fruit={kiwis}
            increasement={() => {
                minOne(kiwis, setKiwis)
            }}
            decreasement={() => {
                addOne(kiwis, setKiwis)
            }}
            btnOne={"-1"}
            btnTwo={"+1"}>
        </FruitComponent>


        <p> push button to reset counters</p>

        <Button
            callFunction={() => {
                resetCount(setBananas, setStrawberries, setApples, setKiwis)
            }}>
            Reset
        </Button>


        <form action="">
            <Field
                name={"firstname"}
                fieldText={"First name: "}
                id={"firstName"}
                set={setFirstname}
            />
            <Field
                name={"lastname"}
                fieldText={"Last name: "}
                id={"lastName"}
                set={setLastname}
            />

            <Field
                name={"age"}
                fieldText={"Age: "}
                id={"age"}
                set={setAge}
            />
            <Field
                name={"zipcode"}
                fieldText={"Zip Code: "}
                id={"zipCode"}
                set={setZipcode}
            />

            <h2>Deliver frequentie</h2>
            <select name="deliver frequentie" onChange={(event) => setDelivery(event.target.value)} id="deliver">
                <option value="every day" >every day</option>
                <option value="every week">every week</option>
                <option value="every month" >every month</option>
            </select>
            <p></p>

            <Radio
            name={"deliverTime"}
            id={"day"}
            value={"daytime"}
            set={setTime}
            />
            <Radio
                name={"deliverTime"}
                id={"night"}
                value={"nighttime"}
                set={setTime}
            />
            <p></p>
            
            <Field
            name={"textfield"}
            fieldText={"messages"}
            id={"text"}
            set={setText}
            />

            <input type="checkbox"  id="checkbox" onChange={(event) => setCheck(false)}/>
            <label htmlFor="checkbox">i accept the terms & conditions </label>
            <p></p>


            <Button
                terms={check}
                callFunction={(() => {
                    console.log(firstname, lastname, age, zipcode)
                    console.log("you will get this order ", delivery," during ", time,)
                    console.log("client message: ", text)
                    console.log("order: ", bananas, " bananas, ", strawberries, " strawberries, ", apples, " apples, ", kiwis, " kiwis, ")
                    resetAll()
                })}
            >Submit order
            </Button>
        </form>


    </>
  );

}

export default App;
