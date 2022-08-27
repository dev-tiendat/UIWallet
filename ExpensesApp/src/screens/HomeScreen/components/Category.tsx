import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import values from '../../../constants/values';
const width = Dimensions.get('screen').width;

interface Category {
  id: number;
  img: any;
  heading: string;
  paragraph: string;
  backgroundColor: string;
}

interface CategoryProps {
  category: Category;
  onPress: () => void;
}

const Category: React.FC<CategoryProps> = ({category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.container, {backgroundColor: category.backgroundColor}]}>
        <Image style={styles.image} source={category.img} />
        <Text style={[values.h2Style, {marginTop: 15}]}>
          {category.heading}
        </Text>
        <Text
          style={[
            values.pWhiteStyle,
            {textAlign: 'center', fontWeight: 'bold', marginTop: 5},
          ]}>
          {category.paragraph}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.33,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
  },
});

export default Category;
