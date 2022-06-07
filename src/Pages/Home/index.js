import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Moviments from '../../Components/Moviments';
import Actions from '../../Components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2500,00',
    date: '11/03/2022',
    type: 1 //receita /entrtadas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7200,00',
    date: '12/04/2022',
    type: 1 //receita /entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Ribeiro silva" />
        <Balance saldo="9.250.90" gastos="-527,00" />

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>
        
        <FlatList           
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Moviments data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
