
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { ImageSourcePropType } from 'react-native';

type Product = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
};


const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 120,
    image: require('../../assets/images/apple.jpeg'),
  },
  {
    id: 2,
    name: 'Bananas',
    price: 60,
    image: require('../../assets/images/bannana.jpeg'),
  },
  {
    id: 3,
    name: 'Carrots',
    price: 80,
    image: require('../../assets/images/carrat.jpeg'),
  },
  {
    id: 4,
    name: 'Tomatoes',
    price: 40,
    image: require('../../assets/images/tommato.jpeg'),
  },
];

export default function HomeScreen() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const total = products.reduce(
    (sum, product) =>
      sum + product.price * (cart[product.id] || 0),
    0
  );

  const totalItems = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Shopping Store</Text>
      <Text style={styles.subtitle}>Fresh products for you</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>

            {(cart[item.id] || 0) === 0 ? (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item.id)}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityRow}>
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.buttonText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>
                  {cart[item.id]}
                </Text>

                <TouchableOpacity
                  onPress={() => addToCart(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />

      <View style={styles.cartFooter}>
        <View>
          <Text style={styles.cartLabel}>
            Cart ({totalItems} items)
          </Text>
          <Text style={styles.total}>Total: ₹{total}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.checkoutButton,
            totalItems === 0 && styles.disabledButton,
          ]}
          disabled={totalItems === 0}
          onPress={() =>
            Alert.alert(
              'Checkout',
              `Your cart total is ₹${total}`
            )
          }
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    color: '#111827',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#16A34A',
    marginVertical: 8,
  },
  addButton: {
    backgroundColor: '#16A34A',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityButton: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  cartLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  checkoutButton: {
    backgroundColor: '#15803D',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
