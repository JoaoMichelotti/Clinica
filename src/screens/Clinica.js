import React, { useState, useEffect} from "react";
import { StatusBar, Text } from "react-native";
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import Carregar from "../functions/Carregar";

export default function Clinica ({ navigation}) {

    const [ resultados, setResultados ] = useState({})

    useEffect(() => {
        Carregar().then((dados) => {

            const valido = JSON.parse(dados || "{}")

            setResultados(valido)

        }).catch((erro) => {
            alert(erro)
        })
    }, [])

    return (
        <Tela>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

            <Navegacao navigation={navigation}/>

            {Object.keys(resultados).length > 0 && 
                <Janela>
                    <Text style={{fontFamily: "Roboto", fontSize: 18, marginBottom: 8}}>
                        {resultados.nome}
                    </Text>

                    <Text style={{fontFamily: "Roboto"}}>
                        {resultados.horario}
                    </Text>

                    <Text style={{fontFamily: "Poppins"}}>
                        {resultados.categoria}
                    </Text>


                </Janela>
            
            }

        </Tela>


    )


}