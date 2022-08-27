import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import Greeter from './components/Greeter';
import Category from './components/Category';
import Transaction from './components/Transaction';
import Spacer from '../../components/Spacer';
import CustomInput from '../../components/CustomInput';
import values from '../../constants/values';
import {categories,transactions} from '../../constants/data';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPaddingView}>
        <Greeter
          user={{
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Jungkook_x_Samsung_Galaxy_August_2021.png',
            name: 'Phạm Tiến Đạt',
          }}
        />
        <Spacer height={20} />
        <CustomInput placeholder={'Search'} icon={'search'} />
      </View>
      <View style={{paddingLeft: values.horizontalPadding}}>
        <Spacer height={20} />
        <Text style={values.h1Style}>Categories</Text>
        <Spacer height={20} />
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <Category
              category={item}
              onPress={() => {
                console.log('onPress Category');
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{paddingHorizontal: values.horizontalPadding}}>
        <Spacer height={20} />
        <Text style={values.h1Style}>Transactions History</Text>
        <Spacer height={20} /> 
        <FlatList
        data={transactions}
        renderItem={({item}) =><Transaction transaction={item}/>}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
