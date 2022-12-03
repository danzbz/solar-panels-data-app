import { React, useState, useEffect } from 'react';
import Header from '../../components/Header';
import Select from '../../components/Select';
import BarChart from '../../components/BarChart';
import { MOCK_USER, MOCK_TYPE_USER } from '../../mock';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = () => {
    const [user, setUser] = useState(null);

    const Buscar = async (chave)=>{
        const valor = await AsyncStorage.getItem(chave)
        console.log(valor)
    }

    useEffect(() => {
        // chamada para api, que retorna o tipo de usuario
        //simulaçao chamada api
        Buscar(`@usuario`);
        const userLogged = MOCK_USER;
        setUser(userLogged);
    }, []);

    return (
        <Header title="Minha Conta" >
            <h1>{user?.type} | {user?.name}</h1>
            <Select list={MOCK_TYPE_USER} />
            {user?.charts.map((element, index) => (<BarChart key={index} data={element} />))}

        </Header>
    );
}

export default User;