import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import colors from '../../../constants/colors';
import values from '../../../constants/values';

interface Transaction {
  id: number;
  img: any;
  heading: string;
  price: string;
  backgroundColor: string;
}

interface TransactionProps {
  transaction: Transaction;
}

const Transaction: React.FC<TransactionProps> = ({transaction}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: transaction.backgroundColor},
          ]}>
          <Image style={styles.image} source={transaction.img} />
        </View>
        <View>
          <Text style={values.pStyle}>{transaction.heading}</Text>
          <Text style={values.h2Style}>{transaction.price}</Text>
        </View>
      </View>
      <CustomButton
        width={50}
        height={28}
        radius={5}
        textSize={12}
        text="Details"
        backgroundColor={colors.orange}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    padding: 8,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});

export default Transaction;
